import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { File } from './File';
import { FileSchema } from './File';
export type SplashscreenOrRef = string | File;

export const SplashscreenOrRefSchema: TypedSchema<SplashscreenOrRef> = typed<SplashscreenOrRef>(union(string(), FileSchema));