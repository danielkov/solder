.PHONY: help build test clean fmt fmt-check lint doc install release check check-ci test-cli all

# ============================================================================
# Configuration
# ============================================================================

# Auto-discover specs (files in examples/, excluding directories)
SPEC_FILES := $(wildcard examples/*.json examples/*.yaml examples/*.yml)
SPEC_NAMES := $(basename $(notdir $(SPEC_FILES)))

# Available templates
TEMPLATES := typescript rust-axum

# Output directory base
OUTPUT_BASE := test-generated

# Default spec and template for `make run`
SPEC ?= petstore
TEMPLATE ?= typescript

# ============================================================================
# Help
# ============================================================================

help:
	@echo "OAS-Gen2 Development Commands"
	@echo "=============================="
	@echo ""
	@echo "Build & Test:"
	@echo "  make build       - Build in debug mode"
	@echo "  make test        - Run all tests"
	@echo "  make check       - Run fmt, lint, and test (local)"
	@echo "  make check-ci    - Run fmt-check, lint, and test (CI)"
	@echo "  make all         - Run check and build"
	@echo ""
	@echo "Code Generation:"
	@echo "  make run SPEC=<name> TEMPLATE=<template>  - Generate from spec"
	@echo "  make run                                  - Generate petstore with typescript (default)"
	@echo "  make run-all                              - Generate all specs with all templates"
	@echo "  make list-specs                           - List available specs"
	@echo "  make list-templates                       - List available templates"
	@echo ""
	@echo "Examples:"
	@echo "  make run SPEC=openrouter TEMPLATE=typescript"
	@echo "  make run SPEC=petstore TEMPLATE=rust-axum"
	@echo "  make run SPEC=multi-file TEMPLATE=typescript"
	@echo ""
	@echo "Maintenance:"
	@echo "  make clean       - Clean build artifacts"
	@echo "  make fmt         - Format code"
	@echo "  make lint        - Run clippy"
	@echo "  make doc         - Generate and open documentation"
	@echo "  make install     - Build and install binary"
	@echo "  make release     - Build optimized release binary"
	@echo ""
	@echo "Available specs: $(SPEC_NAMES) multi-file"
	@echo "Available templates: $(TEMPLATES)"

# List available specs
list-specs:
	@echo "Available specs:"
	@for spec in $(SPEC_NAMES); do echo "  $$spec"; done
	@echo "  multi-file"

# List available templates
list-templates:
	@echo "Available templates:"
	@for tmpl in $(TEMPLATES); do echo "  $$tmpl"; done

# ============================================================================
# Code Generation
# ============================================================================

# Main run target - finds spec file automatically
run:
	@SPEC_FILE=""; \
	RECURSIVE_FLAG=""; \
	if [ -f "examples/$(SPEC).json" ]; then \
		SPEC_FILE="examples/$(SPEC).json"; \
	elif [ -f "examples/$(SPEC).yaml" ]; then \
		SPEC_FILE="examples/$(SPEC).yaml"; \
	elif [ -f "examples/$(SPEC).yml" ]; then \
		SPEC_FILE="examples/$(SPEC).yml"; \
	elif [ -f "examples/$(SPEC)/spec.yaml" ]; then \
		SPEC_FILE="examples/$(SPEC)/spec.yaml"; \
		RECURSIVE_FLAG="-r"; \
	elif [ -f "examples/$(SPEC)/spec.yml" ]; then \
		SPEC_FILE="examples/$(SPEC)/spec.yml"; \
		RECURSIVE_FLAG="-r"; \
	elif [ -f "examples/$(SPEC)/spec.json" ]; then \
		SPEC_FILE="examples/$(SPEC)/spec.json"; \
		RECURSIVE_FLAG="-r"; \
	else \
		echo "Error: Spec not found: $(SPEC)"; \
		echo "Available specs:"; \
		for f in examples/*.json examples/*.yaml examples/*.yml; do \
			[ -f "$$f" ] && basename "$$f" | sed 's/\.[^.]*$$//'; \
		done; \
		for d in examples/*/spec.*; do \
			[ -f "$$d" ] && dirname "$$d" | xargs basename; \
		done; \
		exit 1; \
	fi; \
	OUTPUT_DIR="$(OUTPUT_BASE)/$(SPEC)-$(TEMPLATE)"; \
	echo "Generating $(SPEC) with $(TEMPLATE) -> $$OUTPUT_DIR"; \
	cargo run --bin oas-gen -- generate $$SPEC_FILE -t $(TEMPLATE) -v -o $$OUTPUT_DIR $$RECURSIVE_FLAG

# Generate all combinations
run-all:
	@for spec in $(SPEC_NAMES) multi-file; do \
		for tmpl in $(TEMPLATES); do \
			echo ""; \
			echo "========================================"; \
			echo "Generating $$spec with $$tmpl"; \
			echo "========================================"; \
			$(MAKE) run SPEC=$$spec TEMPLATE=$$tmpl || true; \
		done; \
	done

# ============================================================================
# Build
# ============================================================================

build:
	cargo build

release:
	cargo build --release
	@echo "Binary at: target/release/oas-gen"

install:
	cargo install --path cli

# ============================================================================
# Testing
# ============================================================================

test:
	cargo test --verbose

test-cli: run-all

# Test specific crates
test-parser:
	cargo test -p parser

test-ir:
	cargo test -p ir

test-codegen:
	cargo test -p codegen

test-generate:
	cargo test -p generate

test-typescript:
	cargo test -p typescript

test-overlay:
	cargo test -p overlay

test-lint:
	cargo test -p lint

test-all: test-parser test-ir test-codegen test-generate test-typescript test-overlay test-lint

# ============================================================================
# Code Quality
# ============================================================================

fmt:
	cargo fmt

fmt-check:
	cargo fmt -- --check

lint:
	cargo clippy -- -D warnings

check: fmt lint test

check-ci: fmt-check lint test

# ============================================================================
# Documentation
# ============================================================================

doc:
	cargo doc --open --no-deps

# ============================================================================
# Cleanup
# ============================================================================

clean:
	cargo clean
	rm -rf $(OUTPUT_BASE)/*/

clean-generated:
	rm -rf $(OUTPUT_BASE)/*/

# ============================================================================
# Demo targets (different service styles)
# ============================================================================

demo-per-service:
	cargo run --bin oas-gen -- generate examples/petstore.json -t typescript --service-style per-service -o demo-per-service

demo-single-client:
	cargo run --bin oas-gen -- generate examples/petstore.json -t typescript --service-style single-client -o demo-single-client

demo-by-tag:
	cargo run --bin oas-gen -- generate examples/petstore.json -t typescript --service-style by-tag -o demo-by-tag

clean-demo:
	rm -rf demo-per-service demo-single-client demo-by-tag

# ============================================================================
# Verification
# ============================================================================

verify-typescript:
	@OUTPUT_DIR="$(OUTPUT_BASE)/petstore-typescript"; \
	if [ -d "$$OUTPUT_DIR" ]; then \
		echo "Checking TypeScript compilation..."; \
		cd "$$OUTPUT_DIR" && npm install && npx tsc --noEmit || echo "TypeScript check failed"; \
	else \
		echo "No generated TypeScript found. Run: make run SPEC=petstore TEMPLATE=typescript"; \
	fi

# ============================================================================
# Utilities
# ============================================================================

update:
	cargo update

tree:
	cargo tree

timings:
	cargo build --timings

profile:
	cargo build --release --timings

debug-run:
	RUST_BACKTRACE=1 cargo run --bin oas-gen -- generate examples/petstore.json -t typescript -v

outdated:
	cargo outdated

watch:
	cargo watch -x check -x test
