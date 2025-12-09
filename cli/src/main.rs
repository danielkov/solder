//! CLI for OpenAPI code generation.

use anyhow::{Context, Result};
use clap::{Parser as ClapParser, Subcommand};
use parser::{parse, read};
use std::path::PathBuf;

#[derive(ClapParser, Debug)]
#[command(name = "oas-gen")]
#[command(author, version, about = "Generate SDKs and server interfaces from OpenAPI specifications", long_about = None)]
struct Cli {
    #[command(subcommand)]
    command: Option<Commands>,

    /// Path to the OpenAPI specification file (JSON or YAML)
    #[arg(value_name = "SPEC", global = true)]
    spec: Option<PathBuf>,

    /// Template to use for code generation (e.g., "typescript", "python", "rust")
    #[arg(short, long, value_name = "TEMPLATE", global = true)]
    template: Option<String>,

    /// Output directory for generated code
    #[arg(short, long, value_name = "DIR", global = true)]
    output: Option<PathBuf>,

    /// Service organization style
    #[arg(long, value_enum, default_value = "per-service", global = true)]
    service_style: ServiceStyleArg,

    /// Don't include documentation comments
    #[arg(long, global = true)]
    no_docs: bool,

    /// Resolve external references before generating
    #[arg(short = 'r', long, global = true)]
    resolve: bool,

    /// Verbose output
    #[arg(short, long, global = true)]
    verbose: bool,
}

#[derive(Subcommand, Debug)]
enum Commands {
    /// Resolve external $ref references and output a single combined spec
    Resolve {
        /// Path to the OpenAPI specification file (JSON or YAML)
        #[arg(value_name = "SPEC")]
        spec: PathBuf,

        /// Output file for resolved spec (defaults to stdout)
        #[arg(short, long, value_name = "FILE")]
        output: Option<PathBuf>,

        /// Verbose output
        #[arg(short, long)]
        verbose: bool,
    },
}

#[derive(Debug, Clone, Copy, clap::ValueEnum)]
enum ServiceStyleArg {
    PerService,
    SingleClient,
    ByTag,
}

impl From<ServiceStyleArg> for codegen::ServiceStyle {
    fn from(style: ServiceStyleArg) -> Self {
        match style {
            ServiceStyleArg::PerService => codegen::ServiceStyle::PerService,
            ServiceStyleArg::SingleClient => codegen::ServiceStyle::SingleClient,
            ServiceStyleArg::ByTag => codegen::ServiceStyle::ByTag,
        }
    }
}

fn main() -> Result<()> {
    let cli = Cli::parse();

    match cli.command {
        Some(Commands::Resolve { spec, output, verbose }) => {
            handle_resolve(spec, output, verbose)
        }
        None => {
            // Default command: generate
            let spec = cli.spec.ok_or_else(|| {
                anyhow::anyhow!("SPEC argument is required. Use --help for more information.")
            })?;
            let template = cli.template.ok_or_else(|| {
                anyhow::anyhow!("--template/-t is required for code generation. Use --help for more information.")
            })?;

            handle_generate(
                spec,
                template,
                cli.output,
                cli.service_style,
                cli.no_docs,
                cli.resolve,
                cli.verbose,
            )
        }
    }
}

fn handle_resolve(spec: PathBuf, output: Option<PathBuf>, verbose: bool) -> Result<()> {
    if verbose {
        eprintln!("🔍 Reading OpenAPI specification: {}", spec.display());
    }

    if verbose {
        eprintln!("🔗 Resolving external references...");
    }

    // Resolve the spec
    let resolved = parser::resolve::resolve(&spec)
        .with_context(|| format!("Failed to resolve spec at {}", spec.display()))?;

    if verbose {
        eprintln!("✅ Successfully resolved all external references");
    }

    // Write output
    if let Some(output_path) = output {
        if verbose {
            eprintln!("💾 Writing resolved spec to: {}", output_path.display());
        }
        std::fs::write(&output_path, &resolved)
            .with_context(|| format!("Failed to write to {}", output_path.display()))?;
        println!("✅ Resolved spec written to {}", output_path.display());
    } else {
        // Output to stdout
        println!("{}", resolved);
    }

    Ok(())
}

fn handle_generate(
    spec: PathBuf,
    template: String,
    output: Option<PathBuf>,
    service_style: ServiceStyleArg,
    no_docs: bool,
    resolve: bool,
    verbose: bool,
) -> Result<()> {
    if verbose {
        eprintln!("🔍 Reading OpenAPI specification: {}", spec.display());
    }

    // Read the OpenAPI specification
    let spec_content = if resolve {
        if verbose {
            eprintln!("🔗 Resolving external references...");
        }
        parser::resolve::resolve(&spec)
            .with_context(|| format!("Failed to resolve spec at {}", spec.display()))?
    } else {
        read(&spec)?
    };

    if verbose {
        eprintln!("📄 Parsing OpenAPI specification...");
    }

    // Parse the specification
    let oas = parse(&spec_content)?;

    if verbose {
        eprintln!("🏗️  Building intermediate representation...");
    }

    // Build the GenIR
    let gen_ir: codegen::GenIr = oas.into();

    if verbose {
        eprintln!(
            "📦 Found {} types, {} services",
            gen_ir.types.len(),
            gen_ir.services.len()
        );
    }

    // Determine output directory
    let output_dir = output.unwrap_or_else(|| {
        let spec_name = spec
            .file_stem()
            .and_then(|s| s.to_str())
            .unwrap_or("output");
        PathBuf::from(format!("{}-{}", spec_name, template))
    });

    if verbose {
        eprintln!("📁 Output directory: {}", output_dir.display());
    }

    // Create configuration
    let config = codegen::Config {
        service_style: service_style.into(),
        include_docs: !no_docs,
        lang_options: std::collections::BTreeMap::new(),
    };

    if verbose {
        eprintln!("🔨 Generating code using '{}' template...", template);
    }

    // Generate code
    let registry = generate::GeneratorRegistry::with_defaults();
    let vfs = registry
        .generate(&template, &gen_ir, &config)
        .with_context(|| format!("Failed to generate code for template '{}'", template))?;

    if verbose {
        eprintln!("💾 Writing {} files to disk...", vfs.len());
    }

    // Write to disk
    vfs.write_to_disk(&output_dir)
        .with_context(|| format!("Failed to write files to {}", output_dir.display()))?;

    if verbose {
        eprintln!("🪝 Running post-write hooks...");
    }

    // Call after_write_to_disk hook
    registry
        .after_write_to_disk(&template, &output_dir, &vfs)
        .with_context(|| "Failed to run after_write_to_disk hook")?;

    println!(
        "✅ Successfully generated {} files in {}",
        vfs.len(),
        output_dir.display()
    );

    // List generated files
    if verbose {
        println!("\nGenerated files:");
        for (path, _) in vfs.files() {
            println!("  📄 {}", path.display());
        }
    }

    Ok(())
}
