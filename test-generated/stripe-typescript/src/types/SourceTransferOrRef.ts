import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { Transfer } from './Transfer';
import { TransferSchema } from './Transfer';
export type SourceTransferOrRef = string | Transfer;

export const SourceTransferOrRefSchema: TypedSchema<SourceTransferOrRef> = typed<SourceTransferOrRef>(union(string(), TransferSchema));