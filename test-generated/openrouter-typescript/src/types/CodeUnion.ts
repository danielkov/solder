import { TypedSchema, nullable, typed, union, unknown } from '@speakeasy-api/tonic';

import type { CodeUnionUnion } from './CodeUnionUnion';
import { CodeUnionUnionSchema } from './CodeUnionUnion';
export type CodeUnion = CodeUnionUnion | any | null;

export const CodeUnionSchema: TypedSchema<CodeUnion> = typed<CodeUnion>(union(CodeUnionUnionSchema, nullable(unknown())));