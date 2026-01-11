import { TypedSchema, array, boolean, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { DefaultPostPaymentIntentsRequestRadarOptions } from './DefaultPostPaymentIntentsRequestRadarOptions';
import { DefaultPostPaymentIntentsRequestRadarOptionsSchema } from './DefaultPostPaymentIntentsRequestRadarOptions';
import type { PostPaymentIntentsIntentConfirmRequestMandateData } from './PostPaymentIntentsIntentConfirmRequestMandateData';
import { PostPaymentIntentsIntentConfirmRequestMandateDataSchema } from './PostPaymentIntentsIntentConfirmRequestMandateData';
import type { PostPaymentIntentsIntentConfirmRequestOffSession } from './PostPaymentIntentsIntentConfirmRequestOffSession';
import { PostPaymentIntentsIntentConfirmRequestOffSessionSchema } from './PostPaymentIntentsIntentConfirmRequestOffSession';
import type { PostPaymentIntentsIntentRequestAmountDetails } from './PostPaymentIntentsIntentRequestAmountDetails';
import { PostPaymentIntentsIntentRequestAmountDetailsSchema } from './PostPaymentIntentsIntentRequestAmountDetails';
import type { PostPaymentIntentsIntentRequestExcludedPaymentMethodTypes } from './PostPaymentIntentsIntentRequestExcludedPaymentMethodTypes';
import { PostPaymentIntentsIntentRequestExcludedPaymentMethodTypesSchema } from './PostPaymentIntentsIntentRequestExcludedPaymentMethodTypes';
import type { PostPaymentIntentsIntentRequestPaymentDetails } from './PostPaymentIntentsIntentRequestPaymentDetails';
import { PostPaymentIntentsIntentRequestPaymentDetailsSchema } from './PostPaymentIntentsIntentRequestPaymentDetails';
import type { PostPaymentIntentsIntentRequestReceiptEmail } from './PostPaymentIntentsIntentRequestReceiptEmail';
import { PostPaymentIntentsIntentRequestReceiptEmailSchema } from './PostPaymentIntentsIntentRequestReceiptEmail';
import type { PostPaymentIntentsIntentRequestShipping } from './PostPaymentIntentsIntentRequestShipping';
import { PostPaymentIntentsIntentRequestShippingSchema } from './PostPaymentIntentsIntentRequestShipping';
import type { PostPaymentIntentsRequestHooks } from './PostPaymentIntentsRequestHooks';
import { PostPaymentIntentsRequestHooksSchema } from './PostPaymentIntentsRequestHooks';
import type { PostPaymentIntentsRequestPaymentMethodData } from './PostPaymentIntentsRequestPaymentMethodData';
import { PostPaymentIntentsRequestPaymentMethodDataSchema } from './PostPaymentIntentsRequestPaymentMethodData';
import type { PostPaymentIntentsRequestPaymentMethodOptions } from './PostPaymentIntentsRequestPaymentMethodOptions';
import { PostPaymentIntentsRequestPaymentMethodOptionsSchema } from './PostPaymentIntentsRequestPaymentMethodOptions';
export interface PostPaymentIntentsIntentConfirmRequest {
  /**
   * Provides industry-specific information about the amount.
   */
  amountDetails?: PostPaymentIntentsIntentRequestAmountDetails;
  /**
   * Controls when the funds will be captured from the customer's account.
   */
  captureMethod?: string;
  /**
   * The client secret of the PaymentIntent.
   */
  clientSecret?: string;
  /**
   * ID of the ConfirmationToken used to confirm this PaymentIntent.

If the provided ConfirmationToken contains properties that are also being provided in this request, such as `payment_method`, then the values in this request will take precedence.
   */
  confirmationToken?: string;
  /**
   * Set to `true` to fail the payment attempt if the PaymentIntent transitions into `requires_action`. This parameter is intended for simpler integrations that do not handle customer actions, like [saving cards without authentication](https://stripe.com/docs/payments/save-card-without-authentication).
   */
  errorOnRequiresAction?: boolean;
  /**
   * The list of payment method types to exclude from use with this payment.
   */
  excludedPaymentMethodTypes?: PostPaymentIntentsIntentRequestExcludedPaymentMethodTypes;
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
   * ID of the mandate that's used for this payment.
   */
  mandate?: string;
  mandateData?: PostPaymentIntentsIntentConfirmRequestMandateData;
  /**
   * Set to `true` to indicate that the customer isn't in your checkout flow during this payment attempt and can't authenticate. Use this parameter in scenarios where you collect card details and [charge them later](https://stripe.com/docs/payments/cards/charging-saved-cards).
   */
  offSession?: PostPaymentIntentsIntentConfirmRequestOffSession;
  /**
   * Provides industry-specific information about the charge.
   */
  paymentDetails?: PostPaymentIntentsIntentRequestPaymentDetails;
  /**
   * ID of the payment method (a PaymentMethod, Card, or [compatible Source](https://stripe.com/docs/payments/payment-methods/transitioning#compatibility) object) to attach to this PaymentIntent.
If the payment method is attached to a Customer, it must match the [customer](https://stripe.com/docs/api#create_payment_intent-customer) that is set on this PaymentIntent.
   */
  paymentMethod?: string;
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
   * The list of payment method types (for example, a card) that this PaymentIntent can use. Use `automatic_payment_methods` to manage payment methods from the [Stripe Dashboard](https://dashboard.stripe.com/settings/payment_methods). A list of valid payment method types can be found [here](https://docs.stripe.com/api/payment_methods/object#payment_method_object-type).
   */
  paymentMethodTypes?: Array<string>;
  /**
   * radar_options_with_peval_options
   *
   * Options to configure Radar. Learn more about [Radar Sessions](https://stripe.com/docs/radar/radar-session).
   */
  radarOptions?: DefaultPostPaymentIntentsRequestRadarOptions;
  /**
   * Email address that the receipt for the resulting payment will be sent to. If `receipt_email` is specified for a payment in live mode, a receipt will be sent regardless of your [email settings](https://dashboard.stripe.com/account/emails).
   */
  receiptEmail?: PostPaymentIntentsIntentRequestReceiptEmail;
  /**
   * The URL to redirect your customer back to after they authenticate or cancel their payment on the payment method's app or site.
If you'd prefer to redirect to a mobile application, you can alternatively supply an application URI scheme.
This parameter is only used for cards and other redirect-based payment methods.
   */
  returnUrl?: string;
  /**
   * Indicates that you intend to make future payments with this PaymentIntent's payment method.

If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](/api/payment_methods/attach) the payment method to a Customer after the transaction completes.

If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.

When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](/strong-customer-authentication).

If you've already set `setup_future_usage` and you're performing a request using a publishable key, you can only update the value from `on_session` to `off_session`.
   */
  setupFutureUsage?: string;
  /**
   * Shipping information for this PaymentIntent.
   */
  shipping?: PostPaymentIntentsIntentRequestShipping;
  /**
   * Set to `true` when confirming server-side and using Stripe.js, iOS, or Android client-side SDKs to handle the next actions.
   */
  useStripeSdk?: boolean;
}

export const PostPaymentIntentsIntentConfirmRequestSchema: TypedSchema<PostPaymentIntentsIntentConfirmRequest> = typed<PostPaymentIntentsIntentConfirmRequest>(object({
  get amountDetails() { return optional(PostPaymentIntentsIntentRequestAmountDetailsSchema) },
  captureMethod: optional(string()),
  clientSecret: optional(string()),
  confirmationToken: optional(string()),
  errorOnRequiresAction: optional(boolean()),
  get excludedPaymentMethodTypes() { return optional(PostPaymentIntentsIntentRequestExcludedPaymentMethodTypesSchema) },
  expand: optional(array(string())),
  get hooks() { return optional(PostPaymentIntentsRequestHooksSchema) },
  mandate: optional(string()),
  get mandateData() { return optional(PostPaymentIntentsIntentConfirmRequestMandateDataSchema) },
  get offSession() { return optional(PostPaymentIntentsIntentConfirmRequestOffSessionSchema) },
  get paymentDetails() { return optional(PostPaymentIntentsIntentRequestPaymentDetailsSchema) },
  paymentMethod: optional(string()),
  get paymentMethodData() { return optional(PostPaymentIntentsRequestPaymentMethodDataSchema) },
  get paymentMethodOptions() { return optional(PostPaymentIntentsRequestPaymentMethodOptionsSchema) },
  paymentMethodTypes: optional(array(string())),
  get radarOptions() { return optional(DefaultPostPaymentIntentsRequestRadarOptionsSchema) },
  get receiptEmail() { return optional(PostPaymentIntentsIntentRequestReceiptEmailSchema) },
  returnUrl: optional(string()),
  setupFutureUsage: optional(string()),
  get shipping() { return optional(PostPaymentIntentsIntentRequestShippingSchema) },
  useStripeSdk: optional(boolean()),
}));