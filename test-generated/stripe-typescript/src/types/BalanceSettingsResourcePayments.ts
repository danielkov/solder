import { TypedSchema, boolean, object, optional, typed } from '@speakeasy-api/tonic';

import type { BalanceSettingsResourcePayouts } from './BalanceSettingsResourcePayouts';
import { BalanceSettingsResourcePayoutsSchema } from './BalanceSettingsResourcePayouts';
import type { BalanceSettingsResourceSettlementTiming } from './BalanceSettingsResourceSettlementTiming';
import { BalanceSettingsResourceSettlementTimingSchema } from './BalanceSettingsResourceSettlementTiming';
/**
 * BalanceSettingsResourcePayments
 *
 * 
 */
export interface BalanceSettingsResourcePayments {
  /**
   * A Boolean indicating if Stripe should try to reclaim negative balances from an attached bank account. See [Understanding Connect account balances](/connect/account-balances) for details. The default value is `false` when [controller.requirement_collection](/api/accounts/object#account_object-controller-requirement_collection) is `application`, which includes Custom accounts, otherwise `true`.
   */
  debitNegativeBalances?: boolean;
  /**
   * Settings specific to the account's payouts.
   */
  payouts?: BalanceSettingsResourcePayouts;
  /**
   * BalanceSettingsResourceSettlementTiming
   *
   * 
   */
  settlementTiming: BalanceSettingsResourceSettlementTiming;
}

export const BalanceSettingsResourcePaymentsSchema: TypedSchema<BalanceSettingsResourcePayments> = typed<BalanceSettingsResourcePayments>(object({
  debitNegativeBalances: optional(boolean()),
  get payouts() { return optional(BalanceSettingsResourcePayoutsSchema) },
  settlementTiming: BalanceSettingsResourceSettlementTimingSchema,
}));