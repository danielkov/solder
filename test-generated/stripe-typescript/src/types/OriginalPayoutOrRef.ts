import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { Payout } from './Payout';
import { PayoutSchema } from './Payout';
export type OriginalPayoutOrRef = string | Payout;

export const OriginalPayoutOrRefSchema: TypedSchema<OriginalPayoutOrRef> = typed<OriginalPayoutOrRef>(union(string(), PayoutSchema));