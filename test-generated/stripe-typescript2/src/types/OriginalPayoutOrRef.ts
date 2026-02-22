import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';

import type { Payout } from './Payout';
import { PayoutSchema } from './Payout';
/**
 * If the payout reverses another, this is the ID of the original payout.
 */
export type OriginalPayoutOrRef = string | Payout;

export const OriginalPayoutOrRefSchema: TypedSchema<OriginalPayoutOrRef> = typed<OriginalPayoutOrRef>(union(string(), PayoutSchema));
