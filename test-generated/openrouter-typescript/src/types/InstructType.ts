import { TypedSchema, literal, typed, union } from '@speakeasy-api/tonic';
export type InstructType = "none" | "airoboros" | "alpaca" | "alpaca-modif" | "chatml" | "claude" | "code-llama" | "gemma" | "llama2" | "llama3" | "mistral" | "nemotron" | "neural" | "openchat" | "phi3" | "rwkv" | "vicuna" | "zephyr" | "deepseek-r1" | "deepseek-v3.1" | "qwq" | "qwen3";

export const InstructTypeSchema: TypedSchema<InstructType> = typed<InstructType>(union(
  literal("none"),
  literal("airoboros"),
  literal("alpaca"),
  literal("alpaca-modif"),
  literal("chatml"),
  literal("claude"),
  literal("code-llama"),
  literal("gemma"),
  literal("llama2"),
  literal("llama3"),
  literal("mistral"),
  literal("nemotron"),
  literal("neural"),
  literal("openchat"),
  literal("phi3"),
  literal("rwkv"),
  literal("vicuna"),
  literal("zephyr"),
  literal("deepseek-r1"),
  literal("deepseek-v3.1"),
  literal("qwq"),
  literal("qwen3"),
));

/**
 * Enum values for InstructType.
 * Use these constants for type-safe comparisons.
 */
export const InstructType = {
  NONE: "none" as const,
  AIROBOROS: "airoboros" as const,
  ALPACA: "alpaca" as const,
  ALPACA_MODIF: "alpaca-modif" as const,
  CHATML: "chatml" as const,
  CLAUDE: "claude" as const,
  CODE_LLAMA: "code-llama" as const,
  GEMMA: "gemma" as const,
  LLAMA2: "llama2" as const,
  LLAMA3: "llama3" as const,
  MISTRAL: "mistral" as const,
  NEMOTRON: "nemotron" as const,
  NEURAL: "neural" as const,
  OPENCHAT: "openchat" as const,
  PHI3: "phi3" as const,
  RWKV: "rwkv" as const,
  VICUNA: "vicuna" as const,
  ZEPHYR: "zephyr" as const,
  DEEPSEEK_R1: "deepseek-r1" as const,
  DEEPSEEK_V3_1: "deepseek-v3.1" as const,
  QWQ: "qwq" as const,
  QWEN3: "qwen3" as const,
} as const;