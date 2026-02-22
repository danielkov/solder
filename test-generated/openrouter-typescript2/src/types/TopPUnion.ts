import { nullable, number, typed, union, unknown } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';
export type TopPUnion = number | any | null;

export const TopPUnionSchema: TypedSchema<TopPUnion> = typed<TopPUnion>(union(number(), nullable(unknown())));
