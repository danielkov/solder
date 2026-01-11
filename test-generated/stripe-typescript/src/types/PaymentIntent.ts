import { TypedSchema, array, boolean, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { AmountDetailsUnion } from './AmountDetailsUnion';
import { AmountDetailsUnionSchema } from './AmountDetailsUnion';
import type { ApiErrors } from './ApiErrors';
import { ApiErrorsSchema } from './ApiErrors';
import type { ApplicationOrRef } from './ApplicationOrRef';
import { ApplicationOrRefSchema } from './ApplicationOrRef';
import type { CustomerUnion } from './CustomerUnion';
import { CustomerUnionSchema } from './CustomerUnion';
import type { LatestChargeOrRef } from './LatestChargeOrRef';
import { LatestChargeOrRefSchema } from './LatestChargeOrRef';
import type { MetadataProperty } from './MetadataProperty';
import { MetadataPropertySchema } from './MetadataProperty';
import type { OnBehalfOfOrRef } from './OnBehalfOfOrRef';
import { OnBehalfOfOrRefSchema } from './OnBehalfOfOrRef';
import type { PaymentFlowsAutomaticPaymentMethodsPaymentIntent } from './PaymentFlowsAutomaticPaymentMethodsPaymentIntent';
import { PaymentFlowsAutomaticPaymentMethodsPaymentIntentSchema } from './PaymentFlowsAutomaticPaymentMethodsPaymentIntent';
import type { PaymentFlowsPaymentDetails } from './PaymentFlowsPaymentDetails';
import { PaymentFlowsPaymentDetailsSchema } from './PaymentFlowsPaymentDetails';
import type { PaymentFlowsPaymentIntentAsyncWorkflows } from './PaymentFlowsPaymentIntentAsyncWorkflows';
import { PaymentFlowsPaymentIntentAsyncWorkflowsSchema } from './PaymentFlowsPaymentIntentAsyncWorkflows';
import type { PaymentFlowsPaymentIntentPresentmentDetails } from './PaymentFlowsPaymentIntentPresentmentDetails';
import { PaymentFlowsPaymentIntentPresentmentDetailsSchema } from './PaymentFlowsPaymentIntentPresentmentDetails';
import type { PaymentIntentNextAction } from './PaymentIntentNextAction';
import { PaymentIntentNextActionSchema } from './PaymentIntentNextAction';
import type { PaymentIntentPaymentMethodOptions } from './PaymentIntentPaymentMethodOptions';
import { PaymentIntentPaymentMethodOptionsSchema } from './PaymentIntentPaymentMethodOptions';
import type { PaymentIntentProcessing } from './PaymentIntentProcessing';
import { PaymentIntentProcessingSchema } from './PaymentIntentProcessing';
import type { PaymentMethodConfigBizPaymentMethodConfigurationDetails } from './PaymentMethodConfigBizPaymentMethodConfigurationDetails';
import { PaymentMethodConfigBizPaymentMethodConfigurationDetailsSchema } from './PaymentMethodConfigBizPaymentMethodConfigurationDetails';
import type { PaymentMethodOrRef } from './PaymentMethodOrRef';
import { PaymentMethodOrRefSchema } from './PaymentMethodOrRef';
import type { ReviewOrRef } from './ReviewOrRef';
import { ReviewOrRefSchema } from './ReviewOrRef';
import type { Shipping } from './Shipping';
import { ShippingSchema } from './Shipping';
import type { TransferData } from './TransferData';
import { TransferDataSchema } from './TransferData';
/**
 * PaymentIntent
 *
 * A PaymentIntent guides you through the process of collecting a payment from your customer.
We recommend that you create exactly one PaymentIntent for each order or
customer session in your system. You can reference the PaymentIntent later to
see the history of payment attempts for a particular session.

A PaymentIntent transitions through
[multiple statuses](https://stripe.com/docs/payments/intents#intent-statuses)
throughout its lifetime as it interfaces with Stripe.js to perform
authentication flows and ultimately creates at most one successful charge.

Related guide: [Payment Intents API](https://stripe.com/docs/payments/payment-intents)
 */
export interface PaymentIntent {
  /**
   * Amount intended to be collected by this PaymentIntent. A positive integer representing how much to charge in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal) (e.g., 100 cents to charge $1.00 or 100 to charge ¥100, a zero-decimal currency). The minimum amount is $0.50 US or [equivalent in charge currency](https://stripe.com/docs/currencies#minimum-and-maximum-charge-amounts). The amount value supports up to eight digits (e.g., a value of 99999999 for a USD charge of $999,999.99).
   */
  amount?: number;
  /**
   * Amount that can be captured from this PaymentIntent.
   */
  amountCapturable?: number;
  amountDetails?: AmountDetailsUnion;
  /**
   * Amount that this PaymentIntent collects.
   */
  amountReceived?: number;
  /**
   * ID of the Connect application that created the PaymentIntent.
   */
  application?: ApplicationOrRef;
  /**
   * The amount of the application fee (if any) that will be requested to be applied to the payment and transferred to the application owner's Stripe account. The amount of the application fee collected will be capped at the total amount captured. For more information, see the PaymentIntents [use case for connected accounts](https://stripe.com/docs/payments/connected-accounts).
   */
  applicationFeeAmount?: number;
  /**
   * Settings to configure compatible payment methods from the [Stripe Dashboard](https://dashboard.stripe.com/settings/payment_methods)
   */
  automaticPaymentMethods?: PaymentFlowsAutomaticPaymentMethodsPaymentIntent;
  /**
   * Populated when `status` is `canceled`, this is the time at which the PaymentIntent was canceled. Measured in seconds since the Unix epoch.
   */
  canceledAt?: number;
  /**
   * Reason for cancellation of this PaymentIntent, either user-provided (`duplicate`, `fraudulent`, `requested_by_customer`, or `abandoned`) or generated by Stripe internally (`failed_invoice`, `void_invoice`, `automatic`, or `expired`).
   */
  cancellationReason?: string;
  /**
   * Controls when the funds will be captured from the customer's account.
   */
  captureMethod?: string;
  /**
   * The client secret of this PaymentIntent. Used for client-side retrieval using a publishable key. 

The client secret can be used to complete a payment from your frontend. It should not be stored, logged, or exposed to anyone other than the customer. Make sure that you have TLS enabled on any page that includes the client secret.

Refer to our docs to [accept a payment](https://stripe.com/docs/payments/accept-a-payment?ui=elements) and learn about how `client_secret` should be handled.
   */
  clientSecret?: string;
  /**
   * Describes whether we can confirm this PaymentIntent automatically, or if it requires customer action to confirm the payment.
   */
  confirmationMethod?: string;
  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;
  /**
   * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
   */
  currency?: string;
  /**
   * ID of the Customer this PaymentIntent belongs to, if one exists.

Payment methods attached to other Customers cannot be used with this PaymentIntent.

If [setup_future_usage](https://stripe.com/docs/api#payment_intent_object-setup_future_usage) is set and this PaymentIntent's payment method is not `card_present`, then the payment method attaches to the Customer after the PaymentIntent has been confirmed and any required actions from the user are complete. If the payment method is `card_present` and isn't a digital wallet, then a [generated_card](https://docs.stripe.com/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card is created and attached to the Customer instead.
   */
  customer?: CustomerUnion;
  /**
   * An arbitrary string attached to the object. Often useful for displaying to users.
   */
  description?: string;
  /**
   * The list of payment method types to exclude from use with this payment.
   */
  excludedPaymentMethodTypes?: Array<string>;
  /**
   * PaymentFlowsPaymentIntentAsyncWorkflows
   *
   * 
   */
  hooks?: PaymentFlowsPaymentIntentAsyncWorkflows;
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * The payment error encountered in the previous PaymentIntent confirmation. It will be cleared if the PaymentIntent is later updated for any reason.
   */
  lastPaymentError?: ApiErrors;
  /**
   * ID of the latest [Charge object](https://stripe.com/docs/api/charges) created by this PaymentIntent. This property is `null` until PaymentIntent confirmation is attempted.
   */
  latestCharge?: LatestChargeOrRef;
  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Learn more about [storing information in metadata](https://stripe.com/docs/payments/payment-intents/creating-payment-intents#storing-information-in-metadata).
   */
  metadata?: MetadataProperty;
  nextAction?: PaymentIntentNextAction;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: string;
  /**
   * The account (if any) for which the funds of the PaymentIntent are intended. See the PaymentIntents [use case for connected accounts](https://stripe.com/docs/payments/connected-accounts) for details.
   */
  onBehalfOf?: OnBehalfOfOrRef;
  /**
   * PaymentFlowsPaymentDetails
   *
   * 
   */
  paymentDetails?: PaymentFlowsPaymentDetails;
  /**
   * ID of the payment method used in this PaymentIntent.
   */
  paymentMethod?: PaymentMethodOrRef;
  /**
   * Information about the [payment method configuration](https://stripe.com/docs/api/payment_method_configurations) used for this PaymentIntent.
   */
  paymentMethodConfigurationDetails?: PaymentMethodConfigBizPaymentMethodConfigurationDetails;
  /**
   * Payment-method-specific configuration for this PaymentIntent.
   */
  paymentMethodOptions?: PaymentIntentPaymentMethodOptions;
  /**
   * The list of payment method types (e.g. card) that this PaymentIntent is allowed to use. A comprehensive list of valid payment method types can be found [here](https://docs.stripe.com/api/payment_methods/object#payment_method_object-type).
   */
  paymentMethodTypes?: Array<string>;
  /**
   * PaymentFlowsPaymentIntentPresentmentDetails
   *
   * 
   */
  presentmentDetails?: PaymentFlowsPaymentIntentPresentmentDetails;
  /**
   * If present, this property tells you about the processing state of the payment.
   */
  processing?: PaymentIntentProcessing;
  /**
   * Email address that the receipt for the resulting payment will be sent to. If `receipt_email` is specified for a payment in live mode, a receipt will be sent regardless of your [email settings](https://dashboard.stripe.com/account/emails).
   */
  receiptEmail?: string;
  /**
   * ID of the review associated with this PaymentIntent, if any.
   */
  review?: ReviewOrRef;
  /**
   * Indicates that you intend to make future payments with this PaymentIntent's payment method.

If you provide a Customer with the PaymentIntent, you can use this parameter to [attach the payment method](/payments/save-during-payment) to the Customer after the PaymentIntent is confirmed and the customer completes any required actions. If you don't provide a Customer, you can still [attach](/api/payment_methods/attach) the payment method to a Customer after the transaction completes.

If the payment method is `card_present` and isn't a digital wallet, Stripe creates and attaches a [generated_card](/api/charges/object#charge_object-payment_method_details-card_present-generated_card) payment method representing the card to the Customer instead.

When processing card payments, Stripe uses `setup_future_usage` to help you comply with regional legislation and network rules, such as [SCA](/strong-customer-authentication).
   */
  setupFutureUsage?: string;
  /**
   * Shipping information for this PaymentIntent.
   */
  shipping?: Shipping;
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
   * Status of this PaymentIntent, one of `requires_payment_method`, `requires_confirmation`, `requires_action`, `processing`, `requires_capture`, `canceled`, or `succeeded`. Read more about each PaymentIntent [status](https://stripe.com/docs/payments/intents#intent-statuses).
   */
  status: string;
  /**
   * The data that automatically creates a Transfer after the payment finalizes. Learn more about the [use case for connected accounts](https://stripe.com/docs/payments/connected-accounts).
   */
  transferData?: TransferData;
  /**
   * A string that identifies the resulting payment as part of a group. Learn more about the [use case for connected accounts](https://stripe.com/docs/connect/separate-charges-and-transfers).
   */
  transferGroup?: string;
}

export const PaymentIntentSchema: TypedSchema<PaymentIntent> = typed<PaymentIntent>(object({
  amount: optional(number()),
  amountCapturable: optional(number()),
  get amountDetails() { return optional(AmountDetailsUnionSchema) },
  amountReceived: optional(number()),
  get application() { return optional(ApplicationOrRefSchema) },
  applicationFeeAmount: optional(number()),
  get automaticPaymentMethods() { return optional(PaymentFlowsAutomaticPaymentMethodsPaymentIntentSchema) },
  canceledAt: optional(number()),
  cancellationReason: optional(string()),
  captureMethod: optional(string()),
  clientSecret: optional(string()),
  confirmationMethod: optional(string()),
  created: number(),
  currency: optional(string()),
  get customer() { return optional(CustomerUnionSchema) },
  description: optional(string()),
  excludedPaymentMethodTypes: optional(array(string())),
  get hooks() { return optional(PaymentFlowsPaymentIntentAsyncWorkflowsSchema) },
  id: string(),
  get lastPaymentError() { return optional(ApiErrorsSchema) },
  get latestCharge() { return optional(LatestChargeOrRefSchema) },
  livemode: boolean(),
  get metadata() { return optional(MetadataPropertySchema) },
  get nextAction() { return optional(PaymentIntentNextActionSchema) },
  object: string(),
  get onBehalfOf() { return optional(OnBehalfOfOrRefSchema) },
  get paymentDetails() { return optional(PaymentFlowsPaymentDetailsSchema) },
  get paymentMethod() { return optional(PaymentMethodOrRefSchema) },
  get paymentMethodConfigurationDetails() { return optional(PaymentMethodConfigBizPaymentMethodConfigurationDetailsSchema) },
  get paymentMethodOptions() { return optional(PaymentIntentPaymentMethodOptionsSchema) },
  paymentMethodTypes: optional(array(string())),
  get presentmentDetails() { return optional(PaymentFlowsPaymentIntentPresentmentDetailsSchema) },
  get processing() { return optional(PaymentIntentProcessingSchema) },
  receiptEmail: optional(string()),
  get review() { return optional(ReviewOrRefSchema) },
  setupFutureUsage: optional(string()),
  get shipping() { return optional(ShippingSchema) },
  statementDescriptor: optional(string()),
  statementDescriptorSuffix: optional(string()),
  status: string(),
  get transferData() { return optional(TransferDataSchema) },
  transferGroup: optional(string()),
}));