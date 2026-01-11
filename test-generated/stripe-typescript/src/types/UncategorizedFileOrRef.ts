import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { File } from './File';
import { FileSchema } from './File';
export type UncategorizedFileOrRef = string | File;

export const UncategorizedFileOrRefSchema: TypedSchema<UncategorizedFileOrRef> = typed<UncategorizedFileOrRef>(union(string(), FileSchema));