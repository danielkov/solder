import { TypedSchema, literal, typed, union } from '@speakeasy-api/tonic';
export type ModelGroup = "Router" | "Media" | "Other" | "GPT" | "Claude" | "Gemini" | "Grok" | "Cohere" | "Nova" | "Qwen" | "Yi" | "DeepSeek" | "Mistral" | "Llama2" | "Llama3" | "Llama4" | "PaLM" | "RWKV" | "Qwen3";

export const ModelGroupSchema: TypedSchema<ModelGroup> = typed<ModelGroup>(union(
  literal("Router"),
  literal("Media"),
  literal("Other"),
  literal("GPT"),
  literal("Claude"),
  literal("Gemini"),
  literal("Grok"),
  literal("Cohere"),
  literal("Nova"),
  literal("Qwen"),
  literal("Yi"),
  literal("DeepSeek"),
  literal("Mistral"),
  literal("Llama2"),
  literal("Llama3"),
  literal("Llama4"),
  literal("PaLM"),
  literal("RWKV"),
  literal("Qwen3"),
));

/**
 * Enum values for ModelGroup.
 * Use these constants for type-safe comparisons.
 */
export const ModelGroup = {
  ROUTER: "Router" as const,
  MEDIA: "Media" as const,
  OTHER: "Other" as const,
  GPT: "GPT" as const,
  CLAUDE: "Claude" as const,
  GEMINI: "Gemini" as const,
  GROK: "Grok" as const,
  COHERE: "Cohere" as const,
  NOVA: "Nova" as const,
  QWEN: "Qwen" as const,
  YI: "Yi" as const,
  DEEP_SEEK: "DeepSeek" as const,
  MISTRAL: "Mistral" as const,
  LLAMA2: "Llama2" as const,
  LLAMA3: "Llama3" as const,
  LLAMA4: "Llama4" as const,
  PA_LM: "PaLM" as const,
  RWKV: "RWKV" as const,
  QWEN3: "Qwen3" as const,
} as const;