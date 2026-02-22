import { number, string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';
/**
 * A value in string or number format that is a large number
 */
export type BigNumberUnion = number | string | number;

export const BigNumberUnionSchema: TypedSchema<BigNumberUnion> = typed<BigNumberUnion>(union(number(), string(), number()));
