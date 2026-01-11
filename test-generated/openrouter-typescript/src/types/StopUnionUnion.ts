import { TypedSchema, array, string, typed, union } from '@speakeasy-api/tonic';
export type StopUnionUnion = string | Array<string>;

export const StopUnionUnionSchema: TypedSchema<StopUnionUnion> = typed<StopUnionUnion>(union(string(), array(string())));