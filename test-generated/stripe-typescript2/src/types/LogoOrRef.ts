import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';

import type { File } from './File';
import { FileSchema } from './File';
/**
 * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) A logo for the account that will be used in Checkout instead of the icon and without the account's name next to it if provided. Must be at least 128px x 128px.
 */
export type LogoOrRef = string | File;

export const LogoOrRefSchema: TypedSchema<LogoOrRef> = typed<LogoOrRef>(union(string(), FileSchema));
