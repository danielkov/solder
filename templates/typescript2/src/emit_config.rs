//! Emit configuration files (package.json, tsconfig.json, .gitignore).

use codegen::{Config, GenIr, Result, VirtualFS};

/// Emit all static configuration files into the VFS.
pub fn emit_config_files(ir: &GenIr, _config: &Config, vfs: &mut VirtualFS) -> Result<()> {
    emit_package_json(ir, vfs)?;
    emit_tsconfig(vfs)?;
    emit_gitignore(vfs)?;
    Ok(())
}

fn emit_package_json(ir: &GenIr, vfs: &mut VirtualFS) -> Result<()> {
    let package_json = serde_json::json!({
        "name": ir.api.package_name.kebab.to_lowercase(),
        "version": ir.api.version,
        "description": ir.api.docs.summary.as_ref().unwrap_or(&"Generated SDK".to_string()),
        "main": "dist/index.js",
        "types": "dist/index.d.ts",
        "scripts": {
            "build": "tsc",
            "test": "jest"
        },
        "dependencies": {
            "@speakeasy-api/tonic": "0.1.0"
        },
        "devDependencies": {
            "typescript": "^5.0.0",
            "@types/web": "^0.0.294"
        }
    });

    vfs.add_file(
        "package.json",
        serde_json::to_string_pretty(&package_json).unwrap(),
    );
    Ok(())
}

fn emit_tsconfig(vfs: &mut VirtualFS) -> Result<()> {
    let tsconfig = serde_json::json!({
        "compilerOptions": {
            "target": "ES2022",
            "module": "commonjs",
            "lib": ["ESNext"],
            "declaration": true,
            "outDir": "./dist",
            "rootDir": "./src",
            "strict": true,
            "esModuleInterop": true,
            "skipLibCheck": true,
            "forceConsistentCasingInFileNames": true
        },
        "include": ["src/**/*"],
        "exclude": ["node_modules", "dist"],
        "types": ["@types/web"]
    });

    vfs.add_file(
        "tsconfig.json",
        serde_json::to_string_pretty(&tsconfig).unwrap(),
    );
    Ok(())
}

fn emit_gitignore(vfs: &mut VirtualFS) -> Result<()> {
    vfs.add_file(".gitignore", "node_modules\ndist\n*.log\n");
    Ok(())
}
