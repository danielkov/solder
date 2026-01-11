import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { TransferReversal } from './TransferReversal';
import { TransferReversalSchema } from './TransferReversal';
export type SourceTransferReversalOrRef = string | TransferReversal;

export const SourceTransferReversalOrRefSchema: TypedSchema<SourceTransferReversalOrRef> = typed<SourceTransferReversalOrRef>(union(string(), TransferReversalSchema));