import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { File } from './File';
import { FileSchema } from './File';
export type FileOrRef = string | File;

export const FileOrRefSchema: TypedSchema<FileOrRef> = typed<FileOrRef>(union(string(), FileSchema));