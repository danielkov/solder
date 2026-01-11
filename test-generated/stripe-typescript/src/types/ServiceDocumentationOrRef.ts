import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { File } from './File';
import { FileSchema } from './File';
export type ServiceDocumentationOrRef = string | File;

export const ServiceDocumentationOrRefSchema: TypedSchema<ServiceDocumentationOrRef> = typed<ServiceDocumentationOrRef>(union(string(), FileSchema));