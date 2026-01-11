import { TypedSchema, boolean, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { AccountOrRef } from './AccountOrRef';
import { AccountOrRefSchema } from './AccountOrRef';
import type { ApplicationOrRef } from './ApplicationOrRef';
import { ApplicationOrRefSchema } from './ApplicationOrRef';
import type { BalanceTransactionOrRef } from './BalanceTransactionOrRef';
import { BalanceTransactionOrRefSchema } from './BalanceTransactionOrRef';
import type { ChargeOrRef } from './ChargeOrRef';
import { ChargeOrRefSchema } from './ChargeOrRef';
import type { OriginatingTransactionOrRef } from './OriginatingTransactionOrRef';
import { OriginatingTransactionOrRefSchema } from './OriginatingTransactionOrRef';
import type { PlatformEarningFeeSource } from './PlatformEarningFeeSource';
import { PlatformEarningFeeSourceSchema } from './PlatformEarningFeeSource';
import type { RefundsProperty } from './RefundsProperty';
import { RefundsPropertySchema } from './RefundsProperty';
/**
 * PlatformFee
 *
 * 
 */
export interface ApplicationFee {
  /**
   * ID of the Stripe account this fee was taken from.
   */
  account: AccountOrRef;
  /**
   * Amount earned, in cents (or local equivalent).
   */
  amount: number;
  /**
   * Amount in cents (or local equivalent) refunded (can be less than the amount attribute on the fee if a partial refund was issued)
   */
  amountRefunded: number;
  /**
   * ID of the Connect application that earned the fee.
   */
  application: ApplicationOrRef;
  /**
   * Balance transaction that describes the impact of this collected application fee on your account balance (not including refunds).
   */
  balanceTransaction?: BalanceTransactionOrRef;
  /**
   * ID of the charge that the application fee was taken from.
   */
  charge: ChargeOrRef;
  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;
  /**
   * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
   */
  currency: string;
  /**
   * Polymorphic source of the application fee. Includes the ID of the object the application fee was created from.
   */
  feeSource?: PlatformEarningFeeSource;
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: string;
  /**
   * ID of the corresponding charge on the platform account, if this fee was the result of a charge using the `destination` parameter.
   */
  originatingTransaction?: OriginatingTransactionOrRef;
  /**
   * Whether the fee has been fully refunded. If the fee is only partially refunded, this attribute will still be false.
   */
  refunded: boolean;
  /**
   * FeeRefundList
   *
   * A list of refunds that have been applied to the fee.
   */
  refunds: RefundsProperty;
}

export const ApplicationFeeSchema: TypedSchema<ApplicationFee> = typed<ApplicationFee>(object({
  account: AccountOrRefSchema,
  amount: number(),
  amountRefunded: number(),
  application: ApplicationOrRefSchema,
  get balanceTransaction() { return optional(BalanceTransactionOrRefSchema) },
  charge: ChargeOrRefSchema,
  created: number(),
  currency: string(),
  get feeSource() { return optional(PlatformEarningFeeSourceSchema) },
  id: string(),
  livemode: boolean(),
  object: string(),
  get originatingTransaction() { return optional(OriginatingTransactionOrRefSchema) },
  refunded: boolean(),
  refunds: RefundsPropertySchema,
}));