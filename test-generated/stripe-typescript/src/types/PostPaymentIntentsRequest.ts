import { TypedSchema, array, boolean, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { DefaultPostPaymentIntentsRequestRadarOptions } from './DefaultPostPaymentIntentsRequestRadarOptions';
import { DefaultPostPaymentIntentsRequestRadarOptionsSchema } from './DefaultPostPaymentIntentsRequestRadarOptions';
import type { DefaultPostPaymentIntentsRequestShipping } from './DefaultPostPaymentIntentsRequestShipping';
import { DefaultPostPaymentIntentsRequestShippingSchema } from './DefaultPostPaymentIntentsRequestShipping';
import type { PostAccountsAccountBankAccountsRequestMetadata } from './PostAccountsAccountBankAccountsRequestMetadata';
import { PostAccountsAccountBankAccountsRequestMetadataSchema } from './PostAccountsAccountBankAccountsRequestMetadata';
import type { PostPaymentIntentsRequestAmountDetails } from './PostPaymentIntentsRequestAmountDetails';
import { PostPaymentIntentsRequestAmountDetailsSchema } from './PostPaymentIntentsRequestAmountDetails';
import type { PostPaymentIntentsRequestAutomaticPaymentMethods } from './PostPaymentIntentsRequestAutomaticPaymentMethods';
import { PostPaymentIntentsRequestAutomaticPaymentMethodsSchema } from './PostPaymentIntentsRequestAutomaticPaymentMethods';
import type { PostPaymentIntentsRequestHooks } from './PostPaymentIntentsRequestHooks';
import { PostPaymentIntentsRequestHooksSchema } from './PostPaymentIntentsRequestHooks';
import type { PostPaymentIntentsRequestMandateData } from './PostPaymentIntentsRequestMandateData';
import { PostPaymentIntentsRequestMandateDataSchema } from './PostPaymentIntentsRequestMandateData';
import type { PostPaymentIntentsRequestOffSession } from './PostPaymentIntentsRequestOffSession';
import { PostPaymentIntentsRequestOffSessionSchema } from './PostPaymentIntentsRequestOffSession';
import type { PostPaymentIntentsRequestPaymentDetails } from './PostPaymentIntentsRequestPaymentDetails';
import { PostPaymentIntentsRequestPaymentDetailsSchema } from './PostPaymentIntentsRequestPaymentDetails';
import type { PostPaymentIntentsRequestPaymentMethodData } from './PostPaymentIntentsRequestPaymentMethodData';
import { PostPaymentIntentsRequestPaymentMethodDataSchema } from './PostPaymentIntentsRequestPaymentMethodData';
import type { PostPaymentIntentsRequestPaymentMethodOptions } from './PostPaymentIntentsRequestPaymentMethodOptions';
import { PostPaymentIntentsRequestPaymentMethodOptionsSchema } from './PostPaymentIntentsRequestPaymentMethodOptions';
import type { PostPaymentIntentsRequestTransferData } from './PostPaymentIntentsRequestTransferData';
import { PostPaymentIntentsRequestTransferDataSchema } from './PostPaymentIntentsRequestTransferData';
export interface PostPaymentIntentsRequest {
  /**
   * Amount intended to be collected by this PaymentIntent. A positive integer representing how much to charge in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal) (e.g., 100 cents to charge $1.00 or 100 to charge ¥100, a zero-decimal currency). The minimum amount is $0.50 US or [equivalent in charge currency](https://stripe.com/docs/currencies#minimum-and-maximum-charge-amounts). The amount value supports up to eight digits (e.g., a value of 99999999 for a USD charge of $999,999.99).
   */
  amount: number;
  /**
   * amount_details_param
   *
   * Provides industry-specific information about the amount.
   */
  amountDetails?: PostPaymentIntentsRequestAmountDetails;
  /**
   * The amount of the application fee (if any) that will be requested to be applied to the payment and transferred to the application owner's Stripe account. The amount of the application fee collected will be capped at the total amount captured. For more information, see the PaymentIntents [use case for connected accounts](https://stripe.com/docs/payments/connected-accounts).
   */
  applicationFeeAmount?: number;
  /**
   * automatic_payment_methods_param
   *
   * When you enable this parameter, this PaymentIntent accepts payment methods that you enable in the Dashboard and that are compatible with this PaymentIntent's other parameters.
   */
  automaticPaymentMethods?: PostPaymentIntentsRequestAutomaticPaymentMethods;
  /**
   * Controls when the funds will be captured from the customer's account.
   */
  captureMethod?: string;
  /**
   * Set to `true` to attempt to [confirm this PaymentIntent](https://stripe.com/docs/api/payment_intents/confirm) immediately. This parameter defaults to `false`. When creating and confirming a PaymentIntent at the same time, you can also provide the parameters available in the [Confirm API](https://stripe.com/docs/api/payment_intents/confirm).
   */
  confirm?: boolean;
  /**
   * Describes whether we can confirm this PaymentIntent automatically, or if it requires customer action to confirm the payment.
   */
  confirmationMethod?: string;
  /**
   * ID of the ConfirmationToken used to confirm this PaymentIntent.

If the provided ConfirmationToken contains properties that are also being provided in this request, such as `payment_method`, then the values in this request will take precedence.
   */
  confirmationToken?: string;
  /**
   * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
   */
  currency: string;
  /**
   * ID of the Customer this PaymentIntent belongs to, if one exists.

Payment methods attached to other Customers cannot be used with this PaymentIntent.

If [setup_future_usage](https://stripe.com/docs/api#payment_intent_object-setup_future_usage) is set and this PaymentIntent's payment method is not `card_present`, then the payment method attaches to the Customer after the PaymentIntent has been confirmed and any required actions from the user are complete. If the payment method is `card_present` and isn't a digital wallet, then a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card is created and attached to the Customer instead.
   */
  customer?: string;
  /**
   * An arbitrary string attached to the object. Often useful for displaying to users.
   */
  description?: string;
  /**
   * Set to `true` to fail the payment attempt if the PaymentIntent transitions into `requires_action`. Use this parameter for simpler integrations that don't handle customer actions, such as [saving cards without authentication](https://stripe.com/docs/payments/save-card-without-authentication). This parameter can only be used with [`confirm=true`](https://stripe.com/docs/api/payment_intents/create#create_payment_intent-confirm).
   */
  errorOnRequiresAction?: boolean;
  /**
   * The list of payment method types to exclude from use with this payment.
   */
  excludedPaymentMethodTypes?: Array<string>;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
  /**
   * async_workflows_param
   *
   * Automations to be run during the PaymentIntent lifecycle
   */
  hooks?: PostPaymentIntentsRequestHooks;
  /**
   * ID of the mandate that's used for this payment. This parameter can only be used with [`confirm=true`](https://stripe.com/docs/api/payment_intents/create#create_payment_intent-confirm).
   */
  mandate?: string;
  /**
   * This hash contains details about the Mandate to create. This parameter can only be used with [`confirm=true`](https://stripe.com/docs/api/payment_intents/create#create_payment_intent-confirm).
   */
  mandateData?: PostPaymentIntentsRequestMandateData;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: PostAccountsAccountBankAccountsRequestMetadata;
  /**
   * Set to `true` to indicate that the customer isn't in your checkout flow during this payment attempt and can't authenticate. Use this parameter in scenarios where you collect card details and [charge them later](https://stripe.com/docs/payments/cards/charging-saved-cards). This parameter can only be used with [`confirm=true`](https://stripe.com/docs/api/payment_intents/create#create_payment_intent-confirm).
   */
  offSession?: PostPaymentIntentsRequestOffSession;
  /**
   * The Stripe account ID that these funds are intended for. Learn more about the [use case for connected accounts](https://stripe.com/docs/payments/connected-accounts).
   */
  onBehalfOf?: string;
  /**
   * payment_details
   *
   * Provides industry-specific information about the charge.
   */
  paymentDetails?: PostPaymentIntentsRequestPaymentDetails;
  /**
   * ID of the payment method (a PaymentMethod, Card, or [compatible Source](https://stripe.com/docs/payments/payment-methods/transitioning#compatibility) object) to attach to this PaymentIntent.

If you omit this parameter with `confirm=true`, `customer.default_source` attaches as this PaymentIntent's payment instrument to improve migration for users of the Charges API. We recommend that you explicitly provide the `payment_method` moving forward.
If the payment method is attached to a Customer, you must also provide the ID of that Customer as the [customer](https://stripe.com/docs/api#create_payment_intent-customer) parameter of this PaymentIntent.
   */
  paymentMethod?: string;
  /**
   * The ID of the [payment method configuration](https://stripe.com/docs/api/payment_method_configurations) to use with this PaymentIntent.
   */
  paymentMethodConfiguration?: string;
  /**
   * payment_method_data_params
   *
   * If provided, this hash will be used to create a PaymentMethod. The new PaymentMethod will appear
in the [payment_method](https://stripe.com/docs/api/payment_intents/object#payment_intent_object-payment_method)
property on the PaymentIntent.
   */
  paymentMethodData?: PostPaymentIntentsRequestPaymentMethodData;
  /**
   * payment_method_options_param
   *
   * Payment method-specific configuration for this PaymentIntent.
   */
  paymentMethodOptions?: PostPaymentIntentsRequestPaymentMethodOptions;
  /**
   * The list of payment method types (for example, a card) that this PaymentIntent can use. If you don't provide this, Stripe will dynamically show relevant payment methods from your [payment method settings](https://dashboard.stripe.com/settings/payment_methods). A list of valid payment method types can be found [here](https://docs.stripe.com/api/payment_methods/object#payment_method_object-type).
   */
  paymentMethodTypes?: Array<string>;
  /**
   * radar_options_with_peval_options
   *
   * Options to configure Radar. Learn more about [Radar Sessions](https://stripe.com/docs/radar/radar-session).
   */
  radarOptions?: DefaultPostPaymentIntentsRequestRadarOptions;
  /**
   * Email address to send the receipt to. If you specify `receipt_email` for a payment in live mode, you send a receipt regardless of your [email settings](https://dashboard.stripe.com/account/emails).
   */
  receiptEmail?: string;
  /**
   * The URL to redirect your customer back to after they authenticate or cancel their payment on the payment method's app or site. If you'd prefer to redirect to a mobile application, you can alternatively supply an application URI scheme. This parameter can only be used with [`confirm=true`](https://stripe.com/docs/api/payment_intents/create#create_payment_intent-confirm).
   */
  returnUrl?: string;
  /**
   * Indicates that you intend to make future payments with this PaymentIntent's payment method.

If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](/api/payment_methods/attach) the payment method to a Customer after the transaction completes.

If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.

When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](/strong-customer-authentication).
   */
  setupFutureUsage?: string;
  /**
   * optional_fields_shipping
   *
   * Shipping information for this PaymentIntent.
   */
  shipping?: DefaultPostPaymentIntentsRequestShipping;
  /**
   * Text that appears on the customer's statement as the statement descriptor for a non-card charge. This value overrides the account's default statement descriptor. For information about requirements, including the 22-character limit, see [the Statement Descriptor docs](https://docs.stripe.com/get-started/account/statement-descriptors).

Setting this value for a card charge returns an error. For card charges, set the [statement_descriptor_suffix](https://docs.stripe.com/get-started/account/statement-descriptors#dynamic) instead.
   */
  statementDescriptor?: string;
  /**
   * Provides information about a card charge. Concatenated to the account's [statement descriptor prefix](https://docs.stripe.com/get-started/account/statement-descriptors#static) to form the complete statement descriptor that appears on the customer's statement.
   */
  statementDescriptorSuffix?: string;
  /**
   * transfer_data_creation_params
   *
   * The parameters that you can use to automatically create a Transfer.
Learn more about the [use case for connected accounts](https://stripe.com/docs/payments/connected-accounts).
   */
  transferData?: PostPaymentIntentsRequestTransferData;
  /**
   * A string that identifies the resulting payment as part of a group. Learn more about the [use case for connected accounts](https://stripe.com/docs/connect/separate-charges-and-transfers).
   */
  transferGroup?: string;
  /**
   * Set to `true` when confirming server-side and using Stripe.js, iOS, or Android client-side SDKs to handle the next actions.
   */
  useStripeSdk?: boolean;
}

export const PostPaymentIntentsRequestSchema: TypedSchema<PostPaymentIntentsRequest> = typed<PostPaymentIntentsRequest>(object({
  amount: number(),
  get amountDetails() { return optional(PostPaymentIntentsRequestAmountDetailsSchema) },
  applicationFeeAmount: optional(number()),
  get automaticPaymentMethods() { return optional(PostPaymentIntentsRequestAutomaticPaymentMethodsSchema) },
  captureMethod: optional(string()),
  confirm: optional(boolean()),
  confirmationMethod: optional(string()),
  confirmationToken: optional(string()),
  currency: string(),
  customer: optional(string()),
  description: optional(string()),
  errorOnRequiresAction: optional(boolean()),
  excludedPaymentMethodTypes: optional(array(string())),
  expand: optional(array(string())),
  get hooks() { return optional(PostPaymentIntentsRequestHooksSchema) },
  mandate: optional(string()),
  get mandateData() { return optional(PostPaymentIntentsRequestMandateDataSchema) },
  get metadata() { return optional(PostAccountsAccountBankAccountsRequestMetadataSchema) },
  get offSession() { return optional(PostPaymentIntentsRequestOffSessionSchema) },
  onBehalfOf: optional(string()),
  get paymentDetails() { return optional(PostPaymentIntentsRequestPaymentDetailsSchema) },
  paymentMethod: optional(string()),
  paymentMethodConfiguration: optional(string()),
  get paymentMethodData() { return optional(PostPaymentIntentsRequestPaymentMethodDataSchema) },
  get paymentMethodOptions() { return optional(PostPaymentIntentsRequestPaymentMethodOptionsSchema) },
  paymentMethodTypes: optional(array(string())),
  get radarOptions() { return optional(DefaultPostPaymentIntentsRequestRadarOptionsSchema) },
  receiptEmail: optional(string()),
  returnUrl: optional(string()),
  setupFutureUsage: optional(string()),
  get shipping() { return optional(DefaultPostPaymentIntentsRequestShippingSchema) },
  statementDescriptor: optional(string()),
  statementDescriptorSuffix: optional(string()),
  get transferData() { return optional(PostPaymentIntentsRequestTransferDataSchema) },
  transferGroup: optional(string()),
  useStripeSdk: optional(boolean()),
}));