import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { File } from './File';
import { FileSchema } from './File';
export type CustomerCommunicationOrRef = string | File;

export const CustomerCommunicationOrRefSchema: TypedSchema<CustomerCommunicationOrRef> = typed<CustomerCommunicationOrRef>(union(string(), FileSchema));