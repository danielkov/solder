import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';

import type { File } from './File';
import { FileSchema } from './File';
/**
 * The back of a document returned by a [file upload](https://stripe.com/docs/api#create_file) with a `purpose` value of `identity_document`.
 */
export type BackOrRef = string | File;

export const BackOrRefSchema: TypedSchema<BackOrRef> = typed<BackOrRef>(union(string(), FileSchema));
