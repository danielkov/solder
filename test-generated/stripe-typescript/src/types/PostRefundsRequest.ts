import { TypedSchema, array, boolean, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { DefaultPostAccountsRequestMetadata } from './DefaultPostAccountsRequestMetadata';
import { DefaultPostAccountsRequestMetadataSchema } from './DefaultPostAccountsRequestMetadata';
export interface PostRefundsRequest {
  amount?: number;
  /**
   * The identifier of the charge to refund.
   */
  charge?: string;
  /**
   * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
   */
  currency?: string;
  /**
   * Customer whose customer balance to refund from.
   */
  customer?: string;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
  /**
   * For payment methods without native refund support (e.g., Konbini, PromptPay), use this email from the customer to receive refund instructions.
   */
  instructionsEmail?: string;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: DefaultPostAccountsRequestMetadata;
  /**
   * Origin of the refund
   */
  origin?: string;
  /**
   * The identifier of the PaymentIntent to refund.
   */
  paymentIntent?: string;
  /**
   * String indicating the reason for the refund. If set, possible values are `duplicate`, `fraudulent`, and `requested_by_customer`. If you believe the charge to be fraudulent, specifying `fraudulent` as the reason will add the associated card and email to your [block lists](https://stripe.com/docs/radar/lists), and will also help us improve our fraud detection algorithms.
   */
  reason?: string;
  /**
   * Boolean indicating whether the application fee should be refunded when refunding this charge. If a full charge refund is given, the full application fee will be refunded. Otherwise, the application fee will be refunded in an amount proportional to the amount of the charge refunded. An application fee can be refunded only by the application that created the charge.
   */
  refundApplicationFee?: boolean;
  /**
   * Boolean indicating whether the transfer should be reversed when refunding this charge. The transfer will be reversed proportionally to the amount being refunded (either the entire or partial amount).<br><br>A transfer can be reversed only by the application that created the charge.
   */
  reverseTransfer?: boolean;
}

export const PostRefundsRequestSchema: TypedSchema<PostRefundsRequest> = typed<PostRefundsRequest>(object({
  amount: optional(number()),
  charge: optional(string()),
  currency: optional(string()),
  customer: optional(string()),
  expand: optional(array(string())),
  instructionsEmail: optional(string()),
  get metadata() { return optional(DefaultPostAccountsRequestMetadataSchema) },
  origin: optional(string()),
  paymentIntent: optional(string()),
  reason: optional(string()),
  refundApplicationFee: optional(boolean()),
  reverseTransfer: optional(boolean()),
}));