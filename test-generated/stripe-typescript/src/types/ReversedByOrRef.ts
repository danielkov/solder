import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { Payout } from './Payout';
import { PayoutSchema } from './Payout';
export type ReversedByOrRef = string | Payout;

export const ReversedByOrRefSchema: TypedSchema<ReversedByOrRef> = typed<ReversedByOrRef>(union(string(), PayoutSchema));