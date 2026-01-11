import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { File } from './File';
import { FileSchema } from './File';
export type CashReceiptOrRef = string | File;

export const CashReceiptOrRefSchema: TypedSchema<CashReceiptOrRef> = typed<CashReceiptOrRef>(union(string(), FileSchema));