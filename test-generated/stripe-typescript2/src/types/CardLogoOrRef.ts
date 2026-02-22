import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';

import type { File } from './File';
import { FileSchema } from './File';
/**
 * The file for the card logo to use with physical bundles that support card logos. Must have a `purpose` value of `issuing_logo`.
 */
export type CardLogoOrRef = string | File;

export const CardLogoOrRefSchema: TypedSchema<CardLogoOrRef> = typed<CardLogoOrRef>(union(string(), FileSchema));
