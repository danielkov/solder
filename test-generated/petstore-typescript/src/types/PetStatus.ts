import { TypedSchema, literal, typed, union } from '@speakeasy-api/tonic';
export type PetStatus = "available" | "pending" | "adopted" | "not_available";

export const PetStatusSchema: TypedSchema<PetStatus> = typed<PetStatus>(union(
  literal("available"),
  literal("pending"),
  literal("adopted"),
  literal("not_available"),
));

/**
 * Enum values for PetStatus.
 * Use these constants for type-safe comparisons.
 */
export const PetStatus = {
  AVAILABLE: "available" as const,
  PENDING: "pending" as const,
  ADOPTED: "adopted" as const,
  NOT_AVAILABLE: "not_available" as const,
} as const;