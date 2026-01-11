import { TypedSchema, array, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostAccountsAccountBankAccountsRequestMetadata } from './PostAccountsAccountBankAccountsRequestMetadata';
import { PostAccountsAccountBankAccountsRequestMetadataSchema } from './PostAccountsAccountBankAccountsRequestMetadata';
import type { PostCreditNotesRequestLinesItem } from './PostCreditNotesRequestLinesItem';
import { PostCreditNotesRequestLinesItemSchema } from './PostCreditNotesRequestLinesItem';
import type { PostCreditNotesRequestRefundsItem } from './PostCreditNotesRequestRefundsItem';
import { PostCreditNotesRequestRefundsItemSchema } from './PostCreditNotesRequestRefundsItem';
import type { PostCreditNotesRequestShippingCost } from './PostCreditNotesRequestShippingCost';
import { PostCreditNotesRequestShippingCostSchema } from './PostCreditNotesRequestShippingCost';
export interface PostCreditNotesRequest {
  /**
   * The integer amount in cents (or local equivalent) representing the total amount of the credit note. One of `amount`, `lines`, or `shipping_cost` must be provided.
   */
  amount?: number;
  /**
   * The integer amount in cents (or local equivalent) representing the amount to credit the customer's balance, which will be automatically applied to their next invoice.
   */
  creditAmount?: number;
  /**
   * The date when this credit note is in effect. Same as `created` unless overwritten. When defined, this value replaces the system-generated 'Date of issue' printed on the credit note PDF.
   */
  effectiveAt?: number;
  /**
   * Type of email to send to the customer, one of `credit_note` or `none` and the default is `credit_note`.
   */
  emailType?: string;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
  /**
   * ID of the invoice.
   */
  invoice: string;
  /**
   * Line items that make up the credit note. One of `amount`, `lines`, or `shipping_cost` must be provided.
   */
  lines?: Array<PostCreditNotesRequestLinesItem>;
  /**
   * The credit note's memo appears on the credit note PDF.
   */
  memo?: string;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: PostAccountsAccountBankAccountsRequestMetadata;
  /**
   * The integer amount in cents (or local equivalent) representing the amount that is credited outside of Stripe.
   */
  outOfBandAmount?: number;
  /**
   * Reason for issuing this credit note, one of `duplicate`, `fraudulent`, `order_change`, or `product_unsatisfactory`
   */
  reason?: string;
  /**
   * The integer amount in cents (or local equivalent) representing the amount to refund. If set, a refund will be created for the charge associated with the invoice.
   */
  refundAmount?: number;
  /**
   * Refunds to link to this credit note.
   */
  refunds?: Array<PostCreditNotesRequestRefundsItem>;
  /**
   * credit_note_shipping_cost
   *
   * When shipping_cost contains the shipping_rate from the invoice, the shipping_cost is included in the credit note. One of `amount`, `lines`, or `shipping_cost` must be provided.
   */
  shippingCost?: PostCreditNotesRequestShippingCost;
}

export const PostCreditNotesRequestSchema: TypedSchema<PostCreditNotesRequest> = typed<PostCreditNotesRequest>(object({
  amount: optional(number()),
  creditAmount: optional(number()),
  effectiveAt: optional(number()),
  emailType: optional(string()),
  expand: optional(array(string())),
  invoice: string(),
  get lines() { return optional(array(PostCreditNotesRequestLinesItemSchema)) },
  memo: optional(string()),
  get metadata() { return optional(PostAccountsAccountBankAccountsRequestMetadataSchema) },
  outOfBandAmount: optional(number()),
  reason: optional(string()),
  refundAmount: optional(number()),
  get refunds() { return optional(array(PostCreditNotesRequestRefundsItemSchema)) },
  get shippingCost() { return optional(PostCreditNotesRequestShippingCostSchema) },
}));