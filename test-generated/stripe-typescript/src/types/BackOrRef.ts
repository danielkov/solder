import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { File } from './File';
import { FileSchema } from './File';
export type BackOrRef = string | File;

export const BackOrRefSchema: TypedSchema<BackOrRef> = typed<BackOrRef>(union(string(), FileSchema));