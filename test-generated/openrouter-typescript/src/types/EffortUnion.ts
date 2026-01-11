import { TypedSchema, nullable, string, typed, union, unknown } from '@speakeasy-api/tonic';
export type EffortUnion = string | any | null;

export const EffortUnionSchema: TypedSchema<EffortUnion> = typed<EffortUnion>(union(string(), nullable(unknown())));