import { literal, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';
/**
 * Data collection setting. If no available model provider meets the requirement, your request will return an error.
- allow: (default) allow providers which store user data non-transiently and may train on it

- deny: use only providers which do not collect user data.
 */
export type DataCollection = "deny" | "allow";

export const DataCollectionSchema: TypedSchema<DataCollection> = typed<DataCollection>(union(literal('deny'), literal('allow')));

/**
 * Enum values for DataCollection.
 * Use these constants for type-safe comparisons.
 */
export const DataCollection = { DENY: 'deny' as const, ALLOW: 'allow' as const } as const;
