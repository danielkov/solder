import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { UsedProperty } from './UsedProperty';
import { UsedPropertySchema } from './UsedProperty';
/**
 * BankConnectionsResourceBalanceAPIResourceCreditBalance
 *
 * 
 */
export interface BankConnectionsResourceBalanceApiResourceCreditBalance {
  /**
   * The credit that has been used by the account holder.

Each key is a three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase.

Each value is a integer amount. A positive amount indicates money owed to the account holder. A negative amount indicates money owed by the account holder.
   */
  used?: UsedProperty;
}

export const BankConnectionsResourceBalanceApiResourceCreditBalanceSchema: TypedSchema<BankConnectionsResourceBalanceApiResourceCreditBalance> = typed<BankConnectionsResourceBalanceApiResourceCreditBalance>(object({
  get used() { return optional(UsedPropertySchema) },
}));