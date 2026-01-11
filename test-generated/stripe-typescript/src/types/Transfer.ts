import { TypedSchema, boolean, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { BalanceTransactionOrRef } from './BalanceTransactionOrRef';
import { BalanceTransactionOrRefSchema } from './BalanceTransactionOrRef';
import type { DestinationOrRef } from './DestinationOrRef';
import { DestinationOrRefSchema } from './DestinationOrRef';
import type { DestinationPaymentOrRef } from './DestinationPaymentOrRef';
import { DestinationPaymentOrRefSchema } from './DestinationPaymentOrRef';
import type { MetadataProperty } from './MetadataProperty';
import { MetadataPropertySchema } from './MetadataProperty';
import type { ReversalsProperty } from './ReversalsProperty';
import { ReversalsPropertySchema } from './ReversalsProperty';
import type { SourceTransactionOrRef } from './SourceTransactionOrRef';
import { SourceTransactionOrRefSchema } from './SourceTransactionOrRef';
/**
 * Transfer
 *
 * A `Transfer` object is created when you move funds between Stripe accounts as
part of Connect.

Before April 6, 2017, transfers also represented movement of funds from a
Stripe account to a card or bank account. This behavior has since been split
out into a [Payout](https://stripe.com/docs/api#payout_object) object, with corresponding payout endpoints. For more
information, read about the
[transfer/payout split](https://stripe.com/docs/transfer-payout-split).

Related guide: [Creating separate charges and transfers](https://stripe.com/docs/connect/separate-charges-and-transfers)
 */
export interface Transfer {
  /**
   * Amount in cents (or local equivalent) to be transferred.
   */
  amount: number;
  /**
   * Amount in cents (or local equivalent) reversed (can be less than the amount attribute on the transfer if a partial reversal was issued).
   */
  amountReversed: number;
  /**
   * Balance transaction that describes the impact of this transfer on your account balance.
   */
  balanceTransaction?: BalanceTransactionOrRef;
  /**
   * Time that this record of the transfer was first created.
   */
  created: number;
  /**
   * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
   */
  currency: string;
  /**
   * An arbitrary string attached to the object. Often useful for displaying to users.
   */
  description?: string;
  /**
   * ID of the Stripe account the transfer was sent to.
   */
  destination?: DestinationOrRef;
  /**
   * If the destination is a Stripe account, this will be the ID of the payment that the destination account received for the transfer.
   */
  destinationPayment?: DestinationPaymentOrRef;
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
   */
  metadata: MetadataProperty;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: string;
  /**
   * TransferReversalList
   *
   * A list of reversals that have been applied to the transfer.
   */
  reversals: ReversalsProperty;
  /**
   * Whether the transfer has been fully reversed. If the transfer is only partially reversed, this attribute will still be false.
   */
  reversed: boolean;
  /**
   * ID of the charge that was used to fund the transfer. If null, the transfer was funded from the available balance.
   */
  sourceTransaction?: SourceTransactionOrRef;
  /**
   * The source balance this transfer came from. One of `card`, `fpx`, or `bank_account`.
   */
  sourceType?: string;
  /**
   * A string that identifies this transaction as part of a group. See the [Connect documentation](https://stripe.com/docs/connect/separate-charges-and-transfers#transfer-options) for details.
   */
  transferGroup?: string;
}

export const TransferSchema: TypedSchema<Transfer> = typed<Transfer>(object({
  amount: number(),
  amountReversed: number(),
  get balanceTransaction() { return optional(BalanceTransactionOrRefSchema) },
  created: number(),
  currency: string(),
  description: optional(string()),
  get destination() { return optional(DestinationOrRefSchema) },
  get destinationPayment() { return optional(DestinationPaymentOrRefSchema) },
  id: string(),
  livemode: boolean(),
  metadata: MetadataPropertySchema,
  object: string(),
  reversals: ReversalsPropertySchema,
  reversed: boolean(),
  get sourceTransaction() { return optional(SourceTransactionOrRefSchema) },
  sourceType: optional(string()),
  transferGroup: optional(string()),
}));