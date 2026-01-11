import { TypedSchema, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { BankConnectionsResourceBalanceApiResourceCashBalance } from './BankConnectionsResourceBalanceApiResourceCashBalance';
import { BankConnectionsResourceBalanceApiResourceCashBalanceSchema } from './BankConnectionsResourceBalanceApiResourceCashBalance';
import type { BankConnectionsResourceBalanceApiResourceCreditBalance } from './BankConnectionsResourceBalanceApiResourceCreditBalance';
import { BankConnectionsResourceBalanceApiResourceCreditBalanceSchema } from './BankConnectionsResourceBalanceApiResourceCreditBalance';
import type { CurrentProperty } from './CurrentProperty';
import { CurrentPropertySchema } from './CurrentProperty';
/**
 * BankConnectionsResourceBalance
 *
 * 
 */
export interface BankConnectionsResourceBalance {
  /**
   * The time that the external institution calculated this balance. Measured in seconds since the Unix epoch.
   */
  asOf: number;
  /**
   * BankConnectionsResourceBalanceAPIResourceCashBalance
   *
   * 
   */
  cash?: BankConnectionsResourceBalanceApiResourceCashBalance;
  /**
   * BankConnectionsResourceBalanceAPIResourceCreditBalance
   *
   * 
   */
  credit?: BankConnectionsResourceBalanceApiResourceCreditBalance;
  /**
   * The balances owed to (or by) the account holder, before subtracting any outbound pending transactions or adding any inbound pending transactions.

Each key is a three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase.

Each value is a integer amount. A positive amount indicates money owed to the account holder. A negative amount indicates money owed by the account holder.
   */
  current: CurrentProperty;
  /**
   * The `type` of the balance. An additional hash is included on the balance with a name matching this value.
   */
  type: string;
}

export const BankConnectionsResourceBalanceSchema: TypedSchema<BankConnectionsResourceBalance> = typed<BankConnectionsResourceBalance>(object({
  asOf: number(),
  get cash() { return optional(BankConnectionsResourceBalanceApiResourceCashBalanceSchema) },
  get credit() { return optional(BankConnectionsResourceBalanceApiResourceCreditBalanceSchema) },
  current: CurrentPropertySchema,
  type: string(),
}));