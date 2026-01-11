import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { File } from './File';
import { FileSchema } from './File';
export type ReceiptOrRef = string | File;

export const ReceiptOrRefSchema: TypedSchema<ReceiptOrRef> = typed<ReceiptOrRef>(union(string(), FileSchema));