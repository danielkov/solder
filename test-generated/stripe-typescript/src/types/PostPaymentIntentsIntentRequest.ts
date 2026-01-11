import { TypedSchema, array, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { DefaultPostAccountsRequestMetadata } from './DefaultPostAccountsRequestMetadata';
import { DefaultPostAccountsRequestMetadataSchema } from './DefaultPostAccountsRequestMetadata';
import type { PostPaymentIntentsIntentRequestAmountDetails } from './PostPaymentIntentsIntentRequestAmountDetails';
import { PostPaymentIntentsIntentRequestAmountDetailsSchema } from './PostPaymentIntentsIntentRequestAmountDetails';
import type { PostPaymentIntentsIntentRequestApplicationFeeAmount } from './PostPaymentIntentsIntentRequestApplicationFeeAmount';
import { PostPaymentIntentsIntentRequestApplicationFeeAmountSchema } from './PostPaymentIntentsIntentRequestApplicationFeeAmount';
import type { PostPaymentIntentsIntentRequestExcludedPaymentMethodTypes } from './PostPaymentIntentsIntentRequestExcludedPaymentMethodTypes';
import { PostPaymentIntentsIntentRequestExcludedPaymentMethodTypesSchema } from './PostPaymentIntentsIntentRequestExcludedPaymentMethodTypes';
import type { PostPaymentIntentsIntentRequestPaymentDetails } from './PostPaymentIntentsIntentRequestPaymentDetails';
import { PostPaymentIntentsIntentRequestPaymentDetailsSchema } from './PostPaymentIntentsIntentRequestPaymentDetails';
import type { PostPaymentIntentsIntentRequestPaymentMethodOptions } from './PostPaymentIntentsIntentRequestPaymentMethodOptions';
import { PostPaymentIntentsIntentRequestPaymentMethodOptionsSchema } from './PostPaymentIntentsIntentRequestPaymentMethodOptions';
import type { PostPaymentIntentsIntentRequestReceiptEmail } from './PostPaymentIntentsIntentRequestReceiptEmail';
import { PostPaymentIntentsIntentRequestReceiptEmailSchema } from './PostPaymentIntentsIntentRequestReceiptEmail';
import type { PostPaymentIntentsIntentRequestShipping } from './PostPaymentIntentsIntentRequestShipping';
import { PostPaymentIntentsIntentRequestShippingSchema } from './PostPaymentIntentsIntentRequestShipping';
import type { PostPaymentIntentsIntentRequestTransferData } from './PostPaymentIntentsIntentRequestTransferData';
import { PostPaymentIntentsIntentRequestTransferDataSchema } from './PostPaymentIntentsIntentRequestTransferData';
import type { PostPaymentIntentsRequestHooks } from './PostPaymentIntentsRequestHooks';
import { PostPaymentIntentsRequestHooksSchema } from './PostPaymentIntentsRequestHooks';
import type { PostPaymentIntentsRequestPaymentMethodData } from './PostPaymentIntentsRequestPaymentMethodData';
import { PostPaymentIntentsRequestPaymentMethodDataSchema } from './PostPaymentIntentsRequestPaymentMethodData';
export interface PostPaymentIntentsIntentRequest {
  /**
   * Amount intended to be collected by this PaymentIntent. A positive integer representing how much to charge in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal) (e.g., 100 cents to charge $1.00 or 100 to charge ¥100, a zero-decimal currency). The minimum amount is $0.50 US or [equivalent in charge currency](https://stripe.com/docs/currencies#minimum-and-maximum-charge-amounts). The amount value supports up to eight digits (e.g., a value of 99999999 for a USD charge of $999,999.99).
   */
  amount?: number;
  /**
   * Provides industry-specific information about the amount.
   */
  amountDetails?: PostPaymentIntentsIntentRequestAmountDetails;
  /**
   * The amount of the application fee (if any) that will be requested to be applied to the payment and transferred to the application owner's Stripe account. The amount of the application fee collected will be capped at the total amount captured. For more information, see the PaymentIntents [use case for connected accounts](https://stripe.com/docs/payments/connected-accounts).
   */
  applicationFeeAmount?: PostPaymentIntentsIntentRequestApplicationFeeAmount;
  /**
   * Controls when the funds will be captured from the customer's account.
   */
  captureMethod?: string;
  /**
   * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
   */
  currency?: string;
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
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: DefaultPostAccountsRequestMetadata;
  /**
   * Provides industry-specific information about the charge.
   */
  paymentDetails?: PostPaymentIntentsIntentRequestPaymentDetails;
  /**
   * ID of the payment method (a PaymentMethod, Card, or [compatible Source](https://stripe.com/docs/payments/payment-methods/transitioning#compatibility) object) to attach to this PaymentIntent. To unset this field to null, pass in an empty string.
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
   * Payment-method-specific configuration for this PaymentIntent.
   */
  paymentMethodOptions?: PostPaymentIntentsIntentRequestPaymentMethodOptions;
  /**
   * The list of payment method types (for example, card) that this PaymentIntent can use. Use `automatic_payment_methods` to manage payment methods from the [Stripe Dashboard](https://dashboard.stripe.com/settings/payment_methods). A list of valid payment method types can be found [here](https://docs.stripe.com/api/payment_methods/object#payment_method_object-type).
   */
  paymentMethodTypes?: Array<string>;
  /**
   * Email address that the receipt for the resulting payment will be sent to. If `receipt_email` is specified for a payment in live mode, a receipt will be sent regardless of your [email settings](https://dashboard.stripe.com/account/emails).
   */
  receiptEmail?: PostPaymentIntentsIntentRequestReceiptEmail;
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
   * Text that appears on the customer's statement as the statement descriptor for a non-card charge. This value overrides the account's default statement descriptor. For information about requirements, including the 22-character limit, see [the Statement Descriptor docs](https://docs.stripe.com/get-started/account/statement-descriptors).

Setting this value for a card charge returns an error. For card charges, set the [statement_descriptor_suffix](https://docs.stripe.com/get-started/account/statement-descriptors#dynamic) instead.
   */
  statementDescriptor?: string;
  /**
   * Provides information about a card charge. Concatenated to the account's [statement descriptor prefix](https://docs.stripe.com/get-started/account/statement-descriptors#static) to form the complete statement descriptor that appears on the customer's statement.
   */
  statementDescriptorSuffix?: string;
  /**
   * transfer_data_update_params
   *
   * Use this parameter to automatically create a Transfer when the payment succeeds. Learn more about the [use case for connected accounts](https://stripe.com/docs/payments/connected-accounts).
   */
  transferData?: PostPaymentIntentsIntentRequestTransferData;
  /**
   * A string that identifies the resulting payment as part of a group. You can only provide `transfer_group` if it hasn't been set. Learn more about the [use case for connected accounts](https://stripe.com/docs/payments/connected-accounts).
   */
  transferGroup?: string;
}

export const PostPaymentIntentsIntentRequestSchema: TypedSchema<PostPaymentIntentsIntentRequest> = typed<PostPaymentIntentsIntentRequest>(object({
  amount: optional(number()),
  get amountDetails() { return optional(PostPaymentIntentsIntentRequestAmountDetailsSchema) },
  get applicationFeeAmount() { return optional(PostPaymentIntentsIntentRequestApplicationFeeAmountSchema) },
  captureMethod: optional(string()),
  currency: optional(string()),
  customer: optional(string()),
  description: optional(string()),
  get excludedPaymentMethodTypes() { return optional(PostPaymentIntentsIntentRequestExcludedPaymentMethodTypesSchema) },
  expand: optional(array(string())),
  get hooks() { return optional(PostPaymentIntentsRequestHooksSchema) },
  get metadata() { return optional(DefaultPostAccountsRequestMetadataSchema) },
  get paymentDetails() { return optional(PostPaymentIntentsIntentRequestPaymentDetailsSchema) },
  paymentMethod: optional(string()),
  paymentMethodConfiguration: optional(string()),
  get paymentMethodData() { return optional(PostPaymentIntentsRequestPaymentMethodDataSchema) },
  get paymentMethodOptions() { return optional(PostPaymentIntentsIntentRequestPaymentMethodOptionsSchema) },
  paymentMethodTypes: optional(array(string())),
  get receiptEmail() { return optional(PostPaymentIntentsIntentRequestReceiptEmailSchema) },
  setupFutureUsage: optional(string()),
  get shipping() { return optional(PostPaymentIntentsIntentRequestShippingSchema) },
  statementDescriptor: optional(string()),
  statementDescriptorSuffix: optional(string()),
  get transferData() { return optional(PostPaymentIntentsIntentRequestTransferDataSchema) },
  transferGroup: optional(string()),
}));