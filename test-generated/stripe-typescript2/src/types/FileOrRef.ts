import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';

import type { File } from './File';
import { FileSchema } from './File';
/**
 * The file object this link points to.
 */
export type FileOrRef = string | File;

export const FileOrRefSchema: TypedSchema<FileOrRef> = typed<FileOrRef>(union(string(), FileSchema));
