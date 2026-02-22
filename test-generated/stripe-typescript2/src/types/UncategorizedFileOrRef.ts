import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';

import type { File } from './File';
import { FileSchema } from './File';
/**
 * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Any additional evidence or statements.
 */
export type UncategorizedFileOrRef = string | File;

export const UncategorizedFileOrRefSchema: TypedSchema<UncategorizedFileOrRef> = typed<UncategorizedFileOrRef>(union(string(), FileSchema));
