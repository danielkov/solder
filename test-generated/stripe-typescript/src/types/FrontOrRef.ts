import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { File } from './File';
import { FileSchema } from './File';
export type FrontOrRef = string | File;

export const FrontOrRefSchema: TypedSchema<FrontOrRef> = typed<FrontOrRef>(union(string(), FileSchema));