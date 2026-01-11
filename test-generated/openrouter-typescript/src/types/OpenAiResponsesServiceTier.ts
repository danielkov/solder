import { TypedSchema, literal, typed, union } from '@speakeasy-api/tonic';
export type OpenAiResponsesServiceTier = "auto" | "default" | "flex" | "priority" | "scale";

export const OpenAiResponsesServiceTierSchema: TypedSchema<OpenAiResponsesServiceTier> = typed<OpenAiResponsesServiceTier>(union(
  literal("auto"),
  literal("default"),
  literal("flex"),
  literal("priority"),
  literal("scale"),
));

/**
 * Enum values for OpenAiResponsesServiceTier.
 * Use these constants for type-safe comparisons.
 */
export const OpenAiResponsesServiceTier = {
  AUTO: "auto" as const,
  DEFAULT: "default" as const,
  FLEX: "flex" as const,
  PRIORITY: "priority" as const,
  SCALE: "scale" as const,
} as const;