import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';

import type { File } from './File';
import { FileSchema } from './File';
/**
 * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Additional documentation supporting the dispute.
 */
export type AdditionalDocumentationOrRef = string | File;

export const AdditionalDocumentationOrRefSchema: TypedSchema<AdditionalDocumentationOrRef> = typed<AdditionalDocumentationOrRef>(union(string(), FileSchema));
