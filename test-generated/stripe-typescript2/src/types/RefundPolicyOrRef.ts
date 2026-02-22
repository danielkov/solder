import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';

import type { File } from './File';
import { FileSchema } from './File';
/**
 * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Your refund policy, as shown to the customer.
 */
export type RefundPolicyOrRef = string | File;

export const RefundPolicyOrRefSchema: TypedSchema<RefundPolicyOrRef> = typed<RefundPolicyOrRef>(union(string(), FileSchema));
