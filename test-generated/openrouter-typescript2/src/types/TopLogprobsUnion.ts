import { nullable, number, typed, union, unknown } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';
export type TopLogprobsUnion = number | any | null;

export const TopLogprobsUnionSchema: TypedSchema<TopLogprobsUnion> = typed<TopLogprobsUnion>(union(number(), nullable(unknown())));
