import { TypedSchema, literal, typed, union } from '@speakeasy-api/tonic';
export type FaqCategory = "general" | "orders" | "shipping" | "returns" | "pets";

export const FaqCategorySchema: TypedSchema<FaqCategory> = typed<FaqCategory>(union(
  literal("general"),
  literal("orders"),
  literal("shipping"),
  literal("returns"),
  literal("pets"),
));

/**
 * Enum values for FaqCategory.
 * Use these constants for type-safe comparisons.
 */
export const FaqCategory = {
  GENERAL: "general" as const,
  ORDERS: "orders" as const,
  SHIPPING: "shipping" as const,
  RETURNS: "returns" as const,
  PETS: "pets" as const,
} as const;