import { TypedSchema, array, boolean, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { DefaultPostAccountsRequestMetadata } from './DefaultPostAccountsRequestMetadata';
import { DefaultPostAccountsRequestMetadataSchema } from './DefaultPostAccountsRequestMetadata';
import type { PostInvoicesCreatePreviewRequestOnBehalfOf } from './PostInvoicesCreatePreviewRequestOnBehalfOf';
import { PostInvoicesCreatePreviewRequestOnBehalfOfSchema } from './PostInvoicesCreatePreviewRequestOnBehalfOf';
import type { PostInvoicesInvoiceRequestCustomFields } from './PostInvoicesInvoiceRequestCustomFields';
import { PostInvoicesInvoiceRequestCustomFieldsSchema } from './PostInvoicesInvoiceRequestCustomFields';
import type { PostInvoicesInvoiceRequestDefaultSource } from './PostInvoicesInvoiceRequestDefaultSource';
import { PostInvoicesInvoiceRequestDefaultSourceSchema } from './PostInvoicesInvoiceRequestDefaultSource';
import type { PostInvoicesInvoiceRequestDefaultTaxRates } from './PostInvoicesInvoiceRequestDefaultTaxRates';
import { PostInvoicesInvoiceRequestDefaultTaxRatesSchema } from './PostInvoicesInvoiceRequestDefaultTaxRates';
import type { PostInvoicesInvoiceRequestDiscounts } from './PostInvoicesInvoiceRequestDiscounts';
import { PostInvoicesInvoiceRequestDiscountsSchema } from './PostInvoicesInvoiceRequestDiscounts';
import type { PostInvoicesInvoiceRequestEffectiveAt } from './PostInvoicesInvoiceRequestEffectiveAt';
import { PostInvoicesInvoiceRequestEffectiveAtSchema } from './PostInvoicesInvoiceRequestEffectiveAt';
import type { PostInvoicesInvoiceRequestNumber } from './PostInvoicesInvoiceRequestNumber';
import { PostInvoicesInvoiceRequestNumberSchema } from './PostInvoicesInvoiceRequestNumber';
import type { PostInvoicesInvoiceRequestShippingCost } from './PostInvoicesInvoiceRequestShippingCost';
import { PostInvoicesInvoiceRequestShippingCostSchema } from './PostInvoicesInvoiceRequestShippingCost';
import type { PostInvoicesInvoiceRequestShippingDetails } from './PostInvoicesInvoiceRequestShippingDetails';
import { PostInvoicesInvoiceRequestShippingDetailsSchema } from './PostInvoicesInvoiceRequestShippingDetails';
import type { PostInvoicesInvoiceRequestTransferData } from './PostInvoicesInvoiceRequestTransferData';
import { PostInvoicesInvoiceRequestTransferDataSchema } from './PostInvoicesInvoiceRequestTransferData';
import type { PostInvoicesRequestAccountTaxIds } from './PostInvoicesRequestAccountTaxIds';
import { PostInvoicesRequestAccountTaxIdsSchema } from './PostInvoicesRequestAccountTaxIds';
import type { PostInvoicesRequestAutomaticTax } from './PostInvoicesRequestAutomaticTax';
import { PostInvoicesRequestAutomaticTaxSchema } from './PostInvoicesRequestAutomaticTax';
import type { PostInvoicesRequestIssuer } from './PostInvoicesRequestIssuer';
import { PostInvoicesRequestIssuerSchema } from './PostInvoicesRequestIssuer';
import type { PostInvoicesRequestPaymentSettings } from './PostInvoicesRequestPaymentSettings';
import { PostInvoicesRequestPaymentSettingsSchema } from './PostInvoicesRequestPaymentSettings';
import type { PostInvoicesRequestRendering } from './PostInvoicesRequestRendering';
import { PostInvoicesRequestRenderingSchema } from './PostInvoicesRequestRendering';
export interface PostInvoicesInvoiceRequest {
  /**
   * The account tax IDs associated with the invoice. Only editable when the invoice is a draft.
   */
  accountTaxIds?: PostInvoicesRequestAccountTaxIds;
  /**
   * A fee in cents (or local equivalent) that will be applied to the invoice and transferred to the application owner's Stripe account. The request must be made with an OAuth key or the Stripe-Account header in order to take an application fee. For more information, see the application fees [documentation](https://stripe.com/docs/billing/invoices/connect#collecting-fees).
   */
  applicationFeeAmount?: number;
  /**
   * Controls whether Stripe performs [automatic collection](https://stripe.com/docs/invoicing/integration/automatic-advancement-collection) of the invoice.
   */
  autoAdvance?: boolean;
  /**
   * automatic_tax_param
   *
   * Settings for automatic tax lookup for this invoice.
   */
  automaticTax?: PostInvoicesRequestAutomaticTax;
  /**
   * The time when this invoice should be scheduled to finalize (up to 5 years in the future). The invoice is finalized at this time if it's still in draft state. To turn off automatic finalization, set `auto_advance` to false.
   */
  automaticallyFinalizesAt?: number;
  /**
   * Either `charge_automatically` or `send_invoice`. This field can be updated only on `draft` invoices.
   */
  collectionMethod?: string;
  /**
   * A list of up to 4 custom fields to be displayed on the invoice. If a value for `custom_fields` is specified, the list specified will replace the existing custom field list on this invoice. Pass an empty string to remove previously-defined fields.
   */
  customFields?: PostInvoicesInvoiceRequestCustomFields;
  /**
   * The number of days from which the invoice is created until it is due. Only valid for invoices where `collection_method=send_invoice`. This field can only be updated on `draft` invoices.
   */
  daysUntilDue?: number;
  /**
   * ID of the default payment method for the invoice. It must belong to the customer associated with the invoice. If not set, defaults to the subscription's default payment method, if any, or to the default payment method in the customer's invoice settings.
   */
  defaultPaymentMethod?: string;
  /**
   * ID of the default payment source for the invoice. It must belong to the customer associated with the invoice and be in a chargeable state. If not set, defaults to the subscription's default source, if any, or to the customer's default source.
   */
  defaultSource?: PostInvoicesInvoiceRequestDefaultSource;
  /**
   * The tax rates that will apply to any line item that does not have `tax_rates` set. Pass an empty string to remove previously-defined tax rates.
   */
  defaultTaxRates?: PostInvoicesInvoiceRequestDefaultTaxRates;
  /**
   * An arbitrary string attached to the object. Often useful for displaying to users. Referenced as 'memo' in the Dashboard.
   */
  description?: string;
  /**
   * The discounts that will apply to the invoice. Pass an empty string to remove previously-defined discounts.
   */
  discounts?: PostInvoicesInvoiceRequestDiscounts;
  /**
   * The date on which payment for this invoice is due. Only valid for invoices where `collection_method=send_invoice`. This field can only be updated on `draft` invoices.
   */
  dueDate?: number;
  /**
   * The date when this invoice is in effect. Same as `finalized_at` unless overwritten. When defined, this value replaces the system-generated 'Date of issue' printed on the invoice PDF and receipt.
   */
  effectiveAt?: PostInvoicesInvoiceRequestEffectiveAt;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
  /**
   * Footer to be displayed on the invoice.
   */
  footer?: string;
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
  number?: PostInvoicesInvoiceRequestNumber;
  /**
   * The account (if any) for which the funds of the invoice payment are intended. If set, the invoice will be presented with the branding and support information of the specified account. See the [Invoices with Connect](https://stripe.com/docs/billing/invoices/connect) documentation for details.
   */
  onBehalfOf?: PostInvoicesCreatePreviewRequestOnBehalfOf;
  /**
   * payment_settings
   *
   * Configuration settings for the PaymentIntent that is generated when the invoice is finalized.
   */
  paymentSettings?: PostInvoicesRequestPaymentSettings;
  /**
   * rendering_param
   *
   * The rendering-related settings that control how the invoice is displayed on customer-facing surfaces such as PDF and Hosted Invoice Page.
   */
  rendering?: PostInvoicesRequestRendering;
  /**
   * Settings for the cost of shipping for this invoice.
   */
  shippingCost?: PostInvoicesInvoiceRequestShippingCost;
  /**
   * Shipping details for the invoice. The Invoice PDF will use the `shipping_details` value if it is set, otherwise the PDF will render the shipping address from the customer.
   */
  shippingDetails?: PostInvoicesInvoiceRequestShippingDetails;
  /**
   * Extra information about a charge for the customer's credit card statement. It must contain at least one letter. If not specified and this invoice is part of a subscription, the default `statement_descriptor` will be set to the first subscription item's product's `statement_descriptor`.
   */
  statementDescriptor?: string;
  /**
   * If specified, the funds from the invoice will be transferred to the destination and the ID of the resulting transfer will be found on the invoice's charge. This will be unset if you POST an empty value.
   */
  transferData?: PostInvoicesInvoiceRequestTransferData;
}

export const PostInvoicesInvoiceRequestSchema: TypedSchema<PostInvoicesInvoiceRequest> = typed<PostInvoicesInvoiceRequest>(object({
  get accountTaxIds() { return optional(PostInvoicesRequestAccountTaxIdsSchema) },
  applicationFeeAmount: optional(number()),
  autoAdvance: optional(boolean()),
  get automaticTax() { return optional(PostInvoicesRequestAutomaticTaxSchema) },
  automaticallyFinalizesAt: optional(number()),
  collectionMethod: optional(string()),
  get customFields() { return optional(PostInvoicesInvoiceRequestCustomFieldsSchema) },
  daysUntilDue: optional(number()),
  defaultPaymentMethod: optional(string()),
  get defaultSource() { return optional(PostInvoicesInvoiceRequestDefaultSourceSchema) },
  get defaultTaxRates() { return optional(PostInvoicesInvoiceRequestDefaultTaxRatesSchema) },
  description: optional(string()),
  get discounts() { return optional(PostInvoicesInvoiceRequestDiscountsSchema) },
  dueDate: optional(number()),
  get effectiveAt() { return optional(PostInvoicesInvoiceRequestEffectiveAtSchema) },
  expand: optional(array(string())),
  footer: optional(string()),
  get issuer() { return optional(PostInvoicesRequestIssuerSchema) },
  get metadata() { return optional(DefaultPostAccountsRequestMetadataSchema) },
  get number() { return optional(PostInvoicesInvoiceRequestNumberSchema) },
  get onBehalfOf() { return optional(PostInvoicesCreatePreviewRequestOnBehalfOfSchema) },
  get paymentSettings() { return optional(PostInvoicesRequestPaymentSettingsSchema) },
  get rendering() { return optional(PostInvoicesRequestRenderingSchema) },
  get shippingCost() { return optional(PostInvoicesInvoiceRequestShippingCostSchema) },
  get shippingDetails() { return optional(PostInvoicesInvoiceRequestShippingDetailsSchema) },
  statementDescriptor: optional(string()),
  get transferData() { return optional(PostInvoicesInvoiceRequestTransferDataSchema) },
}));