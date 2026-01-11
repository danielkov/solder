import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { Transfer } from './Transfer';
import { TransferSchema } from './Transfer';
export type TransferOrRef = string | Transfer;

export const TransferOrRefSchema: TypedSchema<TransferOrRef> = typed<TransferOrRef>(union(string(), TransferSchema));