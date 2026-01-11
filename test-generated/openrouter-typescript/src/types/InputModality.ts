import { TypedSchema, literal, typed, union } from '@speakeasy-api/tonic';
export type InputModality = "text" | "image" | "file" | "audio" | "video";

export const InputModalitySchema: TypedSchema<InputModality> = typed<InputModality>(union(
  literal("text"),
  literal("image"),
  literal("file"),
  literal("audio"),
  literal("video"),
));

/**
 * Enum values for InputModality.
 * Use these constants for type-safe comparisons.
 */
export const InputModality = {
  TEXT: "text" as const,
  IMAGE: "image" as const,
  FILE: "file" as const,
  AUDIO: "audio" as const,
  VIDEO: "video" as const,
} as const;