import { TypedSchema, array, boolean, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { ApplicationUnion } from './ApplicationUnion';
import { ApplicationUnionSchema } from './ApplicationUnion';
import type { LineItemsProperty } from './LineItemsProperty';
import { LineItemsPropertySchema } from './LineItemsProperty';
import type { MetadataProperty } from './MetadataProperty';
import { MetadataPropertySchema } from './MetadataProperty';
import type { OnBehalfOfOrRef } from './OnBehalfOfOrRef';
import { OnBehalfOfOrRefSchema } from './OnBehalfOfOrRef';
import type { PaymentLinksResourceAfterCompletion } from './PaymentLinksResourceAfterCompletion';
import { PaymentLinksResourceAfterCompletionSchema } from './PaymentLinksResourceAfterCompletion';
import type { PaymentLinksResourceAutomaticTax } from './PaymentLinksResourceAutomaticTax';
import { PaymentLinksResourceAutomaticTaxSchema } from './PaymentLinksResourceAutomaticTax';
import type { PaymentLinksResourceConsentCollection } from './PaymentLinksResourceConsentCollection';
import { PaymentLinksResourceConsentCollectionSchema } from './PaymentLinksResourceConsentCollection';
import type { PaymentLinksResourceCustomFields } from './PaymentLinksResourceCustomFields';
import { PaymentLinksResourceCustomFieldsSchema } from './PaymentLinksResourceCustomFields';
import type { PaymentLinksResourceCustomText } from './PaymentLinksResourceCustomText';
import { PaymentLinksResourceCustomTextSchema } from './PaymentLinksResourceCustomText';
import type { PaymentLinksResourceInvoiceCreation } from './PaymentLinksResourceInvoiceCreation';
import { PaymentLinksResourceInvoiceCreationSchema } from './PaymentLinksResourceInvoiceCreation';
import type { PaymentLinksResourceNameCollection } from './PaymentLinksResourceNameCollection';
import { PaymentLinksResourceNameCollectionSchema } from './PaymentLinksResourceNameCollection';
import type { PaymentLinksResourceOptionalItem } from './PaymentLinksResourceOptionalItem';
import { PaymentLinksResourceOptionalItemSchema } from './PaymentLinksResourceOptionalItem';
import type { PaymentLinksResourcePaymentIntentData } from './PaymentLinksResourcePaymentIntentData';
import { PaymentLinksResourcePaymentIntentDataSchema } from './PaymentLinksResourcePaymentIntentData';
import type { PaymentLinksResourcePhoneNumberCollection } from './PaymentLinksResourcePhoneNumberCollection';
import { PaymentLinksResourcePhoneNumberCollectionSchema } from './PaymentLinksResourcePhoneNumberCollection';
import type { PaymentLinksResourceRestrictions } from './PaymentLinksResourceRestrictions';
import { PaymentLinksResourceRestrictionsSchema } from './PaymentLinksResourceRestrictions';
import type { PaymentLinksResourceShippingAddressCollection } from './PaymentLinksResourceShippingAddressCollection';
import { PaymentLinksResourceShippingAddressCollectionSchema } from './PaymentLinksResourceShippingAddressCollection';
import type { PaymentLinksResourceShippingOption } from './PaymentLinksResourceShippingOption';
import { PaymentLinksResourceShippingOptionSchema } from './PaymentLinksResourceShippingOption';
import type { PaymentLinksResourceSubscriptionData } from './PaymentLinksResourceSubscriptionData';
import { PaymentLinksResourceSubscriptionDataSchema } from './PaymentLinksResourceSubscriptionData';
import type { PaymentLinksResourceTaxIdCollection } from './PaymentLinksResourceTaxIdCollection';
import { PaymentLinksResourceTaxIdCollectionSchema } from './PaymentLinksResourceTaxIdCollection';
import type { PaymentLinksResourceTransferData } from './PaymentLinksResourceTransferData';
import { PaymentLinksResourceTransferDataSchema } from './PaymentLinksResourceTransferData';
/**
 * PaymentLink
 *
 * A payment link is a shareable URL that will take your customers to a hosted payment page. A payment link can be shared and used multiple times.

When a customer opens a payment link it will open a new [checkout session](https://stripe.com/docs/api/checkout/sessions) to render the payment page. You can use [checkout session events](https://stripe.com/docs/api/events/types#event_types-checkout.session.completed) to track payments through payment links.

Related guide: [Payment Links API](https://stripe.com/docs/payment-links)
 */
export interface PaymentLink {
  /**
   * Whether the payment link's `url` is active. If `false`, customers visiting the URL will be shown a page saying that the link has been deactivated.
   */
  active: boolean;
  /**
   * PaymentLinksResourceAfterCompletion
   *
   * 
   */
  afterCompletion: PaymentLinksResourceAfterCompletion;
  /**
   * Whether user redeemable promotion codes are enabled.
   */
  allowPromotionCodes: boolean;
  /**
   * The ID of the Connect application that created the Payment Link.
   */
  application?: ApplicationUnion;
  /**
   * The amount of the application fee (if any) that will be requested to be applied to the payment and transferred to the application owner's Stripe account.
   */
  applicationFeeAmount?: number;
  /**
   * This represents the percentage of the subscription invoice total that will be transferred to the application owner's Stripe account.
   */
  applicationFeePercent?: number;
  /**
   * PaymentLinksResourceAutomaticTax
   *
   * 
   */
  automaticTax: PaymentLinksResourceAutomaticTax;
  /**
   * Configuration for collecting the customer's billing address. Defaults to `auto`.
   */
  billingAddressCollection: string;
  /**
   * When set, provides configuration to gather active consent from customers.
   */
  consentCollection?: PaymentLinksResourceConsentCollection;
  /**
   * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
   */
  currency: string;
  /**
   * Collect additional information from your customer using custom fields. Up to 3 fields are supported.
   */
  customFields: Array<PaymentLinksResourceCustomFields>;
  /**
   * PaymentLinksResourceCustomText
   *
   * 
   */
  customText: PaymentLinksResourceCustomText;
  /**
   * Configuration for Customer creation during checkout.
   */
  customerCreation: string;
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * The custom message to be displayed to a customer when a payment link is no longer active.
   */
  inactiveMessage?: string;
  /**
   * Configuration for creating invoice for payment mode payment links.
   */
  invoiceCreation?: PaymentLinksResourceInvoiceCreation;
  /**
   * PaymentLinksResourceListLineItems
   *
   * The line items representing what is being sold.
   */
  lineItems?: LineItemsProperty;
  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
   */
  metadata: MetadataProperty;
  /**
   * PaymentLinksResourceNameCollection
   *
   * 
   */
  nameCollection?: PaymentLinksResourceNameCollection;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: string;
  /**
   * The account on behalf of which to charge. See the [Connect documentation](https://support.stripe.com/questions/sending-invoices-on-behalf-of-connected-accounts) for details.
   */
  onBehalfOf?: OnBehalfOfOrRef;
  /**
   * The optional items presented to the customer at checkout.
   */
  optionalItems?: Array<PaymentLinksResourceOptionalItem>;
  /**
   * Indicates the parameters to be passed to PaymentIntent creation during checkout.
   */
  paymentIntentData?: PaymentLinksResourcePaymentIntentData;
  /**
   * Configuration for collecting a payment method during checkout. Defaults to `always`.
   */
  paymentMethodCollection: string;
  /**
   * The list of payment method types that customers can use. When `null`, Stripe will dynamically show relevant payment methods you've enabled in your [payment method settings](https://dashboard.stripe.com/settings/payment_methods).
   */
  paymentMethodTypes?: Array<string>;
  /**
   * PaymentLinksResourcePhoneNumberCollection
   *
   * 
   */
  phoneNumberCollection: PaymentLinksResourcePhoneNumberCollection;
  /**
   * Settings that restrict the usage of a payment link.
   */
  restrictions?: PaymentLinksResourceRestrictions;
  /**
   * Configuration for collecting the customer's shipping address.
   */
  shippingAddressCollection?: PaymentLinksResourceShippingAddressCollection;
  /**
   * The shipping rate options applied to the session.
   */
  shippingOptions: Array<PaymentLinksResourceShippingOption>;
  /**
   * Indicates the type of transaction being performed which customizes relevant text on the page, such as the submit button.
   */
  submitType: string;
  /**
   * When creating a subscription, the specified configuration data will be used. There must be at least one line item with a recurring price to use `subscription_data`.
   */
  subscriptionData?: PaymentLinksResourceSubscriptionData;
  /**
   * PaymentLinksResourceTaxIdCollection
   *
   * 
   */
  taxIdCollection: PaymentLinksResourceTaxIdCollection;
  /**
   * The account (if any) the payments will be attributed to for tax reporting, and where funds from each payment will be transferred to.
   */
  transferData?: PaymentLinksResourceTransferData;
  /**
   * The public URL that can be shared with customers.
   */
  url: string;
}

export const PaymentLinkSchema: TypedSchema<PaymentLink> = typed<PaymentLink>(object({
  active: boolean(),
  afterCompletion: PaymentLinksResourceAfterCompletionSchema,
  allowPromotionCodes: boolean(),
  get application() { return optional(ApplicationUnionSchema) },
  applicationFeeAmount: optional(number()),
  applicationFeePercent: optional(number()),
  automaticTax: PaymentLinksResourceAutomaticTaxSchema,
  billingAddressCollection: string(),
  get consentCollection() { return optional(PaymentLinksResourceConsentCollectionSchema) },
  currency: string(),
  customFields: array(PaymentLinksResourceCustomFieldsSchema),
  customText: PaymentLinksResourceCustomTextSchema,
  customerCreation: string(),
  id: string(),
  inactiveMessage: optional(string()),
  get invoiceCreation() { return optional(PaymentLinksResourceInvoiceCreationSchema) },
  get lineItems() { return optional(LineItemsPropertySchema) },
  livemode: boolean(),
  metadata: MetadataPropertySchema,
  get nameCollection() { return optional(PaymentLinksResourceNameCollectionSchema) },
  object: string(),
  get onBehalfOf() { return optional(OnBehalfOfOrRefSchema) },
  get optionalItems() { return optional(array(PaymentLinksResourceOptionalItemSchema)) },
  get paymentIntentData() { return optional(PaymentLinksResourcePaymentIntentDataSchema) },
  paymentMethodCollection: string(),
  paymentMethodTypes: optional(array(string())),
  phoneNumberCollection: PaymentLinksResourcePhoneNumberCollectionSchema,
  get restrictions() { return optional(PaymentLinksResourceRestrictionsSchema) },
  get shippingAddressCollection() { return optional(PaymentLinksResourceShippingAddressCollectionSchema) },
  shippingOptions: array(PaymentLinksResourceShippingOptionSchema),
  submitType: string(),
  get subscriptionData() { return optional(PaymentLinksResourceSubscriptionDataSchema) },
  taxIdCollection: PaymentLinksResourceTaxIdCollectionSchema,
  get transferData() { return optional(PaymentLinksResourceTransferDataSchema) },
  url: string(),
}));