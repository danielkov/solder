import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { File } from './File';
import { FileSchema } from './File';
export type CustomerSignatureOrRef = string | File;

export const CustomerSignatureOrRefSchema: TypedSchema<CustomerSignatureOrRef> = typed<CustomerSignatureOrRef>(union(string(), FileSchema));