import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';

import type { File } from './File';
import { FileSchema } from './File';
/**
 * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Any receipt or message sent to the customer notifying them of the charge.
 */
export type ReceiptOrRef = string | File;

export const ReceiptOrRefSchema: TypedSchema<ReceiptOrRef> = typed<ReceiptOrRef>(union(string(), FileSchema));
