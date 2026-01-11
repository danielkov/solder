import { TypedSchema, array, number, string, typed, union } from '@speakeasy-api/tonic';
export type PromptUnion = string | Array<string> | Array<number> | Array<Array<number>>;

export const PromptUnionSchema: TypedSchema<PromptUnion> = typed<PromptUnion>(union(string(), array(string()), array(number()), array(array(number()))));