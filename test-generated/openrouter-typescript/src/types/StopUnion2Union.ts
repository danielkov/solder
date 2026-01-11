import { TypedSchema, array, string, typed, union } from '@speakeasy-api/tonic';
export type StopUnion2Union = string | Array<string>;

export const StopUnion2UnionSchema: TypedSchema<StopUnion2Union> = typed<StopUnion2Union>(union(string(), array(string())));