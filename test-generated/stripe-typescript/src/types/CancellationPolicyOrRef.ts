import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { File } from './File';
import { FileSchema } from './File';
export type CancellationPolicyOrRef = string | File;

export const CancellationPolicyOrRefSchema: TypedSchema<CancellationPolicyOrRef> = typed<CancellationPolicyOrRef>(union(string(), FileSchema));