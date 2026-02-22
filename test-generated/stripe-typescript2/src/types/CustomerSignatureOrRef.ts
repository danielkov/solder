import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';

import type { File } from './File';
import { FileSchema } from './File';
/**
 * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) A relevant document or contract showing the customer's signature.
 */
export type CustomerSignatureOrRef = string | File;

export const CustomerSignatureOrRefSchema: TypedSchema<CustomerSignatureOrRef> = typed<CustomerSignatureOrRef>(union(string(), FileSchema));
