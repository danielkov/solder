import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { File } from './File';
import { FileSchema } from './File';
export type DuplicateChargeDocumentationOrRef = string | File;

export const DuplicateChargeDocumentationOrRefSchema: TypedSchema<DuplicateChargeDocumentationOrRef> = typed<DuplicateChargeDocumentationOrRef>(union(string(), FileSchema));