import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { File } from './File';
import { FileSchema } from './File';
export type CardStatementOrRef = string | File;

export const CardStatementOrRefSchema: TypedSchema<CardStatementOrRef> = typed<CardStatementOrRef>(union(string(), FileSchema));