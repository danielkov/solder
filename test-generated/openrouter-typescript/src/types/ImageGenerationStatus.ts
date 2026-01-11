import { TypedSchema, literal, typed, union } from '@speakeasy-api/tonic';
export type ImageGenerationStatus = "in_progress" | "completed" | "generating" | "failed";

export const ImageGenerationStatusSchema: TypedSchema<ImageGenerationStatus> = typed<ImageGenerationStatus>(union(
  literal("in_progress"),
  literal("completed"),
  literal("generating"),
  literal("failed"),
));

/**
 * Enum values for ImageGenerationStatus.
 * Use these constants for type-safe comparisons.
 */
export const ImageGenerationStatus = {
  IN_PROGRESS: "in_progress" as const,
  COMPLETED: "completed" as const,
  GENERATING: "generating" as const,
  FAILED: "failed" as const,
} as const;