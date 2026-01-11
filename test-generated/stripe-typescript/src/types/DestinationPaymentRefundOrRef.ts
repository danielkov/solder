import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { Refund } from './Refund';
import { RefundSchema } from './Refund';
export type DestinationPaymentRefundOrRef = string | Refund;

export const DestinationPaymentRefundOrRefSchema: TypedSchema<DestinationPaymentRefundOrRef> = typed<DestinationPaymentRefundOrRef>(union(string(), RefundSchema));