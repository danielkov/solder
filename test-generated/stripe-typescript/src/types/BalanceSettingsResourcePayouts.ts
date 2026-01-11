import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { BalanceSettingsResourcePayoutSchedule } from './BalanceSettingsResourcePayoutSchedule';
import { BalanceSettingsResourcePayoutScheduleSchema } from './BalanceSettingsResourcePayoutSchedule';
import type { MinimumBalanceByCurrencyProperty } from './MinimumBalanceByCurrencyProperty';
import { MinimumBalanceByCurrencyPropertySchema } from './MinimumBalanceByCurrencyProperty';
/**
 * BalanceSettingsResourcePayouts
 *
 * 
 */
export interface BalanceSettingsResourcePayouts {
  /**
   * The minimum balance amount to retain per currency after automatic payouts. Only funds that exceed these amounts are paid out. Learn more about the [minimum balances for automatic payouts](/payouts/minimum-balances-for-automatic-payouts).
   */
  minimumBalanceByCurrency?: MinimumBalanceByCurrencyProperty;
  /**
   * Details on when funds from charges are available, and when they are paid out to an external account. See our [Setting Bank and Debit Card Payouts](https://stripe.com/docs/connect/bank-transfers#payout-information) documentation for details.
   */
  schedule?: BalanceSettingsResourcePayoutSchedule;
  /**
   * The text that appears on the bank account statement for payouts. If not set, this defaults to the platform's bank descriptor as set in the Dashboard.
   */
  statementDescriptor?: string;
  /**
   * Whether the funds in this account can be paid out.
   */
  status: string;
}

export const BalanceSettingsResourcePayoutsSchema: TypedSchema<BalanceSettingsResourcePayouts> = typed<BalanceSettingsResourcePayouts>(object({
  get minimumBalanceByCurrency() { return optional(MinimumBalanceByCurrencyPropertySchema) },
  get schedule() { return optional(BalanceSettingsResourcePayoutScheduleSchema) },
  statementDescriptor: optional(string()),
  status: string(),
}));