import { TypedSchema, object, string, typed } from '@speakeasy-api/tonic';

import type { BalanceSettingsResourcePayments } from './BalanceSettingsResourcePayments';
import { BalanceSettingsResourcePaymentsSchema } from './BalanceSettingsResourcePayments';
/**
 * BalanceSettingsResourceBalanceSettings
 *
 * Options for customizing account balances and payout settings for a Stripe platform’s connected accounts.
 */
export interface BalanceSettings {
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: string;
  /**
   * BalanceSettingsResourcePayments
   *
   * 
   */
  payments: BalanceSettingsResourcePayments;
}

export const BalanceSettingsSchema: TypedSchema<BalanceSettings> = typed<BalanceSettings>(object({
  object: string(),
  payments: BalanceSettingsResourcePaymentsSchema,
}));