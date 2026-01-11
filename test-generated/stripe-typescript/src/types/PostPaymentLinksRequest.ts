import { TypedSchema, array, boolean, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostCheckoutSessionsRequestCustomFieldsItem } from './PostCheckoutSessionsRequestCustomFieldsItem';
import { PostCheckoutSessionsRequestCustomFieldsItemSchema } from './PostCheckoutSessionsRequestCustomFieldsItem';
import type { PostCheckoutSessionsRequestCustomText } from './PostCheckoutSessionsRequestCustomText';
import { PostCheckoutSessionsRequestCustomTextSchema } from './PostCheckoutSessionsRequestCustomText';
import type { PostCheckoutSessionsRequestOptionalItemsItem } from './PostCheckoutSessionsRequestOptionalItemsItem';
import { PostCheckoutSessionsRequestOptionalItemsItemSchema } from './PostCheckoutSessionsRequestOptionalItemsItem';
import type { PostCheckoutSessionsRequestTaxIdCollection } from './PostCheckoutSessionsRequestTaxIdCollection';
import { PostCheckoutSessionsRequestTaxIdCollectionSchema } from './PostCheckoutSessionsRequestTaxIdCollection';
import type { PostPaymentLinksRequestAfterCompletion } from './PostPaymentLinksRequestAfterCompletion';
import { PostPaymentLinksRequestAfterCompletionSchema } from './PostPaymentLinksRequestAfterCompletion';
import type { PostPaymentLinksRequestAutomaticTax } from './PostPaymentLinksRequestAutomaticTax';
import { PostPaymentLinksRequestAutomaticTaxSchema } from './PostPaymentLinksRequestAutomaticTax';
import type { PostPaymentLinksRequestConsentCollection } from './PostPaymentLinksRequestConsentCollection';
import { PostPaymentLinksRequestConsentCollectionSchema } from './PostPaymentLinksRequestConsentCollection';
import type { PostPaymentLinksRequestInvoiceCreation } from './PostPaymentLinksRequestInvoiceCreation';
import { PostPaymentLinksRequestInvoiceCreationSchema } from './PostPaymentLinksRequestInvoiceCreation';
import type { PostPaymentLinksRequestLineItemsItem } from './PostPaymentLinksRequestLineItemsItem';
import { PostPaymentLinksRequestLineItemsItemSchema } from './PostPaymentLinksRequestLineItemsItem';
import type { PostPaymentLinksRequestMetadata } from './PostPaymentLinksRequestMetadata';
import { PostPaymentLinksRequestMetadataSchema } from './PostPaymentLinksRequestMetadata';
import type { PostPaymentLinksRequestNameCollection } from './PostPaymentLinksRequestNameCollection';
import { PostPaymentLinksRequestNameCollectionSchema } from './PostPaymentLinksRequestNameCollection';
import type { PostPaymentLinksRequestPaymentIntentData } from './PostPaymentLinksRequestPaymentIntentData';
import { PostPaymentLinksRequestPaymentIntentDataSchema } from './PostPaymentLinksRequestPaymentIntentData';
import type { PostPaymentLinksRequestPhoneNumberCollection } from './PostPaymentLinksRequestPhoneNumberCollection';
import { PostPaymentLinksRequestPhoneNumberCollectionSchema } from './PostPaymentLinksRequestPhoneNumberCollection';
import type { PostPaymentLinksRequestRestrictions } from './PostPaymentLinksRequestRestrictions';
import { PostPaymentLinksRequestRestrictionsSchema } from './PostPaymentLinksRequestRestrictions';
import type { PostPaymentLinksRequestShippingAddressCollection } from './PostPaymentLinksRequestShippingAddressCollection';
import { PostPaymentLinksRequestShippingAddressCollectionSchema } from './PostPaymentLinksRequestShippingAddressCollection';
import type { PostPaymentLinksRequestShippingOptionsItem } from './PostPaymentLinksRequestShippingOptionsItem';
import { PostPaymentLinksRequestShippingOptionsItemSchema } from './PostPaymentLinksRequestShippingOptionsItem';
import type { PostPaymentLinksRequestSubscriptionData } from './PostPaymentLinksRequestSubscriptionData';
import { PostPaymentLinksRequestSubscriptionDataSchema } from './PostPaymentLinksRequestSubscriptionData';
import type { PostPaymentLinksRequestTransferData } from './PostPaymentLinksRequestTransferData';
import { PostPaymentLinksRequestTransferDataSchema } from './PostPaymentLinksRequestTransferData';
export interface PostPaymentLinksRequest {
  /**
   * after_completion_params
   *
   * Behavior after the purchase is complete.
   */
  afterCompletion?: PostPaymentLinksRequestAfterCompletion;
  /**
   * Enables user redeemable promotion codes.
   */
  allowPromotionCodes?: boolean;
  /**
   * The amount of the application fee (if any) that will be requested to be applied to the payment and transferred to the application owner's Stripe account. Can only be applied when there are no line items with recurring prices.
   */
  applicationFeeAmount?: number;
  /**
   * A non-negative decimal between 0 and 100, with at most two decimal places. This represents the percentage of the subscription invoice total that will be transferred to the application owner's Stripe account. There must be at least 1 line item with a recurring price to use this field.
   */
  applicationFeePercent?: number;
  /**
   * automatic_tax_params
   *
   * Configuration for automatic tax collection.
   */
  automaticTax?: PostPaymentLinksRequestAutomaticTax;
  /**
   * Configuration for collecting the customer's billing address. Defaults to `auto`.
   */
  billingAddressCollection?: string;
  /**
   * consent_collection_params
   *
   * Configure fields to gather active consent from customers.
   */
  consentCollection?: PostPaymentLinksRequestConsentCollection;
  /**
   * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies) and supported by each line item's price.
   */
  currency?: string;
  /**
   * Collect additional information from your customer using custom fields. Up to 3 fields are supported.
   */
  customFields?: Array<PostCheckoutSessionsRequestCustomFieldsItem>;
  /**
   * custom_text_param
   *
   * Display additional text for your customers using custom text.
   */
  customText?: PostCheckoutSessionsRequestCustomText;
  /**
   * Configures whether [checkout sessions](https://stripe.com/docs/api/checkout/sessions) created by this payment link create a [Customer](https://stripe.com/docs/api/customers).
   */
  customerCreation?: string;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
  /**
   * The custom message to be displayed to a customer when a payment link is no longer active.
   */
  inactiveMessage?: string;
  /**
   * invoice_creation_create_params
   *
   * Generate a post-purchase Invoice for one-time payments.
   */
  invoiceCreation?: PostPaymentLinksRequestInvoiceCreation;
  /**
   * The line items representing what is being sold. Each line item represents an item being sold. Up to 20 line items are supported.
   */
  lineItems: Array<PostPaymentLinksRequestLineItemsItem>;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`. Metadata associated with this Payment Link will automatically be copied to [checkout sessions](https://stripe.com/docs/api/checkout/sessions) created by this payment link.
   */
  metadata?: PostPaymentLinksRequestMetadata;
  /**
   * name_collection_params
   *
   * Controls settings applied for collecting the customer's name.
   */
  nameCollection?: PostPaymentLinksRequestNameCollection;
  /**
   * The account on behalf of which to charge.
   */
  onBehalfOf?: string;
  /**
   * A list of optional items the customer can add to their order at checkout. Use this parameter to pass one-time or recurring [Prices](https://stripe.com/docs/api/prices).
There is a maximum of 10 optional items allowed on a payment link, and the existing limits on the number of line items allowed on a payment link apply to the combined number of line items and optional items.
There is a maximum of 20 combined line items and optional items.
   */
  optionalItems?: Array<PostCheckoutSessionsRequestOptionalItemsItem>;
  /**
   * payment_intent_data_params
   *
   * A subset of parameters to be passed to PaymentIntent creation for Checkout Sessions in `payment` mode.
   */
  paymentIntentData?: PostPaymentLinksRequestPaymentIntentData;
  /**
   * Specify whether Checkout should collect a payment method. When set to `if_required`, Checkout will not collect a payment method when the total due for the session is 0.This may occur if the Checkout Session includes a free trial or a discount.

Can only be set in `subscription` mode. Defaults to `always`.

If you'd like information on how to collect a payment method outside of Checkout, read the guide on [configuring subscriptions with a free trial](https://stripe.com/docs/payments/checkout/free-trials).
   */
  paymentMethodCollection?: string;
  /**
   * The list of payment method types that customers can use. If no value is passed, Stripe will dynamically show relevant payment methods from your [payment method settings](https://dashboard.stripe.com/settings/payment_methods) (20+ payment methods [supported](https://stripe.com/docs/payments/payment-methods/integration-options#payment-method-product-support)).
   */
  paymentMethodTypes?: Array<string>;
  /**
   * phone_number_collection_params
   *
   * Controls phone number collection settings during checkout.

We recommend that you review your privacy policy and check with your legal contacts.
   */
  phoneNumberCollection?: PostPaymentLinksRequestPhoneNumberCollection;
  /**
   * restrictions_params
   *
   * Settings that restrict the usage of a payment link.
   */
  restrictions?: PostPaymentLinksRequestRestrictions;
  /**
   * shipping_address_collection_params
   *
   * Configuration for collecting the customer's shipping address.
   */
  shippingAddressCollection?: PostPaymentLinksRequestShippingAddressCollection;
  /**
   * The shipping rate options to apply to [checkout sessions](https://stripe.com/docs/api/checkout/sessions) created by this payment link.
   */
  shippingOptions?: Array<PostPaymentLinksRequestShippingOptionsItem>;
  /**
   * Describes the type of transaction being performed in order to customize relevant text on the page, such as the submit button. Changing this value will also affect the hostname in the [url](https://stripe.com/docs/api/payment_links/payment_links/object#url) property (example: `donate.stripe.com`).
   */
  submitType?: string;
  /**
   * subscription_data_params
   *
   * When creating a subscription, the specified configuration data will be used. There must be at least one line item with a recurring price to use `subscription_data`.
   */
  subscriptionData?: PostPaymentLinksRequestSubscriptionData;
  /**
   * tax_id_collection_params
   *
   * Controls tax ID collection during checkout.
   */
  taxIdCollection?: PostCheckoutSessionsRequestTaxIdCollection;
  /**
   * transfer_data_params
   *
   * The account (if any) the payments will be attributed to for tax reporting, and where funds from each payment will be transferred to.
   */
  transferData?: PostPaymentLinksRequestTransferData;
}

export const PostPaymentLinksRequestSchema: TypedSchema<PostPaymentLinksRequest> = typed<PostPaymentLinksRequest>(object({
  get afterCompletion() { return optional(PostPaymentLinksRequestAfterCompletionSchema) },
  allowPromotionCodes: optional(boolean()),
  applicationFeeAmount: optional(number()),
  applicationFeePercent: optional(number()),
  get automaticTax() { return optional(PostPaymentLinksRequestAutomaticTaxSchema) },
  billingAddressCollection: optional(string()),
  get consentCollection() { return optional(PostPaymentLinksRequestConsentCollectionSchema) },
  currency: optional(string()),
  get customFields() { return optional(array(PostCheckoutSessionsRequestCustomFieldsItemSchema)) },
  get customText() { return optional(PostCheckoutSessionsRequestCustomTextSchema) },
  customerCreation: optional(string()),
  expand: optional(array(string())),
  inactiveMessage: optional(string()),
  get invoiceCreation() { return optional(PostPaymentLinksRequestInvoiceCreationSchema) },
  lineItems: array(PostPaymentLinksRequestLineItemsItemSchema),
  get metadata() { return optional(PostPaymentLinksRequestMetadataSchema) },
  get nameCollection() { return optional(PostPaymentLinksRequestNameCollectionSchema) },
  onBehalfOf: optional(string()),
  get optionalItems() { return optional(array(PostCheckoutSessionsRequestOptionalItemsItemSchema)) },
  get paymentIntentData() { return optional(PostPaymentLinksRequestPaymentIntentDataSchema) },
  paymentMethodCollection: optional(string()),
  paymentMethodTypes: optional(array(string())),
  get phoneNumberCollection() { return optional(PostPaymentLinksRequestPhoneNumberCollectionSchema) },
  get restrictions() { return optional(PostPaymentLinksRequestRestrictionsSchema) },
  get shippingAddressCollection() { return optional(PostPaymentLinksRequestShippingAddressCollectionSchema) },
  get shippingOptions() { return optional(array(PostPaymentLinksRequestShippingOptionsItemSchema)) },
  submitType: optional(string()),
  get subscriptionData() { return optional(PostPaymentLinksRequestSubscriptionDataSchema) },
  get taxIdCollection() { return optional(PostCheckoutSessionsRequestTaxIdCollectionSchema) },
  get transferData() { return optional(PostPaymentLinksRequestTransferDataSchema) },
}));