import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';

import type { Payout } from './Payout';
import { PayoutSchema } from './Payout';
/**
 * If the payout reverses, this is the ID of the payout that reverses this payout.
 */
export type ReversedByOrRef = string | Payout;

export const ReversedByOrRefSchema: TypedSchema<ReversedByOrRef> = typed<ReversedByOrRef>(union(string(), PayoutSchema));
