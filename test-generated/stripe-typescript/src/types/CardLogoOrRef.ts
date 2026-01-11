import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { File } from './File';
import { FileSchema } from './File';
export type CardLogoOrRef = string | File;

export const CardLogoOrRefSchema: TypedSchema<CardLogoOrRef> = typed<CardLogoOrRef>(union(string(), FileSchema));