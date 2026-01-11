import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { File } from './File';
import { FileSchema } from './File';
export type RefundPolicyOrRef = string | File;

export const RefundPolicyOrRefSchema: TypedSchema<RefundPolicyOrRef> = typed<RefundPolicyOrRef>(union(string(), FileSchema));