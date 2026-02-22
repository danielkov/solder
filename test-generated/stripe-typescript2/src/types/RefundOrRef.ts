import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';

import type { Refund } from './Refund';
import { RefundSchema } from './Refund';
/**
 * ID of the refund.
 */
export type RefundOrRef = string | Refund;

export const RefundOrRefSchema: TypedSchema<RefundOrRef> = typed<RefundOrRef>(union(string(), RefundSchema));
