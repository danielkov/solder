import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { File } from './File';
import { FileSchema } from './File';
export type IconOrRef = string | File;

export const IconOrRefSchema: TypedSchema<IconOrRef> = typed<IconOrRef>(union(string(), FileSchema));