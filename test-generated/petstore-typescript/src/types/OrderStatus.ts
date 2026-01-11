import { TypedSchema, literal, typed, union } from '@speakeasy-api/tonic';
export type OrderStatus = "pending" | "approved" | "completed" | "cancelled";

export const OrderStatusSchema: TypedSchema<OrderStatus> = typed<OrderStatus>(union(
  literal("pending"),
  literal("approved"),
  literal("completed"),
  literal("cancelled"),
));

/**
 * Enum values for OrderStatus.
 * Use these constants for type-safe comparisons.
 */
export const OrderStatus = {
  PENDING: "pending" as const,
  APPROVED: "approved" as const,
  COMPLETED: "completed" as const,
  CANCELLED: "cancelled" as const,
} as const;