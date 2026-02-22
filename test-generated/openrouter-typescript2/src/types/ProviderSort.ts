import { literal, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';
/**
 * The sorting strategy to use for this request, if "order" is not specified. When set, no load balancing is performed.
 */
export type ProviderSort = "price" | "throughput" | "latency";

export const ProviderSortSchema: TypedSchema<ProviderSort> = typed<ProviderSort>(union(literal('price'), literal('throughput'), literal('latency')));

/**
 * Enum values for ProviderSort.
 * Use these constants for type-safe comparisons.
 */
export const ProviderSort = {
  PRICE: 'price' as const,
  THROUGHPUT: 'throughput' as const,
  LATENCY: 'latency' as const,
} as const;
