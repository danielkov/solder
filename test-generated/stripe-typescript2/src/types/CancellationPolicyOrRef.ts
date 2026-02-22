import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';

import type { File } from './File';
import { FileSchema } from './File';
/**
 * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Your subscription cancellation policy, as shown to the customer.
 */
export type CancellationPolicyOrRef = string | File;

export const CancellationPolicyOrRefSchema: TypedSchema<CancellationPolicyOrRef> = typed<CancellationPolicyOrRef>(union(string(), FileSchema));
