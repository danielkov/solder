import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';

import type { TransferReversal } from './TransferReversal';
import { TransferReversalSchema } from './TransferReversal';
/**
 * The transfer reversal that's associated with the refund. Only present if the charge came from another Stripe account.
 */
export type SourceTransferReversalOrRef = string | TransferReversal;

export const SourceTransferReversalOrRefSchema: TypedSchema<SourceTransferReversalOrRef> = typed<SourceTransferReversalOrRef>(union(string(), TransferReversalSchema));
