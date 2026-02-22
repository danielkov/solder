import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';

import type { File } from './File';
import { FileSchema } from './File';
/**
 * A File ID representing an image to display on the reader
 */
export type SplashscreenOrRef = string | File;

export const SplashscreenOrRefSchema: TypedSchema<SplashscreenOrRef> = typed<SplashscreenOrRef>(union(string(), FileSchema));
