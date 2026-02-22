import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';

import type { File } from './File';
import { FileSchema } from './File';
/**
 * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Documentation showing proof that a service was provided to the customer. This could include a copy of a signed contract, work order, or other form of written agreement.
 */
export type ServiceDocumentationOrRef = string | File;

export const ServiceDocumentationOrRefSchema: TypedSchema<ServiceDocumentationOrRef> = typed<ServiceDocumentationOrRef>(union(string(), FileSchema));
