import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';

import type { File } from './File';
import { FileSchema } from './File';
/**
 * (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Copy of the card statement showing that the product had already been paid for.
 */
export type CardStatementOrRef = string | File;

export const CardStatementOrRefSchema: TypedSchema<CardStatementOrRef> = typed<CardStatementOrRef>(union(string(), FileSchema));
