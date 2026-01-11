import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { MetadataProperty } from './MetadataProperty';
import { MetadataPropertySchema } from './MetadataProperty';
/**
 * PaymentLinksResourcePaymentIntentData
 *
 * 
 */
export interface PaymentLinksResourcePaymentIntentData {
  /**
   * Indicates when the funds will be captured from the customer's account.
   */
  captureMethod?: string;
  /**
   * An arbitrary string attached to the object. Often useful for displaying to users.
   */
  description?: string;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that will set metadata on [Payment Intents](https://stripe.com/docs/api/payment_intents) generated from this payment link.
   */
  metadata: MetadataProperty;
  /**
   * Indicates that you intend to make future payments with the payment method collected during checkout.
   */
  setupFutureUsage?: string;
  /**
   * For a non-card payment, information about the charge that appears on the customer's statement when this payment succeeds in creating a charge.
   */
  statementDescriptor?: string;
  /**
   * For a card payment, information about the charge that appears on the customer's statement when this payment succeeds in creating a charge. Concatenated with the account's statement descriptor prefix to form the complete statement descriptor.
   */
  statementDescriptorSuffix?: string;
  /**
   * A string that identifies the resulting payment as part of a group. See the PaymentIntents [use case for connected accounts](https://stripe.com/docs/connect/separate-charges-and-transfers) for details.
   */
  transferGroup?: string;
}

export const PaymentLinksResourcePaymentIntentDataSchema: TypedSchema<PaymentLinksResourcePaymentIntentData> = typed<PaymentLinksResourcePaymentIntentData>(object({
  captureMethod: optional(string()),
  description: optional(string()),
  metadata: MetadataPropertySchema,
  setupFutureUsage: optional(string()),
  statementDescriptor: optional(string()),
  statementDescriptorSuffix: optional(string()),
  transferGroup: optional(string()),
}));