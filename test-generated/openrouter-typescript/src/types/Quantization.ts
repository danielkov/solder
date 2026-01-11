import { TypedSchema, literal, typed, union } from '@speakeasy-api/tonic';
export type Quantization = "int4" | "int8" | "fp4" | "fp6" | "fp8" | "fp16" | "bf16" | "fp32" | "unknown";

export const QuantizationSchema: TypedSchema<Quantization> = typed<Quantization>(union(
  literal("int4"),
  literal("int8"),
  literal("fp4"),
  literal("fp6"),
  literal("fp8"),
  literal("fp16"),
  literal("bf16"),
  literal("fp32"),
  literal("unknown"),
));

/**
 * Enum values for Quantization.
 * Use these constants for type-safe comparisons.
 */
export const Quantization = {
  INT4: "int4" as const,
  INT8: "int8" as const,
  FP4: "fp4" as const,
  FP6: "fp6" as const,
  FP8: "fp8" as const,
  FP16: "fp16" as const,
  BF16: "bf16" as const,
  FP32: "fp32" as const,
  UNKNOWN: "unknown" as const,
} as const;