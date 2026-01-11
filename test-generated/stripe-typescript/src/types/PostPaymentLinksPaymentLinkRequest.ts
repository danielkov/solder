import { TypedSchema, array, boolean, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostCheckoutSessionsRequestCustomText } from './PostCheckoutSessionsRequestCustomText';
import { PostCheckoutSessionsRequestCustomTextSchema } from './PostCheckoutSessionsRequestCustomText';
import type { PostCheckoutSessionsRequestTaxIdCollection } from './PostCheckoutSessionsRequestTaxIdCollection';
import { PostCheckoutSessionsRequestTaxIdCollectionSchema } from './PostCheckoutSessionsRequestTaxIdCollection';
import type { PostPaymentLinksPaymentLinkRequestCustomFields } from './PostPaymentLinksPaymentLinkRequestCustomFields';
import { PostPaymentLinksPaymentLinkRequestCustomFieldsSchema } from './PostPaymentLinksPaymentLinkRequestCustomFields';
import type { PostPaymentLinksPaymentLinkRequestInactiveMessage } from './PostPaymentLinksPaymentLinkRequestInactiveMessage';
import { PostPaymentLinksPaymentLinkRequestInactiveMessageSchema } from './PostPaymentLinksPaymentLinkRequestInactiveMessage';
import type { PostPaymentLinksPaymentLinkRequestInvoiceCreation } from './PostPaymentLinksPaymentLinkRequestInvoiceCreation';
import { PostPaymentLinksPaymentLinkRequestInvoiceCreationSchema } from './PostPaymentLinksPaymentLinkRequestInvoiceCreation';
import type { PostPaymentLinksPaymentLinkRequestLineItemsItem } from './PostPaymentLinksPaymentLinkRequestLineItemsItem';
import { PostPaymentLinksPaymentLinkRequestLineItemsItemSchema } from './PostPaymentLinksPaymentLinkRequestLineItemsItem';
import type { PostPaymentLinksPaymentLinkRequestNameCollection } from './PostPaymentLinksPaymentLinkRequestNameCollection';
import { PostPaymentLinksPaymentLinkRequestNameCollectionSchema } from './PostPaymentLinksPaymentLinkRequestNameCollection';
import type { PostPaymentLinksPaymentLinkRequestPaymentIntentData } from './PostPaymentLinksPaymentLinkRequestPaymentIntentData';
import { PostPaymentLinksPaymentLinkRequestPaymentIntentDataSchema } from './PostPaymentLinksPaymentLinkRequestPaymentIntentData';
import type { PostPaymentLinksPaymentLinkRequestPaymentMethodTypes } from './PostPaymentLinksPaymentLinkRequestPaymentMethodTypes';
import { PostPaymentLinksPaymentLinkRequestPaymentMethodTypesSchema } from './PostPaymentLinksPaymentLinkRequestPaymentMethodTypes';
import type { PostPaymentLinksPaymentLinkRequestRestrictions } from './PostPaymentLinksPaymentLinkRequestRestrictions';
import { PostPaymentLinksPaymentLinkRequestRestrictionsSchema } from './PostPaymentLinksPaymentLinkRequestRestrictions';
import type { PostPaymentLinksPaymentLinkRequestShippingAddressCollection } from './PostPaymentLinksPaymentLinkRequestShippingAddressCollection';
import { PostPaymentLinksPaymentLinkRequestShippingAddressCollectionSchema } from './PostPaymentLinksPaymentLinkRequestShippingAddressCollection';
import type { PostPaymentLinksPaymentLinkRequestSubscriptionData } from './PostPaymentLinksPaymentLinkRequestSubscriptionData';
import { PostPaymentLinksPaymentLinkRequestSubscriptionDataSchema } from './PostPaymentLinksPaymentLinkRequestSubscriptionData';
import type { PostPaymentLinksRequestAfterCompletion } from './PostPaymentLinksRequestAfterCompletion';
import { PostPaymentLinksRequestAfterCompletionSchema } from './PostPaymentLinksRequestAfterCompletion';
import type { PostPaymentLinksRequestAutomaticTax } from './PostPaymentLinksRequestAutomaticTax';
import { PostPaymentLinksRequestAutomaticTaxSchema } from './PostPaymentLinksRequestAutomaticTax';
import type { PostPaymentLinksRequestMetadata } from './PostPaymentLinksRequestMetadata';
import { PostPaymentLinksRequestMetadataSchema } from './PostPaymentLinksRequestMetadata';
import type { PostPaymentLinksRequestPhoneNumberCollection } from './PostPaymentLinksRequestPhoneNumberCollection';
import { PostPaymentLinksRequestPhoneNumberCollectionSchema } from './PostPaymentLinksRequestPhoneNumberCollection';
export interface PostPaymentLinksPaymentLinkRequest {
  /**
   * Whether the payment link's `url` is active. If `false`, customers visiting the URL will be shown a page saying that the link has been deactivated.
   */
  active?: boolean;
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
   * Collect additional information from your customer using custom fields. Up to 3 fields are supported.
   */
  customFields?: PostPaymentLinksPaymentLinkRequestCustomFields;
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
  inactiveMessage?: PostPaymentLinksPaymentLinkRequestInactiveMessage;
  /**
   * invoice_creation_update_params
   *
   * Generate a post-purchase Invoice for one-time payments.
   */
  invoiceCreation?: PostPaymentLinksPaymentLinkRequestInvoiceCreation;
  /**
   * The line items representing what is being sold. Each line item represents an item being sold. Up to 20 line items are supported.
   */
  lineItems?: Array<PostPaymentLinksPaymentLinkRequestLineItemsItem>;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`. Metadata associated with this Payment Link will automatically be copied to [checkout sessions](https://stripe.com/docs/api/checkout/sessions) created by this payment link.
   */
  metadata?: PostPaymentLinksRequestMetadata;
  /**
   * Controls settings applied for collecting the customer's name.
   */
  nameCollection?: PostPaymentLinksPaymentLinkRequestNameCollection;
  /**
   * payment_intent_data_update_params
   *
   * A subset of parameters to be passed to PaymentIntent creation for Checkout Sessions in `payment` mode.
   */
  paymentIntentData?: PostPaymentLinksPaymentLinkRequestPaymentIntentData;
  /**
   * Specify whether Checkout should collect a payment method. When set to `if_required`, Checkout will not collect a payment method when the total due for the session is 0.This may occur if the Checkout Session includes a free trial or a discount.

Can only be set in `subscription` mode. Defaults to `always`.

If you'd like information on how to collect a payment method outside of Checkout, read the guide on [configuring subscriptions with a free trial](https://stripe.com/docs/payments/checkout/free-trials).
   */
  paymentMethodCollection?: string;
  /**
   * The list of payment method types that customers can use. Pass an empty string to enable dynamic payment methods that use your [payment method settings](https://dashboard.stripe.com/settings/payment_methods).
   */
  paymentMethodTypes?: PostPaymentLinksPaymentLinkRequestPaymentMethodTypes;
  /**
   * phone_number_collection_params
   *
   * Controls phone number collection settings during checkout.

We recommend that you review your privacy policy and check with your legal contacts.
   */
  phoneNumberCollection?: PostPaymentLinksRequestPhoneNumberCollection;
  /**
   * Settings that restrict the usage of a payment link.
   */
  restrictions?: PostPaymentLinksPaymentLinkRequestRestrictions;
  /**
   * Configuration for collecting the customer's shipping address.
   */
  shippingAddressCollection?: PostPaymentLinksPaymentLinkRequestShippingAddressCollection;
  /**
   * Describes the type of transaction being performed in order to customize relevant text on the page, such as the submit button. Changing this value will also affect the hostname in the [url](https://stripe.com/docs/api/payment_links/payment_links/object#url) property (example: `donate.stripe.com`).
   */
  submitType?: string;
  /**
   * subscription_data_update_params
   *
   * When creating a subscription, the specified configuration data will be used. There must be at least one line item with a recurring price to use `subscription_data`.
   */
  subscriptionData?: PostPaymentLinksPaymentLinkRequestSubscriptionData;
  /**
   * tax_id_collection_params
   *
   * Controls tax ID collection during checkout.
   */
  taxIdCollection?: PostCheckoutSessionsRequestTaxIdCollection;
}

export const PostPaymentLinksPaymentLinkRequestSchema: TypedSchema<PostPaymentLinksPaymentLinkRequest> = typed<PostPaymentLinksPaymentLinkRequest>(object({
  active: optional(boolean()),
  get afterCompletion() { return optional(PostPaymentLinksRequestAfterCompletionSchema) },
  allowPromotionCodes: optional(boolean()),
  get automaticTax() { return optional(PostPaymentLinksRequestAutomaticTaxSchema) },
  billingAddressCollection: optional(string()),
  get customFields() { return optional(PostPaymentLinksPaymentLinkRequestCustomFieldsSchema) },
  get customText() { return optional(PostCheckoutSessionsRequestCustomTextSchema) },
  customerCreation: optional(string()),
  expand: optional(array(string())),
  get inactiveMessage() { return optional(PostPaymentLinksPaymentLinkRequestInactiveMessageSchema) },
  get invoiceCreation() { return optional(PostPaymentLinksPaymentLinkRequestInvoiceCreationSchema) },
  get lineItems() { return optional(array(PostPaymentLinksPaymentLinkRequestLineItemsItemSchema)) },
  get metadata() { return optional(PostPaymentLinksRequestMetadataSchema) },
  get nameCollection() { return optional(PostPaymentLinksPaymentLinkRequestNameCollectionSchema) },
  get paymentIntentData() { return optional(PostPaymentLinksPaymentLinkRequestPaymentIntentDataSchema) },
  paymentMethodCollection: optional(string()),
  get paymentMethodTypes() { return optional(PostPaymentLinksPaymentLinkRequestPaymentMethodTypesSchema) },
  get phoneNumberCollection() { return optional(PostPaymentLinksRequestPhoneNumberCollectionSchema) },
  get restrictions() { return optional(PostPaymentLinksPaymentLinkRequestRestrictionsSchema) },
  get shippingAddressCollection() { return optional(PostPaymentLinksPaymentLinkRequestShippingAddressCollectionSchema) },
  submitType: optional(string()),
  get subscriptionData() { return optional(PostPaymentLinksPaymentLinkRequestSubscriptionDataSchema) },
  get taxIdCollection() { return optional(PostCheckoutSessionsRequestTaxIdCollectionSchema) },
}));