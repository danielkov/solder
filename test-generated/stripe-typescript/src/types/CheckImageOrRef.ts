import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { File } from './File';
import { FileSchema } from './File';
export type CheckImageOrRef = string | File;

export const CheckImageOrRefSchema: TypedSchema<CheckImageOrRef> = typed<CheckImageOrRef>(union(string(), FileSchema));