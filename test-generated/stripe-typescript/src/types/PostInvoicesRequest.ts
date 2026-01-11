import { TypedSchema, array, boolean, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { DefaultPostAccountsRequestMetadata } from './DefaultPostAccountsRequestMetadata';
import { DefaultPostAccountsRequestMetadataSchema } from './DefaultPostAccountsRequestMetadata';
import type { PostInvoicesRequestAccountTaxIds } from './PostInvoicesRequestAccountTaxIds';
import { PostInvoicesRequestAccountTaxIdsSchema } from './PostInvoicesRequestAccountTaxIds';
import type { PostInvoicesRequestAutomaticTax } from './PostInvoicesRequestAutomaticTax';
import { PostInvoicesRequestAutomaticTaxSchema } from './PostInvoicesRequestAutomaticTax';
import type { PostInvoicesRequestCustomFields } from './PostInvoicesRequestCustomFields';
import { PostInvoicesRequestCustomFieldsSchema } from './PostInvoicesRequestCustomFields';
import type { PostInvoicesRequestDiscounts } from './PostInvoicesRequestDiscounts';
import { PostInvoicesRequestDiscountsSchema } from './PostInvoicesRequestDiscounts';
import type { PostInvoicesRequestFromInvoice } from './PostInvoicesRequestFromInvoice';
import { PostInvoicesRequestFromInvoiceSchema } from './PostInvoicesRequestFromInvoice';
import type { PostInvoicesRequestIssuer } from './PostInvoicesRequestIssuer';
import { PostInvoicesRequestIssuerSchema } from './PostInvoicesRequestIssuer';
import type { PostInvoicesRequestPaymentSettings } from './PostInvoicesRequestPaymentSettings';
import { PostInvoicesRequestPaymentSettingsSchema } from './PostInvoicesRequestPaymentSettings';
import type { PostInvoicesRequestRendering } from './PostInvoicesRequestRendering';
import { PostInvoicesRequestRenderingSchema } from './PostInvoicesRequestRendering';
import type { PostInvoicesRequestShippingCost } from './PostInvoicesRequestShippingCost';
import { PostInvoicesRequestShippingCostSchema } from './PostInvoicesRequestShippingCost';
import type { PostInvoicesRequestShippingDetails } from './PostInvoicesRequestShippingDetails';
import { PostInvoicesRequestShippingDetailsSchema } from './PostInvoicesRequestShippingDetails';
import type { PostInvoicesRequestTransferData } from './PostInvoicesRequestTransferData';
import { PostInvoicesRequestTransferDataSchema } from './PostInvoicesRequestTransferData';
export interface PostInvoicesRequest {
  /**
   * The account tax IDs associated with the invoice. Only editable when the invoice is a draft.
   */
  accountTaxIds?: PostInvoicesRequestAccountTaxIds;
  /**
   * A fee in cents (or local equivalent) that will be applied to the invoice and transferred to the application owner's Stripe account. The request must be made with an OAuth key or the Stripe-Account header in order to take an application fee. For more information, see the application fees [documentation](https://stripe.com/docs/billing/invoices/connect#collecting-fees).
   */
  applicationFeeAmount?: number;
  /**
   * Controls whether Stripe performs [automatic collection](https://stripe.com/docs/invoicing/integration/automatic-advancement-collection) of the invoice. If `false`, the invoice's state doesn't automatically advance without an explicit action. Defaults to false.
   */
  autoAdvance?: boolean;
  /**
   * automatic_tax_param
   *
   * Settings for automatic tax lookup for this invoice.
   */
  automaticTax?: PostInvoicesRequestAutomaticTax;
  /**
   * The time when this invoice should be scheduled to finalize (up to 5 years in the future). The invoice is finalized at this time if it's still in draft state.
   */
  automaticallyFinalizesAt?: number;
  /**
   * Either `charge_automatically`, or `send_invoice`. When charging automatically, Stripe will attempt to pay this invoice using the default source attached to the customer. When sending an invoice, Stripe will email this invoice to the customer with payment instructions. Defaults to `charge_automatically`.
   */
  collectionMethod?: string;
  /**
   * The currency to create this invoice in. Defaults to that of `customer` if not specified.
   */
  currency?: string;
  /**
   * A list of up to 4 custom fields to be displayed on the invoice.
   */
  customFields?: PostInvoicesRequestCustomFields;
  /**
   * The ID of the customer who will be billed.
   */
  customer?: string;
  /**
   * The number of days from when the invoice is created until it is due. Valid only for invoices where `collection_method=send_invoice`.
   */
  daysUntilDue?: number;
  /**
   * ID of the default payment method for the invoice. It must belong to the customer associated with the invoice. If not set, defaults to the subscription's default payment method, if any, or to the default payment method in the customer's invoice settings.
   */
  defaultPaymentMethod?: string;
  /**
   * ID of the default payment source for the invoice. It must belong to the customer associated with the invoice and be in a chargeable state. If not set, defaults to the subscription's default source, if any, or to the customer's default source.
   */
  defaultSource?: string;
  /**
   * The tax rates that will apply to any line item that does not have `tax_rates` set.
   */
  defaultTaxRates?: Array<string>;
  /**
   * An arbitrary string attached to the object. Often useful for displaying to users. Referenced as 'memo' in the Dashboard.
   */
  description?: string;
  /**
   * The coupons and promotion codes to redeem into discounts for the invoice. If not specified, inherits the discount from the invoice's customer. Pass an empty string to avoid inheriting any discounts.
   */
  discounts?: PostInvoicesRequestDiscounts;
  /**
   * The date on which payment for this invoice is due. Valid only for invoices where `collection_method=send_invoice`.
   */
  dueDate?: number;
  /**
   * The date when this invoice is in effect. Same as `finalized_at` unless overwritten. When defined, this value replaces the system-generated 'Date of issue' printed on the invoice PDF and receipt.
   */
  effectiveAt?: number;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
  /**
   * Footer to be displayed on the invoice.
   */
  footer?: string;
  /**
   * from_invoice
   *
   * Revise an existing invoice. The new invoice will be created in `status=draft`. See the [revision documentation](https://stripe.com/docs/invoicing/invoice-revisions) for more details.
   */
  fromInvoice?: PostInvoicesRequestFromInvoice;
  /**
   * param
   *
   * The connected account that issues the invoice. The invoice is presented with the branding and support information of the specified account.
   */
  issuer?: PostInvoicesRequestIssuer;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: DefaultPostAccountsRequestMetadata;
  /**
   * Set the number for this invoice. If no number is present then a number will be assigned automatically when the invoice is finalized. In many markets, regulations require invoices to be unique, sequential and / or gapless. You are responsible for ensuring this is true across all your different invoicing systems in the event that you edit the invoice number using our API. If you use only Stripe for your invoices and do not change invoice numbers, Stripe handles this aspect of compliance for you automatically.
   */
  number?: string;
  /**
   * The account (if any) for which the funds of the invoice payment are intended. If set, the invoice will be presented with the branding and support information of the specified account. See the [Invoices with Connect](https://stripe.com/docs/billing/invoices/connect) documentation for details.
   */
  onBehalfOf?: string;
  /**
   * payment_settings
   *
   * Configuration settings for the PaymentIntent that is generated when the invoice is finalized.
   */
  paymentSettings?: PostInvoicesRequestPaymentSettings;
  /**
   * How to handle pending invoice items on invoice creation. Defaults to `exclude` if the parameter is omitted.
   */
  pendingInvoiceItemsBehavior?: string;
  /**
   * rendering_param
   *
   * The rendering-related settings that control how the invoice is displayed on customer-facing surfaces such as PDF and Hosted Invoice Page.
   */
  rendering?: PostInvoicesRequestRendering;
  /**
   * shipping_cost
   *
   * Settings for the cost of shipping for this invoice.
   */
  shippingCost?: PostInvoicesRequestShippingCost;
  /**
   * recipient_shipping_with_optional_fields_address
   *
   * Shipping details for the invoice. The Invoice PDF will use the `shipping_details` value if it is set, otherwise the PDF will render the shipping address from the customer.
   */
  shippingDetails?: PostInvoicesRequestShippingDetails;
  /**
   * Extra information about a charge for the customer's credit card statement. It must contain at least one letter. If not specified and this invoice is part of a subscription, the default `statement_descriptor` will be set to the first subscription item's product's `statement_descriptor`.
   */
  statementDescriptor?: string;
  /**
   * The ID of the subscription to invoice, if any. If set, the created invoice will only include pending invoice items for that subscription. The subscription's billing cycle and regular subscription events won't be affected.
   */
  subscription?: string;
  /**
   * transfer_data_specs
   *
   * If specified, the funds from the invoice will be transferred to the destination and the ID of the resulting transfer will be found on the invoice's charge.
   */
  transferData?: PostInvoicesRequestTransferData;
}

export const PostInvoicesRequestSchema: TypedSchema<PostInvoicesRequest> = typed<PostInvoicesRequest>(object({
  get accountTaxIds() { return optional(PostInvoicesRequestAccountTaxIdsSchema) },
  applicationFeeAmount: optional(number()),
  autoAdvance: optional(boolean()),
  get automaticTax() { return optional(PostInvoicesRequestAutomaticTaxSchema) },
  automaticallyFinalizesAt: optional(number()),
  collectionMethod: optional(string()),
  currency: optional(string()),
  get customFields() { return optional(PostInvoicesRequestCustomFieldsSchema) },
  customer: optional(string()),
  daysUntilDue: optional(number()),
  defaultPaymentMethod: optional(string()),
  defaultSource: optional(string()),
  defaultTaxRates: optional(array(string())),
  description: optional(string()),
  get discounts() { return optional(PostInvoicesRequestDiscountsSchema) },
  dueDate: optional(number()),
  effectiveAt: optional(number()),
  expand: optional(array(string())),
  footer: optional(string()),
  get fromInvoice() { return optional(PostInvoicesRequestFromInvoiceSchema) },
  get issuer() { return optional(PostInvoicesRequestIssuerSchema) },
  get metadata() { return optional(DefaultPostAccountsRequestMetadataSchema) },
  number: optional(string()),
  onBehalfOf: optional(string()),
  get paymentSettings() { return optional(PostInvoicesRequestPaymentSettingsSchema) },
  pendingInvoiceItemsBehavior: optional(string()),
  get rendering() { return optional(PostInvoicesRequestRenderingSchema) },
  get shippingCost() { return optional(PostInvoicesRequestShippingCostSchema) },
  get shippingDetails() { return optional(PostInvoicesRequestShippingDetailsSchema) },
  statementDescriptor: optional(string()),
  subscription: optional(string()),
  get transferData() { return optional(PostInvoicesRequestTransferDataSchema) },
}));