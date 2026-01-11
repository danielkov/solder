import { TypedSchema, boolean, object, optional, typed } from '@speakeasy-api/tonic';

import type { PostBalanceSettingsRequestPayouts } from './PostBalanceSettingsRequestPayouts';
import { PostBalanceSettingsRequestPayoutsSchema } from './PostBalanceSettingsRequestPayouts';
import type { PostBalanceSettingsRequestSettlementTiming } from './PostBalanceSettingsRequestSettlementTiming';
import { PostBalanceSettingsRequestSettlementTimingSchema } from './PostBalanceSettingsRequestSettlementTiming';
/**
 * payments
 *
 * Settings that apply to the [Payments Balance](https://docs.stripe.com/api/balance).
 */
export interface PostBalanceSettingsRequestPayments {
  debitNegativeBalances?: boolean;
  /**
   * payouts
   */
  payouts?: PostBalanceSettingsRequestPayouts;
  /**
   * settlement_timing
   */
  settlementTiming?: PostBalanceSettingsRequestSettlementTiming;
}

export const PostBalanceSettingsRequestPaymentsSchema: TypedSchema<PostBalanceSettingsRequestPayments> = typed<PostBalanceSettingsRequestPayments>(object({
  debitNegativeBalances: optional(boolean()),
  get payouts() { return optional(PostBalanceSettingsRequestPayoutsSchema) },
  get settlementTiming() { return optional(PostBalanceSettingsRequestSettlementTimingSchema) },
}));