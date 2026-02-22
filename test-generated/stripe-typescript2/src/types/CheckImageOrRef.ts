import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';

import type { File } from './File';
import { FileSchema } from './File';
/**
 * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Image of the front and back of the check that was used to pay for the product.
 */
export type CheckImageOrRef = string | File;

export const CheckImageOrRefSchema: TypedSchema<CheckImageOrRef> = typed<CheckImageOrRef>(union(string(), FileSchema));
