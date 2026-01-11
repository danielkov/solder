import { TypedSchema, boolean, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { AvailableProperty } from './AvailableProperty';
import { AvailablePropertySchema } from './AvailableProperty';
import type { CustomerBalanceCustomerBalanceSettings } from './CustomerBalanceCustomerBalanceSettings';
import { CustomerBalanceCustomerBalanceSettingsSchema } from './CustomerBalanceCustomerBalanceSettings';
/**
 * cash_balance
 *
 * A customer's `Cash balance` represents real funds. Customers can add funds to their cash balance by sending a bank transfer. These funds can be used for payment and can eventually be paid out to your bank account.
 */
export interface CashBalance {
  /**
   * A hash of all cash balances available to this customer. You cannot delete a customer with any cash balances, even if the balance is 0. Amounts are represented in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal).
   */
  available?: AvailableProperty;
  /**
   * The ID of the customer whose cash balance this object represents.
   */
  customer: string;
  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: string;
  /**
   * CustomerBalanceCustomerBalanceSettings
   *
   * 
   */
  settings: CustomerBalanceCustomerBalanceSettings;
}

export const CashBalanceSchema: TypedSchema<CashBalance> = typed<CashBalance>(object({
  get available() { return optional(AvailablePropertySchema) },
  customer: string(),
  livemode: boolean(),
  object: string(),
  settings: CustomerBalanceCustomerBalanceSettingsSchema,
}));