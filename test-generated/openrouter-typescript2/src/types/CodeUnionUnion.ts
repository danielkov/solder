import { number, string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';
export type CodeUnionUnion = string | number;

export const CodeUnionUnionSchema: TypedSchema<CodeUnionUnion> = typed<CodeUnionUnion>(union(string(), number()));
