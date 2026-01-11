import { TypedSchema, array, boolean, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostAccountsAccountBankAccountsRequestMetadata } from './PostAccountsAccountBankAccountsRequestMetadata';
import { PostAccountsAccountBankAccountsRequestMetadataSchema } from './PostAccountsAccountBankAccountsRequestMetadata';
import type { PostCheckoutSessionsRequestAdaptivePricing } from './PostCheckoutSessionsRequestAdaptivePricing';
import { PostCheckoutSessionsRequestAdaptivePricingSchema } from './PostCheckoutSessionsRequestAdaptivePricing';
import type { PostCheckoutSessionsRequestAfterExpiration } from './PostCheckoutSessionsRequestAfterExpiration';
import { PostCheckoutSessionsRequestAfterExpirationSchema } from './PostCheckoutSessionsRequestAfterExpiration';
import type { PostCheckoutSessionsRequestAutomaticTax } from './PostCheckoutSessionsRequestAutomaticTax';
import { PostCheckoutSessionsRequestAutomaticTaxSchema } from './PostCheckoutSessionsRequestAutomaticTax';
import type { PostCheckoutSessionsRequestBrandingSettings } from './PostCheckoutSessionsRequestBrandingSettings';
import { PostCheckoutSessionsRequestBrandingSettingsSchema } from './PostCheckoutSessionsRequestBrandingSettings';
import type { PostCheckoutSessionsRequestConsentCollection } from './PostCheckoutSessionsRequestConsentCollection';
import { PostCheckoutSessionsRequestConsentCollectionSchema } from './PostCheckoutSessionsRequestConsentCollection';
import type { PostCheckoutSessionsRequestCustomFieldsItem } from './PostCheckoutSessionsRequestCustomFieldsItem';
import { PostCheckoutSessionsRequestCustomFieldsItemSchema } from './PostCheckoutSessionsRequestCustomFieldsItem';
import type { PostCheckoutSessionsRequestCustomText } from './PostCheckoutSessionsRequestCustomText';
import { PostCheckoutSessionsRequestCustomTextSchema } from './PostCheckoutSessionsRequestCustomText';
import type { PostCheckoutSessionsRequestCustomerUpdate } from './PostCheckoutSessionsRequestCustomerUpdate';
import { PostCheckoutSessionsRequestCustomerUpdateSchema } from './PostCheckoutSessionsRequestCustomerUpdate';
import type { PostCheckoutSessionsRequestDiscountsItem } from './PostCheckoutSessionsRequestDiscountsItem';
import { PostCheckoutSessionsRequestDiscountsItemSchema } from './PostCheckoutSessionsRequestDiscountsItem';
import type { PostCheckoutSessionsRequestInvoiceCreation } from './PostCheckoutSessionsRequestInvoiceCreation';
import { PostCheckoutSessionsRequestInvoiceCreationSchema } from './PostCheckoutSessionsRequestInvoiceCreation';
import type { PostCheckoutSessionsRequestLineItemsItem } from './PostCheckoutSessionsRequestLineItemsItem';
import { PostCheckoutSessionsRequestLineItemsItemSchema } from './PostCheckoutSessionsRequestLineItemsItem';
import type { PostCheckoutSessionsRequestNameCollection } from './PostCheckoutSessionsRequestNameCollection';
import { PostCheckoutSessionsRequestNameCollectionSchema } from './PostCheckoutSessionsRequestNameCollection';
import type { PostCheckoutSessionsRequestOptionalItemsItem } from './PostCheckoutSessionsRequestOptionalItemsItem';
import { PostCheckoutSessionsRequestOptionalItemsItemSchema } from './PostCheckoutSessionsRequestOptionalItemsItem';
import type { PostCheckoutSessionsRequestPaymentIntentData } from './PostCheckoutSessionsRequestPaymentIntentData';
import { PostCheckoutSessionsRequestPaymentIntentDataSchema } from './PostCheckoutSessionsRequestPaymentIntentData';
import type { PostCheckoutSessionsRequestPaymentMethodData } from './PostCheckoutSessionsRequestPaymentMethodData';
import { PostCheckoutSessionsRequestPaymentMethodDataSchema } from './PostCheckoutSessionsRequestPaymentMethodData';
import type { PostCheckoutSessionsRequestPaymentMethodOptions } from './PostCheckoutSessionsRequestPaymentMethodOptions';
import { PostCheckoutSessionsRequestPaymentMethodOptionsSchema } from './PostCheckoutSessionsRequestPaymentMethodOptions';
import type { PostCheckoutSessionsRequestPermissions } from './PostCheckoutSessionsRequestPermissions';
import { PostCheckoutSessionsRequestPermissionsSchema } from './PostCheckoutSessionsRequestPermissions';
import type { PostCheckoutSessionsRequestPhoneNumberCollection } from './PostCheckoutSessionsRequestPhoneNumberCollection';
import { PostCheckoutSessionsRequestPhoneNumberCollectionSchema } from './PostCheckoutSessionsRequestPhoneNumberCollection';
import type { PostCheckoutSessionsRequestSavedPaymentMethodOptions } from './PostCheckoutSessionsRequestSavedPaymentMethodOptions';
import { PostCheckoutSessionsRequestSavedPaymentMethodOptionsSchema } from './PostCheckoutSessionsRequestSavedPaymentMethodOptions';
import type { PostCheckoutSessionsRequestSetupIntentData } from './PostCheckoutSessionsRequestSetupIntentData';
import { PostCheckoutSessionsRequestSetupIntentDataSchema } from './PostCheckoutSessionsRequestSetupIntentData';
import type { PostCheckoutSessionsRequestShippingAddressCollection } from './PostCheckoutSessionsRequestShippingAddressCollection';
import { PostCheckoutSessionsRequestShippingAddressCollectionSchema } from './PostCheckoutSessionsRequestShippingAddressCollection';
import type { PostCheckoutSessionsRequestShippingOptionsItem } from './PostCheckoutSessionsRequestShippingOptionsItem';
import { PostCheckoutSessionsRequestShippingOptionsItemSchema } from './PostCheckoutSessionsRequestShippingOptionsItem';
import type { PostCheckoutSessionsRequestSubscriptionData } from './PostCheckoutSessionsRequestSubscriptionData';
import { PostCheckoutSessionsRequestSubscriptionDataSchema } from './PostCheckoutSessionsRequestSubscriptionData';
import type { PostCheckoutSessionsRequestTaxIdCollection } from './PostCheckoutSessionsRequestTaxIdCollection';
import { PostCheckoutSessionsRequestTaxIdCollectionSchema } from './PostCheckoutSessionsRequestTaxIdCollection';
import type { PostCheckoutSessionsRequestWalletOptions } from './PostCheckoutSessionsRequestWalletOptions';
import { PostCheckoutSessionsRequestWalletOptionsSchema } from './PostCheckoutSessionsRequestWalletOptions';
export interface PostCheckoutSessionsRequest {
  /**
   * adaptive_pricing_params
   *
   * Settings for price localization with [Adaptive Pricing](https://docs.stripe.com/payments/checkout/adaptive-pricing).
   */
  adaptivePricing?: PostCheckoutSessionsRequestAdaptivePricing;
  /**
   * after_expiration_params
   *
   * Configure actions after a Checkout Session has expired.
   */
  afterExpiration?: PostCheckoutSessionsRequestAfterExpiration;
  /**
   * Enables user redeemable promotion codes.
   */
  allowPromotionCodes?: boolean;
  /**
   * automatic_tax_params
   *
   * Settings for automatic tax lookup for this session and resulting payments, invoices, and subscriptions.
   */
  automaticTax?: PostCheckoutSessionsRequestAutomaticTax;
  /**
   * Specify whether Checkout should collect the customer's billing address. Defaults to `auto`.
   */
  billingAddressCollection?: string;
  /**
   * branding_settings_params
   *
   * The branding settings for the Checkout Session. This parameter is not allowed if ui_mode is `custom`.
   */
  brandingSettings?: PostCheckoutSessionsRequestBrandingSettings;
  /**
   * If set, Checkout displays a back button and customers will be directed to this URL if they decide to cancel payment and return to your website. This parameter is not allowed if ui_mode is `embedded` or `custom`.
   */
  cancelUrl?: string;
  /**
   * A unique string to reference the Checkout Session. This can be a
customer ID, a cart ID, or similar, and can be used to reconcile the
session with your internal systems.
   */
  clientReferenceId?: string;
  /**
   * consent_collection_params
   *
   * Configure fields for the Checkout Session to gather active consent from customers.
   */
  consentCollection?: PostCheckoutSessionsRequestConsentCollection;
  /**
   * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies). Required in `setup` mode when `payment_method_types` is not set.
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
   * ID of an existing Customer, if one exists. In `payment` mode, the customer’s most recently saved card
payment method will be used to prefill the email, name, card details, and billing address
on the Checkout page. In `subscription` mode, the customer’s [default payment method](https://stripe.com/docs/api/customers/update#update_customer-invoice_settings-default_payment_method)
will be used if it’s a card, otherwise the most recently saved card will be used. A valid billing address, billing name and billing email are required on the payment method for Checkout to prefill the customer's card details.

If the Customer already has a valid [email](https://stripe.com/docs/api/customers/object#customer_object-email) set, the email will be prefilled and not editable in Checkout.
If the Customer does not have a valid `email`, Checkout will set the email entered during the session on the Customer.

If blank for Checkout Sessions in `subscription` mode or with `customer_creation` set as `always` in `payment` mode, Checkout will create a new Customer object based on information provided during the payment flow.

You can set [`payment_intent_data.setup_future_usage`](https://stripe.com/docs/api/checkout/sessions/create#create_checkout_session-payment_intent_data-setup_future_usage) to have Checkout automatically attach the payment method to the Customer you pass in for future reuse.
   */
  customer?: string;
  /**
   * Configure whether a Checkout Session creates a [Customer](https://stripe.com/docs/api/customers) during Session confirmation.

When a Customer is not created, you can still retrieve email, address, and other customer data entered in Checkout
with [customer_details](https://stripe.com/docs/api/checkout/sessions/object#checkout_session_object-customer_details).

Sessions that don't create Customers instead are grouped by [guest customers](https://stripe.com/docs/payments/checkout/guest-customers)
in the Dashboard. Promotion codes limited to first time customers will return invalid for these Sessions.

Can only be set in `payment` and `setup` mode.
   */
  customerCreation?: string;
  /**
   * If provided, this value will be used when the Customer object is created.
If not provided, customers will be asked to enter their email address.
Use this parameter to prefill customer data if you already have an email
on file. To access information about the customer once a session is
complete, use the `customer` field.
   */
  customerEmail?: string;
  /**
   * customer_update_params
   *
   * Controls what fields on Customer can be updated by the Checkout Session. Can only be provided when `customer` is provided.
   */
  customerUpdate?: PostCheckoutSessionsRequestCustomerUpdate;
  /**
   * The coupon or promotion code to apply to this Session. Currently, only up to one may be specified.
   */
  discounts?: Array<PostCheckoutSessionsRequestDiscountsItem>;
  /**
   * A list of the types of payment methods (e.g., `card`) that should be excluded from this Checkout Session. This should only be used when payment methods for this Checkout Session are managed through the [Stripe Dashboard](https://dashboard.stripe.com/settings/payment_methods).
   */
  excludedPaymentMethodTypes?: Array<string>;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
  /**
   * The Epoch time in seconds at which the Checkout Session will expire. It can be anywhere from 30 minutes to 24 hours after Checkout Session creation. By default, this value is 24 hours from creation.
   */
  expiresAt?: number;
  /**
   * invoice_creation_params
   *
   * Generate a post-purchase Invoice for one-time payments.
   */
  invoiceCreation?: PostCheckoutSessionsRequestInvoiceCreation;
  /**
   * A list of items the customer is purchasing. Use this parameter to pass one-time or recurring [Prices](https://stripe.com/docs/api/prices). The parameter is required for `payment` and `subscription` mode.

For `payment` mode, there is a maximum of 100 line items, however it is recommended to consolidate line items if there are more than a few dozen.

For `subscription` mode, there is a maximum of 20 line items with recurring Prices and 20 line items with one-time Prices. Line items with one-time Prices will be on the initial invoice only.
   */
  lineItems?: Array<PostCheckoutSessionsRequestLineItemsItem>;
  /**
   * The IETF language tag of the locale Checkout is displayed in. If blank or `auto`, the browser's locale is used.
   */
  locale?: string;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: PostAccountsAccountBankAccountsRequestMetadata;
  /**
   * The mode of the Checkout Session. Pass `subscription` if the Checkout Session includes at least one recurring item.
   */
  mode?: string;
  /**
   * name_collection_params
   *
   * Controls name collection settings for the session.

You can configure Checkout to collect your customers' business names, individual names, or both. Each name field can be either required or optional.

If a [Customer](https://stripe.com/docs/api/customers) is created or provided, the names can be saved to the Customer object as well.
   */
  nameCollection?: PostCheckoutSessionsRequestNameCollection;
  /**
   * A list of optional items the customer can add to their order at checkout. Use this parameter to pass one-time or recurring [Prices](https://stripe.com/docs/api/prices).

There is a maximum of 10 optional items allowed on a Checkout Session, and the existing limits on the number of line items allowed on a Checkout Session apply to the combined number of line items and optional items.

For `payment` mode, there is a maximum of 100 combined line items and optional items, however it is recommended to consolidate items if there are more than a few dozen.

For `subscription` mode, there is a maximum of 20 line items and optional items with recurring Prices and 20 line items and optional items with one-time Prices.
   */
  optionalItems?: Array<PostCheckoutSessionsRequestOptionalItemsItem>;
  /**
   * Where the user is coming from. This informs the optimizations that are applied to the session.
   */
  originContext?: string;
  /**
   * payment_intent_data_params
   *
   * A subset of parameters to be passed to PaymentIntent creation for Checkout Sessions in `payment` mode.
   */
  paymentIntentData?: PostCheckoutSessionsRequestPaymentIntentData;
  /**
   * Specify whether Checkout should collect a payment method. When set to `if_required`, Checkout will not collect a payment method when the total due for the session is 0.
This may occur if the Checkout Session includes a free trial or a discount.

Can only be set in `subscription` mode. Defaults to `always`.

If you'd like information on how to collect a payment method outside of Checkout, read the guide on configuring [subscriptions with a free trial](https://stripe.com/docs/payments/checkout/free-trials).
   */
  paymentMethodCollection?: string;
  /**
   * The ID of the payment method configuration to use with this Checkout session.
   */
  paymentMethodConfiguration?: string;
  /**
   * payment_method_data_param
   *
   * This parameter allows you to set some attributes on the payment method created during a Checkout session.
   */
  paymentMethodData?: PostCheckoutSessionsRequestPaymentMethodData;
  /**
   * payment_method_options_param
   *
   * Payment-method-specific configuration.
   */
  paymentMethodOptions?: PostCheckoutSessionsRequestPaymentMethodOptions;
  /**
   * A list of the types of payment methods (e.g., `card`) this Checkout Session can accept.

You can omit this attribute to manage your payment methods from the [Stripe Dashboard](https://dashboard.stripe.com/settings/payment_methods).
See [Dynamic Payment Methods](https://stripe.com/docs/payments/payment-methods/integration-options#using-dynamic-payment-methods) for more details.

Read more about the supported payment methods and their requirements in our [payment
method details guide](/docs/payments/checkout/payment-methods).

If multiple payment methods are passed, Checkout will dynamically reorder them to
prioritize the most relevant payment methods based on the customer's location and
other characteristics.
   */
  paymentMethodTypes?: Array<string>;
  /**
   * permissions_param
   *
   * This property is used to set up permissions for various actions (e.g., update) on the CheckoutSession object. Can only be set when creating `embedded` or `custom` sessions.

For specific permissions, please refer to their dedicated subsections, such as `permissions.update_shipping_details`.
   */
  permissions?: PostCheckoutSessionsRequestPermissions;
  /**
   * phone_number_collection_params
   *
   * Controls phone number collection settings for the session.

We recommend that you review your privacy policy and check with your legal contacts
before using this feature. Learn more about [collecting phone numbers with Checkout](https://stripe.com/docs/payments/checkout/phone-numbers).
   */
  phoneNumberCollection?: PostCheckoutSessionsRequestPhoneNumberCollection;
  /**
   * This parameter applies to `ui_mode: embedded`. Learn more about the [redirect behavior](https://stripe.com/docs/payments/checkout/custom-success-page?payment-ui=embedded-form) of embedded sessions. Defaults to `always`.
   */
  redirectOnCompletion?: string;
  /**
   * The URL to redirect your customer back to after they authenticate or cancel their payment on the
payment method's app or site. This parameter is required if `ui_mode` is `embedded` or `custom`
and redirect-based payment methods are enabled on the session.
   */
  returnUrl?: string;
  /**
   * saved_payment_method_options_param
   *
   * Controls saved payment method settings for the session. Only available in `payment` and `subscription` mode.
   */
  savedPaymentMethodOptions?: PostCheckoutSessionsRequestSavedPaymentMethodOptions;
  /**
   * setup_intent_data_param
   *
   * A subset of parameters to be passed to SetupIntent creation for Checkout Sessions in `setup` mode.
   */
  setupIntentData?: PostCheckoutSessionsRequestSetupIntentData;
  /**
   * shipping_address_collection_params
   *
   * When set, provides configuration for Checkout to collect a shipping address from a customer.
   */
  shippingAddressCollection?: PostCheckoutSessionsRequestShippingAddressCollection;
  /**
   * The shipping rate options to apply to this Session. Up to a maximum of 5.
   */
  shippingOptions?: Array<PostCheckoutSessionsRequestShippingOptionsItem>;
  /**
   * Describes the type of transaction being performed by Checkout in order
to customize relevant text on the page, such as the submit button.
 `submit_type` can only be specified on Checkout Sessions in
`payment` or `subscription` mode. If blank or `auto`, `pay` is used.
   */
  submitType?: string;
  /**
   * subscription_data_params
   *
   * A subset of parameters to be passed to subscription creation for Checkout Sessions in `subscription` mode.
   */
  subscriptionData?: PostCheckoutSessionsRequestSubscriptionData;
  /**
   * The URL to which Stripe should send customers when payment or setup
is complete.
This parameter is not allowed if ui_mode is `embedded` or `custom`. If you'd like to use
information from the successful Checkout Session on your page, read the
guide on [customizing your success page](https://stripe.com/docs/payments/checkout/custom-success-page).
   */
  successUrl?: string;
  /**
   * tax_id_collection_params
   *
   * Controls tax ID collection during checkout.
   */
  taxIdCollection?: PostCheckoutSessionsRequestTaxIdCollection;
  /**
   * The UI mode of the Session. Defaults to `hosted`.
   */
  uiMode?: string;
  /**
   * wallet_options_param
   *
   * Wallet-specific configuration.
   */
  walletOptions?: PostCheckoutSessionsRequestWalletOptions;
}

export const PostCheckoutSessionsRequestSchema: TypedSchema<PostCheckoutSessionsRequest> = typed<PostCheckoutSessionsRequest>(object({
  get adaptivePricing() { return optional(PostCheckoutSessionsRequestAdaptivePricingSchema) },
  get afterExpiration() { return optional(PostCheckoutSessionsRequestAfterExpirationSchema) },
  allowPromotionCodes: optional(boolean()),
  get automaticTax() { return optional(PostCheckoutSessionsRequestAutomaticTaxSchema) },
  billingAddressCollection: optional(string()),
  get brandingSettings() { return optional(PostCheckoutSessionsRequestBrandingSettingsSchema) },
  cancelUrl: optional(string()),
  clientReferenceId: optional(string()),
  get consentCollection() { return optional(PostCheckoutSessionsRequestConsentCollectionSchema) },
  currency: optional(string()),
  get customFields() { return optional(array(PostCheckoutSessionsRequestCustomFieldsItemSchema)) },
  get customText() { return optional(PostCheckoutSessionsRequestCustomTextSchema) },
  customer: optional(string()),
  customerCreation: optional(string()),
  customerEmail: optional(string()),
  get customerUpdate() { return optional(PostCheckoutSessionsRequestCustomerUpdateSchema) },
  get discounts() { return optional(array(PostCheckoutSessionsRequestDiscountsItemSchema)) },
  excludedPaymentMethodTypes: optional(array(string())),
  expand: optional(array(string())),
  expiresAt: optional(number()),
  get invoiceCreation() { return optional(PostCheckoutSessionsRequestInvoiceCreationSchema) },
  get lineItems() { return optional(array(PostCheckoutSessionsRequestLineItemsItemSchema)) },
  locale: optional(string()),
  get metadata() { return optional(PostAccountsAccountBankAccountsRequestMetadataSchema) },
  mode: optional(string()),
  get nameCollection() { return optional(PostCheckoutSessionsRequestNameCollectionSchema) },
  get optionalItems() { return optional(array(PostCheckoutSessionsRequestOptionalItemsItemSchema)) },
  originContext: optional(string()),
  get paymentIntentData() { return optional(PostCheckoutSessionsRequestPaymentIntentDataSchema) },
  paymentMethodCollection: optional(string()),
  paymentMethodConfiguration: optional(string()),
  get paymentMethodData() { return optional(PostCheckoutSessionsRequestPaymentMethodDataSchema) },
  get paymentMethodOptions() { return optional(PostCheckoutSessionsRequestPaymentMethodOptionsSchema) },
  paymentMethodTypes: optional(array(string())),
  get permissions() { return optional(PostCheckoutSessionsRequestPermissionsSchema) },
  get phoneNumberCollection() { return optional(PostCheckoutSessionsRequestPhoneNumberCollectionSchema) },
  redirectOnCompletion: optional(string()),
  returnUrl: optional(string()),
  get savedPaymentMethodOptions() { return optional(PostCheckoutSessionsRequestSavedPaymentMethodOptionsSchema) },
  get setupIntentData() { return optional(PostCheckoutSessionsRequestSetupIntentDataSchema) },
  get shippingAddressCollection() { return optional(PostCheckoutSessionsRequestShippingAddressCollectionSchema) },
  get shippingOptions() { return optional(array(PostCheckoutSessionsRequestShippingOptionsItemSchema)) },
  submitType: optional(string()),
  get subscriptionData() { return optional(PostCheckoutSessionsRequestSubscriptionDataSchema) },
  successUrl: optional(string()),
  get taxIdCollection() { return optional(PostCheckoutSessionsRequestTaxIdCollectionSchema) },
  uiMode: optional(string()),
  get walletOptions() { return optional(PostCheckoutSessionsRequestWalletOptionsSchema) },
}));