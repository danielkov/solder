import { TypedSchema, array, boolean, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { CheckoutSessionPaymentMethodOptions } from './CheckoutSessionPaymentMethodOptions';
import { CheckoutSessionPaymentMethodOptionsSchema } from './CheckoutSessionPaymentMethodOptions';
import type { CheckoutSessionWalletOptions } from './CheckoutSessionWalletOptions';
import { CheckoutSessionWalletOptionsSchema } from './CheckoutSessionWalletOptions';
import type { CustomerUnion } from './CustomerUnion';
import { CustomerUnionSchema } from './CustomerUnion';
import type { InvoiceOrRef } from './InvoiceOrRef';
import { InvoiceOrRefSchema } from './InvoiceOrRef';
import type { LineItemsProperty } from './LineItemsProperty';
import { LineItemsPropertySchema } from './LineItemsProperty';
import type { MetadataProperty } from './MetadataProperty';
import { MetadataPropertySchema } from './MetadataProperty';
import type { PaymentFlowsPaymentIntentPresentmentDetails } from './PaymentFlowsPaymentIntentPresentmentDetails';
import { PaymentFlowsPaymentIntentPresentmentDetailsSchema } from './PaymentFlowsPaymentIntentPresentmentDetails';
import type { PaymentIntentOrRef } from './PaymentIntentOrRef';
import { PaymentIntentOrRefSchema } from './PaymentIntentOrRef';
import type { PaymentLinkOrRef } from './PaymentLinkOrRef';
import { PaymentLinkOrRefSchema } from './PaymentLinkOrRef';
import type { PaymentMethodConfigBizPaymentMethodConfigurationDetails } from './PaymentMethodConfigBizPaymentMethodConfigurationDetails';
import { PaymentMethodConfigBizPaymentMethodConfigurationDetailsSchema } from './PaymentMethodConfigBizPaymentMethodConfigurationDetails';
import type { PaymentPagesCheckoutSessionAdaptivePricing } from './PaymentPagesCheckoutSessionAdaptivePricing';
import { PaymentPagesCheckoutSessionAdaptivePricingSchema } from './PaymentPagesCheckoutSessionAdaptivePricing';
import type { PaymentPagesCheckoutSessionAfterExpiration } from './PaymentPagesCheckoutSessionAfterExpiration';
import { PaymentPagesCheckoutSessionAfterExpirationSchema } from './PaymentPagesCheckoutSessionAfterExpiration';
import type { PaymentPagesCheckoutSessionAutomaticTax } from './PaymentPagesCheckoutSessionAutomaticTax';
import { PaymentPagesCheckoutSessionAutomaticTaxSchema } from './PaymentPagesCheckoutSessionAutomaticTax';
import type { PaymentPagesCheckoutSessionBrandingSettings } from './PaymentPagesCheckoutSessionBrandingSettings';
import { PaymentPagesCheckoutSessionBrandingSettingsSchema } from './PaymentPagesCheckoutSessionBrandingSettings';
import type { PaymentPagesCheckoutSessionCollectedInformation } from './PaymentPagesCheckoutSessionCollectedInformation';
import { PaymentPagesCheckoutSessionCollectedInformationSchema } from './PaymentPagesCheckoutSessionCollectedInformation';
import type { PaymentPagesCheckoutSessionConsent } from './PaymentPagesCheckoutSessionConsent';
import { PaymentPagesCheckoutSessionConsentSchema } from './PaymentPagesCheckoutSessionConsent';
import type { PaymentPagesCheckoutSessionConsentCollection } from './PaymentPagesCheckoutSessionConsentCollection';
import { PaymentPagesCheckoutSessionConsentCollectionSchema } from './PaymentPagesCheckoutSessionConsentCollection';
import type { PaymentPagesCheckoutSessionCurrencyConversion } from './PaymentPagesCheckoutSessionCurrencyConversion';
import { PaymentPagesCheckoutSessionCurrencyConversionSchema } from './PaymentPagesCheckoutSessionCurrencyConversion';
import type { PaymentPagesCheckoutSessionCustomFields } from './PaymentPagesCheckoutSessionCustomFields';
import { PaymentPagesCheckoutSessionCustomFieldsSchema } from './PaymentPagesCheckoutSessionCustomFields';
import type { PaymentPagesCheckoutSessionCustomText } from './PaymentPagesCheckoutSessionCustomText';
import { PaymentPagesCheckoutSessionCustomTextSchema } from './PaymentPagesCheckoutSessionCustomText';
import type { PaymentPagesCheckoutSessionCustomerDetails } from './PaymentPagesCheckoutSessionCustomerDetails';
import { PaymentPagesCheckoutSessionCustomerDetailsSchema } from './PaymentPagesCheckoutSessionCustomerDetails';
import type { PaymentPagesCheckoutSessionDiscount } from './PaymentPagesCheckoutSessionDiscount';
import { PaymentPagesCheckoutSessionDiscountSchema } from './PaymentPagesCheckoutSessionDiscount';
import type { PaymentPagesCheckoutSessionInvoiceCreation } from './PaymentPagesCheckoutSessionInvoiceCreation';
import { PaymentPagesCheckoutSessionInvoiceCreationSchema } from './PaymentPagesCheckoutSessionInvoiceCreation';
import type { PaymentPagesCheckoutSessionNameCollection } from './PaymentPagesCheckoutSessionNameCollection';
import { PaymentPagesCheckoutSessionNameCollectionSchema } from './PaymentPagesCheckoutSessionNameCollection';
import type { PaymentPagesCheckoutSessionOptionalItem } from './PaymentPagesCheckoutSessionOptionalItem';
import { PaymentPagesCheckoutSessionOptionalItemSchema } from './PaymentPagesCheckoutSessionOptionalItem';
import type { PaymentPagesCheckoutSessionPermissions } from './PaymentPagesCheckoutSessionPermissions';
import { PaymentPagesCheckoutSessionPermissionsSchema } from './PaymentPagesCheckoutSessionPermissions';
import type { PaymentPagesCheckoutSessionPhoneNumberCollection } from './PaymentPagesCheckoutSessionPhoneNumberCollection';
import { PaymentPagesCheckoutSessionPhoneNumberCollectionSchema } from './PaymentPagesCheckoutSessionPhoneNumberCollection';
import type { PaymentPagesCheckoutSessionSavedPaymentMethodOptions } from './PaymentPagesCheckoutSessionSavedPaymentMethodOptions';
import { PaymentPagesCheckoutSessionSavedPaymentMethodOptionsSchema } from './PaymentPagesCheckoutSessionSavedPaymentMethodOptions';
import type { PaymentPagesCheckoutSessionShippingAddressCollection } from './PaymentPagesCheckoutSessionShippingAddressCollection';
import { PaymentPagesCheckoutSessionShippingAddressCollectionSchema } from './PaymentPagesCheckoutSessionShippingAddressCollection';
import type { PaymentPagesCheckoutSessionShippingCost } from './PaymentPagesCheckoutSessionShippingCost';
import { PaymentPagesCheckoutSessionShippingCostSchema } from './PaymentPagesCheckoutSessionShippingCost';
import type { PaymentPagesCheckoutSessionShippingOption } from './PaymentPagesCheckoutSessionShippingOption';
import { PaymentPagesCheckoutSessionShippingOptionSchema } from './PaymentPagesCheckoutSessionShippingOption';
import type { PaymentPagesCheckoutSessionTaxIdCollection } from './PaymentPagesCheckoutSessionTaxIdCollection';
import { PaymentPagesCheckoutSessionTaxIdCollectionSchema } from './PaymentPagesCheckoutSessionTaxIdCollection';
import type { PaymentPagesCheckoutSessionTotalDetails } from './PaymentPagesCheckoutSessionTotalDetails';
import { PaymentPagesCheckoutSessionTotalDetailsSchema } from './PaymentPagesCheckoutSessionTotalDetails';
import type { SetupIntentOrRef } from './SetupIntentOrRef';
import { SetupIntentOrRefSchema } from './SetupIntentOrRef';
import type { SubscriptionOrRef } from './SubscriptionOrRef';
import { SubscriptionOrRefSchema } from './SubscriptionOrRef';
/**
 * Session
 *
 * A Checkout Session represents your customer's session as they pay for
one-time purchases or subscriptions through [Checkout](https://stripe.com/docs/payments/checkout)
or [Payment Links](https://stripe.com/docs/payments/payment-links). We recommend creating a
new Session each time your customer attempts to pay.

Once payment is successful, the Checkout Session will contain a reference
to the [Customer](https://stripe.com/docs/api/customers), and either the successful
[PaymentIntent](https://stripe.com/docs/api/payment_intents) or an active
[Subscription](https://stripe.com/docs/api/subscriptions).

You can create a Checkout Session on your server and redirect to its URL
to begin Checkout.

Related guide: [Checkout quickstart](https://stripe.com/docs/checkout/quickstart)
 */
export interface CheckoutSession {
  /**
   * Settings for price localization with [Adaptive Pricing](https://docs.stripe.com/payments/checkout/adaptive-pricing).
   */
  adaptivePricing?: PaymentPagesCheckoutSessionAdaptivePricing;
  /**
   * When set, provides configuration for actions to take if this Checkout Session expires.
   */
  afterExpiration?: PaymentPagesCheckoutSessionAfterExpiration;
  /**
   * Enables user redeemable promotion codes.
   */
  allowPromotionCodes?: boolean;
  /**
   * Total of all items before discounts or taxes are applied.
   */
  amountSubtotal?: number;
  /**
   * Total of all items after discounts and taxes are applied.
   */
  amountTotal?: number;
  /**
   * PaymentPagesCheckoutSessionAutomaticTax
   *
   * 
   */
  automaticTax: PaymentPagesCheckoutSessionAutomaticTax;
  /**
   * Describes whether Checkout should collect the customer's billing address. Defaults to `auto`.
   */
  billingAddressCollection?: string;
  /**
   * PaymentPagesCheckoutSessionBrandingSettings
   *
   * 
   */
  brandingSettings?: PaymentPagesCheckoutSessionBrandingSettings;
  /**
   * If set, Checkout displays a back button and customers will be directed to this URL if they decide to cancel payment and return to your website.
   */
  cancelUrl?: string;
  /**
   * A unique string to reference the Checkout Session. This can be a
customer ID, a cart ID, or similar, and can be used to reconcile the
Session with your internal systems.
   */
  clientReferenceId?: string;
  /**
   * The client secret of your Checkout Session. Applies to Checkout Sessions with `ui_mode: embedded` or `ui_mode: custom`. For `ui_mode: embedded`, the client secret is to be used when initializing Stripe.js embedded checkout.
 For `ui_mode: custom`, use the client secret with [initCheckout](https://stripe.com/docs/js/custom_checkout/init) on your front end.
   */
  clientSecret?: string;
  /**
   * Information about the customer collected within the Checkout Session.
   */
  collectedInformation?: PaymentPagesCheckoutSessionCollectedInformation;
  /**
   * Results of `consent_collection` for this session.
   */
  consent?: PaymentPagesCheckoutSessionConsent;
  /**
   * When set, provides configuration for the Checkout Session to gather active consent from customers.
   */
  consentCollection?: PaymentPagesCheckoutSessionConsentCollection;
  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;
  /**
   * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
   */
  currency?: string;
  /**
   * Currency conversion details for [Adaptive Pricing](https://docs.stripe.com/payments/checkout/adaptive-pricing) sessions created before 2025-03-31.
   */
  currencyConversion?: PaymentPagesCheckoutSessionCurrencyConversion;
  /**
   * Collect additional information from your customer using custom fields. Up to 3 fields are supported.
   */
  customFields: Array<PaymentPagesCheckoutSessionCustomFields>;
  /**
   * PaymentPagesCheckoutSessionCustomText
   *
   * 
   */
  customText: PaymentPagesCheckoutSessionCustomText;
  /**
   * The ID of the customer for this Session.
For Checkout Sessions in `subscription` mode or Checkout Sessions with `customer_creation` set as `always` in `payment` mode, Checkout
will create a new customer object based on information provided
during the payment flow unless an existing customer was provided when
the Session was created.
   */
  customer?: CustomerUnion;
  /**
   * Configure whether a Checkout Session creates a Customer when the Checkout Session completes.
   */
  customerCreation?: string;
  /**
   * The customer details including the customer's tax exempt status and the customer's tax IDs. Customer's address details are not present on Sessions in `setup` mode.
   */
  customerDetails?: PaymentPagesCheckoutSessionCustomerDetails;
  /**
   * If provided, this value will be used when the Customer object is created.
If not provided, customers will be asked to enter their email address.
Use this parameter to prefill customer data if you already have an email
on file. To access information about the customer once the payment flow is
complete, use the `customer` attribute.
   */
  customerEmail?: string;
  /**
   * List of coupons and promotion codes attached to the Checkout Session.
   */
  discounts?: Array<PaymentPagesCheckoutSessionDiscount>;
  /**
   * A list of the types of payment methods (e.g., `card`) that should be excluded from this Checkout Session. This should only be used when payment methods for this Checkout Session are managed through the [Stripe Dashboard](https://dashboard.stripe.com/settings/payment_methods).
   */
  excludedPaymentMethodTypes?: Array<string>;
  /**
   * The timestamp at which the Checkout Session will expire.
   */
  expiresAt: number;
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * ID of the invoice created by the Checkout Session, if it exists.
   */
  invoice?: InvoiceOrRef;
  /**
   * Details on the state of invoice creation for the Checkout Session.
   */
  invoiceCreation?: PaymentPagesCheckoutSessionInvoiceCreation;
  /**
   * PaymentPagesCheckoutSessionListLineItems
   *
   * The line items purchased by the customer.
   */
  lineItems?: LineItemsProperty;
  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
  /**
   * The IETF language tag of the locale Checkout is displayed in. If blank or `auto`, the browser's locale is used.
   */
  locale?: string;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
   */
  metadata?: MetadataProperty;
  /**
   * The mode of the Checkout Session.
   */
  mode: string;
  /**
   * PaymentPagesCheckoutSessionNameCollection
   *
   * 
   */
  nameCollection?: PaymentPagesCheckoutSessionNameCollection;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: string;
  /**
   * The optional items presented to the customer at checkout.
   */
  optionalItems?: Array<PaymentPagesCheckoutSessionOptionalItem>;
  /**
   * Where the user is coming from. This informs the optimizations that are applied to the session.
   */
  originContext?: string;
  /**
   * The ID of the PaymentIntent for Checkout Sessions in `payment` mode. You can't confirm or cancel the PaymentIntent for a Checkout Session. To cancel, [expire the Checkout Session](https://stripe.com/docs/api/checkout/sessions/expire) instead.
   */
  paymentIntent?: PaymentIntentOrRef;
  /**
   * The ID of the Payment Link that created this Session.
   */
  paymentLink?: PaymentLinkOrRef;
  /**
   * Configure whether a Checkout Session should collect a payment method. Defaults to `always`.
   */
  paymentMethodCollection?: string;
  /**
   * Information about the payment method configuration used for this Checkout session if using dynamic payment methods.
   */
  paymentMethodConfigurationDetails?: PaymentMethodConfigBizPaymentMethodConfigurationDetails;
  /**
   * Payment-method-specific configuration for the PaymentIntent or SetupIntent of this CheckoutSession.
   */
  paymentMethodOptions?: CheckoutSessionPaymentMethodOptions;
  /**
   * A list of the types of payment methods (e.g. card) this Checkout
Session is allowed to accept.
   */
  paymentMethodTypes: Array<string>;
  /**
   * The payment status of the Checkout Session, one of `paid`, `unpaid`, or `no_payment_required`.
You can use this value to decide when to fulfill your customer's order.
   */
  paymentStatus: string;
  /**
   * This property is used to set up permissions for various actions (e.g., update) on the CheckoutSession object.

For specific permissions, please refer to their dedicated subsections, such as `permissions.update_shipping_details`.
   */
  permissions?: PaymentPagesCheckoutSessionPermissions;
  /**
   * PaymentPagesCheckoutSessionPhoneNumberCollection
   *
   * 
   */
  phoneNumberCollection?: PaymentPagesCheckoutSessionPhoneNumberCollection;
  /**
   * PaymentFlowsPaymentIntentPresentmentDetails
   *
   * 
   */
  presentmentDetails?: PaymentFlowsPaymentIntentPresentmentDetails;
  /**
   * The ID of the original expired Checkout Session that triggered the recovery flow.
   */
  recoveredFrom?: string;
  /**
   * This parameter applies to `ui_mode: embedded`. Learn more about the [redirect behavior](https://stripe.com/docs/payments/checkout/custom-success-page?payment-ui=embedded-form) of embedded sessions. Defaults to `always`.
   */
  redirectOnCompletion?: string;
  /**
   * Applies to Checkout Sessions with `ui_mode: embedded` or `ui_mode: custom`. The URL to redirect your customer back to after they authenticate or cancel their payment on the payment method's app or site.
   */
  returnUrl?: string;
  /**
   * Controls saved payment method settings for the session. Only available in `payment` and `subscription` mode.
   */
  savedPaymentMethodOptions?: PaymentPagesCheckoutSessionSavedPaymentMethodOptions;
  /**
   * The ID of the SetupIntent for Checkout Sessions in `setup` mode. You can't confirm or cancel the SetupIntent for a Checkout Session. To cancel, [expire the Checkout Session](https://stripe.com/docs/api/checkout/sessions/expire) instead.
   */
  setupIntent?: SetupIntentOrRef;
  /**
   * When set, provides configuration for Checkout to collect a shipping address from a customer.
   */
  shippingAddressCollection?: PaymentPagesCheckoutSessionShippingAddressCollection;
  /**
   * The details of the customer cost of shipping, including the customer chosen ShippingRate.
   */
  shippingCost?: PaymentPagesCheckoutSessionShippingCost;
  /**
   * The shipping rate options applied to this Session.
   */
  shippingOptions: Array<PaymentPagesCheckoutSessionShippingOption>;
  /**
   * The status of the Checkout Session, one of `open`, `complete`, or `expired`.
   */
  status?: string;
  /**
   * Describes the type of transaction being performed by Checkout in order to customize
relevant text on the page, such as the submit button. `submit_type` can only be
specified on Checkout Sessions in `payment` mode. If blank or `auto`, `pay` is used.
   */
  submitType?: string;
  /**
   * The ID of the [Subscription](https://stripe.com/docs/api/subscriptions) for Checkout Sessions in `subscription` mode.
   */
  subscription?: SubscriptionOrRef;
  /**
   * The URL the customer will be directed to after the payment or
subscription creation is successful.
   */
  successUrl?: string;
  /**
   * PaymentPagesCheckoutSessionTaxIDCollection
   *
   * 
   */
  taxIdCollection?: PaymentPagesCheckoutSessionTaxIdCollection;
  /**
   * Tax and discount details for the computed total amount.
   */
  totalDetails?: PaymentPagesCheckoutSessionTotalDetails;
  /**
   * The UI mode of the Session. Defaults to `hosted`.
   */
  uiMode?: string;
  /**
   * The URL to the Checkout Session. Applies to Checkout Sessions with `ui_mode: hosted`. Redirect customers to this URL to take them to Checkout. If you’re using [Custom Domains](https://stripe.com/docs/payments/checkout/custom-domains), the URL will use your subdomain. Otherwise, it’ll use `checkout.stripe.com.`
This value is only present when the session is active.
   */
  url?: string;
  /**
   * Wallet-specific configuration for this Checkout Session.
   */
  walletOptions?: CheckoutSessionWalletOptions;
}

export const CheckoutSessionSchema: TypedSchema<CheckoutSession> = typed<CheckoutSession>(object({
  get adaptivePricing() { return optional(PaymentPagesCheckoutSessionAdaptivePricingSchema) },
  get afterExpiration() { return optional(PaymentPagesCheckoutSessionAfterExpirationSchema) },
  allowPromotionCodes: optional(boolean()),
  amountSubtotal: optional(number()),
  amountTotal: optional(number()),
  automaticTax: PaymentPagesCheckoutSessionAutomaticTaxSchema,
  billingAddressCollection: optional(string()),
  get brandingSettings() { return optional(PaymentPagesCheckoutSessionBrandingSettingsSchema) },
  cancelUrl: optional(string()),
  clientReferenceId: optional(string()),
  clientSecret: optional(string()),
  get collectedInformation() { return optional(PaymentPagesCheckoutSessionCollectedInformationSchema) },
  get consent() { return optional(PaymentPagesCheckoutSessionConsentSchema) },
  get consentCollection() { return optional(PaymentPagesCheckoutSessionConsentCollectionSchema) },
  created: number(),
  currency: optional(string()),
  get currencyConversion() { return optional(PaymentPagesCheckoutSessionCurrencyConversionSchema) },
  customFields: array(PaymentPagesCheckoutSessionCustomFieldsSchema),
  customText: PaymentPagesCheckoutSessionCustomTextSchema,
  get customer() { return optional(CustomerUnionSchema) },
  customerCreation: optional(string()),
  get customerDetails() { return optional(PaymentPagesCheckoutSessionCustomerDetailsSchema) },
  customerEmail: optional(string()),
  get discounts() { return optional(array(PaymentPagesCheckoutSessionDiscountSchema)) },
  excludedPaymentMethodTypes: optional(array(string())),
  expiresAt: number(),
  id: string(),
  get invoice() { return optional(InvoiceOrRefSchema) },
  get invoiceCreation() { return optional(PaymentPagesCheckoutSessionInvoiceCreationSchema) },
  get lineItems() { return optional(LineItemsPropertySchema) },
  livemode: boolean(),
  locale: optional(string()),
  get metadata() { return optional(MetadataPropertySchema) },
  mode: string(),
  get nameCollection() { return optional(PaymentPagesCheckoutSessionNameCollectionSchema) },
  object: string(),
  get optionalItems() { return optional(array(PaymentPagesCheckoutSessionOptionalItemSchema)) },
  originContext: optional(string()),
  get paymentIntent() { return optional(PaymentIntentOrRefSchema) },
  get paymentLink() { return optional(PaymentLinkOrRefSchema) },
  paymentMethodCollection: optional(string()),
  get paymentMethodConfigurationDetails() { return optional(PaymentMethodConfigBizPaymentMethodConfigurationDetailsSchema) },
  get paymentMethodOptions() { return optional(CheckoutSessionPaymentMethodOptionsSchema) },
  paymentMethodTypes: array(string()),
  paymentStatus: string(),
  get permissions() { return optional(PaymentPagesCheckoutSessionPermissionsSchema) },
  get phoneNumberCollection() { return optional(PaymentPagesCheckoutSessionPhoneNumberCollectionSchema) },
  get presentmentDetails() { return optional(PaymentFlowsPaymentIntentPresentmentDetailsSchema) },
  recoveredFrom: optional(string()),
  redirectOnCompletion: optional(string()),
  returnUrl: optional(string()),
  get savedPaymentMethodOptions() { return optional(PaymentPagesCheckoutSessionSavedPaymentMethodOptionsSchema) },
  get setupIntent() { return optional(SetupIntentOrRefSchema) },
  get shippingAddressCollection() { return optional(PaymentPagesCheckoutSessionShippingAddressCollectionSchema) },
  get shippingCost() { return optional(PaymentPagesCheckoutSessionShippingCostSchema) },
  shippingOptions: array(PaymentPagesCheckoutSessionShippingOptionSchema),
  status: optional(string()),
  submitType: optional(string()),
  get subscription() { return optional(SubscriptionOrRefSchema) },
  successUrl: optional(string()),
  get taxIdCollection() { return optional(PaymentPagesCheckoutSessionTaxIdCollectionSchema) },
  get totalDetails() { return optional(PaymentPagesCheckoutSessionTotalDetailsSchema) },
  uiMode: optional(string()),
  url: optional(string()),
  get walletOptions() { return optional(CheckoutSessionWalletOptionsSchema) },
}));