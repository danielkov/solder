import { TypedSchema, literal, typed, union } from '@speakeasy-api/tonic';
export type OutputModality = "text" | "image" | "embeddings";

export const OutputModalitySchema: TypedSchema<OutputModality> = typed<OutputModality>(union(
  literal("text"),
  literal("image"),
  literal("embeddings"),
));

/**
 * Enum values for OutputModality.
 * Use these constants for type-safe comparisons.
 */
export const OutputModality = {
  TEXT: "text" as const,
  IMAGE: "image" as const,
  EMBEDDINGS: "embeddings" as const,
} as const;