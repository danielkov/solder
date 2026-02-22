import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';

import type { File } from './File';
import { FileSchema } from './File';
/**
 * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Any communication with the customer that you feel is relevant to your case. Examples include emails proving that the customer received the product or service, or demonstrating their use of or satisfaction with the product or service.
 */
export type CustomerCommunicationOrRef = string | File;

export const CustomerCommunicationOrRefSchema: TypedSchema<CustomerCommunicationOrRef> = typed<CustomerCommunicationOrRef>(union(string(), FileSchema));
