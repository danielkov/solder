import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';

import type { Refund } from './Refund';
import { RefundSchema } from './Refund';
/**
 * Linked payment refund for the transfer reversal.
 */
export type DestinationPaymentRefundOrRef = string | Refund;

export const DestinationPaymentRefundOrRefSchema: TypedSchema<DestinationPaymentRefundOrRef> = typed<DestinationPaymentRefundOrRef>(union(string(), RefundSchema));
