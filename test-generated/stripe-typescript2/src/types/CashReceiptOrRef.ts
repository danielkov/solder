import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';

import type { File } from './File';
import { FileSchema } from './File';
/**
 * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Copy of the receipt showing that the product had been paid for in cash.
 */
export type CashReceiptOrRef = string | File;

export const CashReceiptOrRefSchema: TypedSchema<CashReceiptOrRef> = typed<CashReceiptOrRef>(union(string(), FileSchema));
