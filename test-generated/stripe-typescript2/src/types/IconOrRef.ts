import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';

import type { File } from './File';
import { FileSchema } from './File';
/**
 * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) An icon for the account. Must be square and at least 128px x 128px.
 */
export type IconOrRef = string | File;

export const IconOrRefSchema: TypedSchema<IconOrRef> = typed<IconOrRef>(union(string(), FileSchema));
