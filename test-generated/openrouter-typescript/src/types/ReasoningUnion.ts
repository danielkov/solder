import { TypedSchema, nullable, string, typed, union, unknown } from '@speakeasy-api/tonic';
export type ReasoningUnion = string | any | null;

export const ReasoningUnionSchema: TypedSchema<ReasoningUnion> = typed<ReasoningUnion>(union(string(), nullable(unknown())));