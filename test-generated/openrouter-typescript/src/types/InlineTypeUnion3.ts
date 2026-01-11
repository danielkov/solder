import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';
export type InlineTypeUnion3 = string | string | string;

export const InlineTypeUnion3Schema: TypedSchema<InlineTypeUnion3> = typed<InlineTypeUnion3>(union(string(), string(), string()));