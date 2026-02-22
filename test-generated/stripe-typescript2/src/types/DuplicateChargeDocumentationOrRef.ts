import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';

import type { File } from './File';
import { FileSchema } from './File';
/**
 * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Documentation for the prior charge that can uniquely identify the charge, such as a receipt, shipping label, work order, etc. This document should be paired with a similar document from the disputed payment that proves the two payments are separate.
 */
export type DuplicateChargeDocumentationOrRef = string | File;

export const DuplicateChargeDocumentationOrRefSchema: TypedSchema<DuplicateChargeDocumentationOrRef> = typed<DuplicateChargeDocumentationOrRef>(union(string(), FileSchema));
