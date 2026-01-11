import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { File } from './File';
import { FileSchema } from './File';
export type ShippingDocumentationOrRef = string | File;

export const ShippingDocumentationOrRefSchema: TypedSchema<ShippingDocumentationOrRef> = typed<ShippingDocumentationOrRef>(union(string(), FileSchema));