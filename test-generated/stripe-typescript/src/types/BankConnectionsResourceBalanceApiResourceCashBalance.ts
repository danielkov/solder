import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { AvailableProperty } from './AvailableProperty';
import { AvailablePropertySchema } from './AvailableProperty';
/**
 * BankConnectionsResourceBalanceAPIResourceCashBalance
 *
 * 
 */
export interface BankConnectionsResourceBalanceApiResourceCashBalance {
  /**
   * The funds available to the account holder. Typically this is the current balance after subtracting any outbound pending transactions and adding any inbound pending transactions.

Each key is a three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase.

Each value is a integer amount. A positive amount indicates money owed to the account holder. A negative amount indicates money owed by the account holder.
   */
  available?: AvailableProperty;
}

export const BankConnectionsResourceBalanceApiResourceCashBalanceSchema: TypedSchema<BankConnectionsResourceBalanceApiResourceCashBalance> = typed<BankConnectionsResourceBalanceApiResourceCashBalance>(object({
  get available() { return optional(AvailablePropertySchema) },
}));