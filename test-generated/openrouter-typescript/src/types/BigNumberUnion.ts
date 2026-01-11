import { TypedSchema, number, string, typed, union } from '@speakeasy-api/tonic';
export type BigNumberUnion = number | string | number;

export const BigNumberUnionSchema: TypedSchema<BigNumberUnion> = typed<BigNumberUnion>(union(number(), string(), number()));