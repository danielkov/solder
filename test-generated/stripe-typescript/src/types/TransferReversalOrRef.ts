import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { TransferReversal } from './TransferReversal';
import { TransferReversalSchema } from './TransferReversal';
export type TransferReversalOrRef = string | TransferReversal;

export const TransferReversalOrRefSchema: TypedSchema<TransferReversalOrRef> = typed<TransferReversalOrRef>(union(string(), TransferReversalSchema));