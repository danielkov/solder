import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';

import type { TransferReversal } from './TransferReversal';
import { TransferReversalSchema } from './TransferReversal';
/**
 * This refers to the transfer reversal object if the accompanying transfer reverses. This is only applicable if the charge was created using the destination parameter.
 */
export type TransferReversalOrRef = string | TransferReversal;

export const TransferReversalOrRefSchema: TypedSchema<TransferReversalOrRef> = typed<TransferReversalOrRef>(union(string(), TransferReversalSchema));
