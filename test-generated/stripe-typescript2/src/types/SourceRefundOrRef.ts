import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';

import type { Refund } from './Refund';
import { RefundSchema } from './Refund';
/**
 * ID of the refund responsible for the transfer reversal.
 */
export type SourceRefundOrRef = string | Refund;

export const SourceRefundOrRefSchema: TypedSchema<SourceRefundOrRef> = typed<SourceRefundOrRef>(union(string(), RefundSchema));
