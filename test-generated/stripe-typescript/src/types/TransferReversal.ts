import { TypedSchema, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { BalanceTransactionOrRef } from './BalanceTransactionOrRef';
import { BalanceTransactionOrRefSchema } from './BalanceTransactionOrRef';
import type { DestinationPaymentRefundOrRef } from './DestinationPaymentRefundOrRef';
import { DestinationPaymentRefundOrRefSchema } from './DestinationPaymentRefundOrRef';
import type { MetadataProperty } from './MetadataProperty';
import { MetadataPropertySchema } from './MetadataProperty';
import type { SourceRefundOrRef } from './SourceRefundOrRef';
import { SourceRefundOrRefSchema } from './SourceRefundOrRef';
import type { TransferOrRef } from './TransferOrRef';
import { TransferOrRefSchema } from './TransferOrRef';
/**
 * TransferReversal
 *
 * [Stripe Connect](https://stripe.com/docs/connect) platforms can reverse transfers made to a
connected account, either entirely or partially, and can also specify whether
to refund any related application fees. Transfer reversals add to the
platform's balance and subtract from the destination account's balance.

Reversing a transfer that was made for a [destination
charge](/docs/connect/destination-charges) is allowed only up to the amount of
the charge. It is possible to reverse a
[transfer_group](https://stripe.com/docs/connect/separate-charges-and-transfers#transfer-options)
transfer only if the destination account has enough balance to cover the
reversal.

Related guide: [Reverse transfers](https://stripe.com/docs/connect/separate-charges-and-transfers#reverse-transfers)
 */
export interface TransferReversal {
  /**
   * Amount, in cents (or local equivalent).
   */
  amount: number;
  /**
   * Balance transaction that describes the impact on your account balance.
   */
  balanceTransaction?: BalanceTransactionOrRef;
  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;
  /**
   * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
   */
  currency: string;
  /**
   * Linked payment refund for the transfer reversal.
   */
  destinationPaymentRefund?: DestinationPaymentRefundOrRef;
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
   */
  metadata?: MetadataProperty;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: string;
  /**
   * ID of the refund responsible for the transfer reversal.
   */
  sourceRefund?: SourceRefundOrRef;
  /**
   * ID of the transfer that was reversed.
   */
  transfer: TransferOrRef;
}

export const TransferReversalSchema: TypedSchema<TransferReversal> = typed<TransferReversal>(object({
  amount: number(),
  get balanceTransaction() { return optional(BalanceTransactionOrRefSchema) },
  created: number(),
  currency: string(),
  get destinationPaymentRefund() { return optional(DestinationPaymentRefundOrRefSchema) },
  id: string(),
  get metadata() { return optional(MetadataPropertySchema) },
  object: string(),
  get sourceRefund() { return optional(SourceRefundOrRefSchema) },
  transfer: TransferOrRefSchema,
}));