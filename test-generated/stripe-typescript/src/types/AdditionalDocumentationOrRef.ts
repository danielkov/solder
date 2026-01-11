import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { File } from './File';
import { FileSchema } from './File';
export type AdditionalDocumentationOrRef = string | File;

export const AdditionalDocumentationOrRefSchema: TypedSchema<AdditionalDocumentationOrRef> = typed<AdditionalDocumentationOrRef>(union(string(), FileSchema));