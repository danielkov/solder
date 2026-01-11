import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { File } from './File';
import { FileSchema } from './File';
export type LogoOrRef = string | File;

export const LogoOrRefSchema: TypedSchema<LogoOrRef> = typed<LogoOrRef>(union(string(), FileSchema));