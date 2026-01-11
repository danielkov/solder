import { TypedSchema, array, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostInvoicesCreatePreviewRequestAutomaticTax } from './PostInvoicesCreatePreviewRequestAutomaticTax';
import { PostInvoicesCreatePreviewRequestAutomaticTaxSchema } from './PostInvoicesCreatePreviewRequestAutomaticTax';
import type { PostInvoicesCreatePreviewRequestCustomerDetails } from './PostInvoicesCreatePreviewRequestCustomerDetails';
import { PostInvoicesCreatePreviewRequestCustomerDetailsSchema } from './PostInvoicesCreatePreviewRequestCustomerDetails';
import type { PostInvoicesCreatePreviewRequestDiscounts } from './PostInvoicesCreatePreviewRequestDiscounts';
import { PostInvoicesCreatePreviewRequestDiscountsSchema } from './PostInvoicesCreatePreviewRequestDiscounts';
import type { PostInvoicesCreatePreviewRequestInvoiceItemsItem } from './PostInvoicesCreatePreviewRequestInvoiceItemsItem';
import { PostInvoicesCreatePreviewRequestInvoiceItemsItemSchema } from './PostInvoicesCreatePreviewRequestInvoiceItemsItem';
import type { PostInvoicesCreatePreviewRequestOnBehalfOf } from './PostInvoicesCreatePreviewRequestOnBehalfOf';
import { PostInvoicesCreatePreviewRequestOnBehalfOfSchema } from './PostInvoicesCreatePreviewRequestOnBehalfOf';
import type { PostInvoicesCreatePreviewRequestScheduleDetails } from './PostInvoicesCreatePreviewRequestScheduleDetails';
import { PostInvoicesCreatePreviewRequestScheduleDetailsSchema } from './PostInvoicesCreatePreviewRequestScheduleDetails';
import type { PostInvoicesCreatePreviewRequestSubscriptionDetails } from './PostInvoicesCreatePreviewRequestSubscriptionDetails';
import { PostInvoicesCreatePreviewRequestSubscriptionDetailsSchema } from './PostInvoicesCreatePreviewRequestSubscriptionDetails';
import type { PostInvoicesRequestIssuer } from './PostInvoicesRequestIssuer';
import { PostInvoicesRequestIssuerSchema } from './PostInvoicesRequestIssuer';
export interface PostInvoicesCreatePreviewRequest {
  /**
   * automatic_tax_param
   *
   * Settings for automatic tax lookup for this invoice preview.
   */
  automaticTax?: PostInvoicesCreatePreviewRequestAutomaticTax;
  /**
   * The currency to preview this invoice in. Defaults to that of `customer` if not specified.
   */
  currency?: string;
  /**
   * The identifier of the customer whose upcoming invoice you'd like to retrieve. If `automatic_tax` is enabled then one of `customer`, `customer_details`, `subscription`, or `schedule` must be set.
   */
  customer?: string;
  /**
   * customer_details_param
   *
   * Details about the customer you want to invoice or overrides for an existing customer. If `automatic_tax` is enabled then one of `customer`, `customer_details`, `subscription`, or `schedule` must be set.
   */
  customerDetails?: PostInvoicesCreatePreviewRequestCustomerDetails;
  /**
   * The coupons to redeem into discounts for the invoice preview. If not specified, inherits the discount from the subscription or customer. This works for both coupons directly applied to an invoice and coupons applied to a subscription. Pass an empty string to avoid inheriting any discounts.
   */
  discounts?: PostInvoicesCreatePreviewRequestDiscounts;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
  /**
   * List of invoice items to add or update in the upcoming invoice preview (up to 250).
   */
  invoiceItems?: Array<PostInvoicesCreatePreviewRequestInvoiceItemsItem>;
  /**
   * param
   *
   * The connected account that issues the invoice. The invoice is presented with the branding and support information of the specified account.
   */
  issuer?: PostInvoicesRequestIssuer;
  /**
   * The account (if any) for which the funds of the invoice payment are intended. If set, the invoice will be presented with the branding and support information of the specified account. See the [Invoices with Connect](https://stripe.com/docs/billing/invoices/connect) documentation for details.
   */
  onBehalfOf?: PostInvoicesCreatePreviewRequestOnBehalfOf;
  /**
   * Customizes the types of values to include when calculating the invoice. Defaults to `next` if unspecified.
   */
  previewMode?: string;
  /**
   * The identifier of the schedule whose upcoming invoice you'd like to retrieve. Cannot be used with subscription or subscription fields.
   */
  schedule?: string;
  /**
   * schedule_details_params
   *
   * The schedule creation or modification params to apply as a preview. Cannot be used with `subscription` or `subscription_` prefixed fields.
   */
  scheduleDetails?: PostInvoicesCreatePreviewRequestScheduleDetails;
  /**
   * The identifier of the subscription for which you'd like to retrieve the upcoming invoice. If not provided, but a `subscription_details.items` is provided, you will preview creating a subscription with those items. If neither `subscription` nor `subscription_details.items` is provided, you will retrieve the next upcoming invoice from among the customer's subscriptions.
   */
  subscription?: string;
  /**
   * subscription_details_params
   *
   * The subscription creation or modification params to apply as a preview. Cannot be used with `schedule` or `schedule_details` fields.
   */
  subscriptionDetails?: PostInvoicesCreatePreviewRequestSubscriptionDetails;
}

export const PostInvoicesCreatePreviewRequestSchema: TypedSchema<PostInvoicesCreatePreviewRequest> = typed<PostInvoicesCreatePreviewRequest>(object({
  get automaticTax() { return optional(PostInvoicesCreatePreviewRequestAutomaticTaxSchema) },
  currency: optional(string()),
  customer: optional(string()),
  get customerDetails() { return optional(PostInvoicesCreatePreviewRequestCustomerDetailsSchema) },
  get discounts() { return optional(PostInvoicesCreatePreviewRequestDiscountsSchema) },
  expand: optional(array(string())),
  get invoiceItems() { return optional(array(PostInvoicesCreatePreviewRequestInvoiceItemsItemSchema)) },
  get issuer() { return optional(PostInvoicesRequestIssuerSchema) },
  get onBehalfOf() { return optional(PostInvoicesCreatePreviewRequestOnBehalfOfSchema) },
  previewMode: optional(string()),
  schedule: optional(string()),
  get scheduleDetails() { return optional(PostInvoicesCreatePreviewRequestScheduleDetailsSchema) },
  subscription: optional(string()),
  get subscriptionDetails() { return optional(PostInvoicesCreatePreviewRequestSubscriptionDetailsSchema) },
}));