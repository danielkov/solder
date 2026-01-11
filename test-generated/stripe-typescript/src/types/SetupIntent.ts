import { TypedSchema, array, boolean, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { ApiErrors } from './ApiErrors';
import { ApiErrorsSchema } from './ApiErrors';
import type { ApplicationOrRef } from './ApplicationOrRef';
import { ApplicationOrRefSchema } from './ApplicationOrRef';
import type { CustomerUnion } from './CustomerUnion';
import { CustomerUnionSchema } from './CustomerUnion';
import type { LatestAttemptOrRef } from './LatestAttemptOrRef';
import { LatestAttemptOrRefSchema } from './LatestAttemptOrRef';
import type { MandateOrRef } from './MandateOrRef';
import { MandateOrRefSchema } from './MandateOrRef';
import type { MetadataProperty } from './MetadataProperty';
import { MetadataPropertySchema } from './MetadataProperty';
import type { OnBehalfOfOrRef } from './OnBehalfOfOrRef';
import { OnBehalfOfOrRefSchema } from './OnBehalfOfOrRef';
import type { PaymentFlowsAutomaticPaymentMethodsSetupIntent } from './PaymentFlowsAutomaticPaymentMethodsSetupIntent';
import { PaymentFlowsAutomaticPaymentMethodsSetupIntentSchema } from './PaymentFlowsAutomaticPaymentMethodsSetupIntent';
import type { PaymentMethodConfigBizPaymentMethodConfigurationDetails } from './PaymentMethodConfigBizPaymentMethodConfigurationDetails';
import { PaymentMethodConfigBizPaymentMethodConfigurationDetailsSchema } from './PaymentMethodConfigBizPaymentMethodConfigurationDetails';
import type { PaymentMethodOrRef } from './PaymentMethodOrRef';
import { PaymentMethodOrRefSchema } from './PaymentMethodOrRef';
import type { SetupIntentNextAction } from './SetupIntentNextAction';
import { SetupIntentNextActionSchema } from './SetupIntentNextAction';
import type { SetupIntentPaymentMethodOptions } from './SetupIntentPaymentMethodOptions';
import { SetupIntentPaymentMethodOptionsSchema } from './SetupIntentPaymentMethodOptions';
import type { SingleUseMandateOrRef } from './SingleUseMandateOrRef';
import { SingleUseMandateOrRefSchema } from './SingleUseMandateOrRef';
/**
 * SetupIntent
 *
 * A SetupIntent guides you through the process of setting up and saving a customer's payment credentials for future payments.
For example, you can use a SetupIntent to set up and save your customer's card without immediately collecting a payment.
Later, you can use [PaymentIntents](https://stripe.com/docs/api#payment_intents) to drive the payment flow.

Create a SetupIntent when you're ready to collect your customer's payment credentials.
Don't maintain long-lived, unconfirmed SetupIntents because they might not be valid.
The SetupIntent transitions through multiple [statuses](https://docs.stripe.com/payments/intents#intent-statuses) as it guides
you through the setup process.

Successful SetupIntents result in payment credentials that are optimized for future payments.
For example, cardholders in [certain regions](https://stripe.com/guides/strong-customer-authentication) might need to be run through
[Strong Customer Authentication](https://docs.stripe.com/strong-customer-authentication) during payment method collection
to streamline later [off-session payments](https://docs.stripe.com/payments/setup-intents).
If you use the SetupIntent with a [Customer](https://stripe.com/docs/api#setup_intent_object-customer),
it automatically attaches the resulting payment method to that Customer after successful setup.
We recommend using SetupIntents or [setup_future_usage](https://stripe.com/docs/api#payment_intent_object-setup_future_usage) on
PaymentIntents to save payment methods to prevent saving invalid or unoptimized payment methods.

By using SetupIntents, you can reduce friction for your customers, even as regulations change over time.

Related guide: [Setup Intents API](https://docs.stripe.com/payments/setup-intents)
 */
export interface SetupIntent {
  /**
   * ID of the Connect application that created the SetupIntent.
   */
  application?: ApplicationOrRef;
  /**
   * If present, the SetupIntent's payment method will be attached to the in-context Stripe Account.

It can only be used for this Stripe Account’s own money movement flows like InboundTransfer and OutboundTransfers. It cannot be set to true when setting up a PaymentMethod for a Customer, and defaults to false when attaching a PaymentMethod to a Customer.
   */
  attachToSelf?: boolean;
  /**
   * Settings for dynamic payment methods compatible with this Setup Intent
   */
  automaticPaymentMethods?: PaymentFlowsAutomaticPaymentMethodsSetupIntent;
  /**
   * Reason for cancellation of this SetupIntent, one of `abandoned`, `requested_by_customer`, or `duplicate`.
   */
  cancellationReason?: string;
  /**
   * The client secret of this SetupIntent. Used for client-side retrieval using a publishable key.

The client secret can be used to complete payment setup from your frontend. It should not be stored, logged, or exposed to anyone other than the customer. Make sure that you have TLS enabled on any page that includes the client secret.
   */
  clientSecret?: string;
  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;
  /**
   * ID of the Customer this SetupIntent belongs to, if one exists.

If present, the SetupIntent's payment method will be attached to the Customer on successful setup. Payment methods attached to other Customers cannot be used with this SetupIntent.
   */
  customer?: CustomerUnion;
  /**
   * An arbitrary string attached to the object. Often useful for displaying to users.
   */
  description?: string;
  /**
   * Payment method types that are excluded from this SetupIntent.
   */
  excludedPaymentMethodTypes?: Array<string>;
  /**
   * Indicates the directions of money movement for which this payment method is intended to be used.

Include `inbound` if you intend to use the payment method as the origin to pull funds from. Include `outbound` if you intend to use the payment method as the destination to send funds to. You can include both if you intend to use the payment method for both purposes.
   */
  flowDirections?: Array<string>;
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * The error encountered in the previous SetupIntent confirmation.
   */
  lastSetupError?: ApiErrors;
  /**
   * The most recent SetupAttempt for this SetupIntent.
   */
  latestAttempt?: LatestAttemptOrRef;
  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
  /**
   * ID of the multi use Mandate generated by the SetupIntent.
   */
  mandate?: MandateOrRef;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
   */
  metadata?: MetadataProperty;
  /**
   * If present, this property tells you what actions you need to take in order for your customer to continue payment setup.
   */
  nextAction?: SetupIntentNextAction;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: string;
  /**
   * The account (if any) for which the setup is intended.
   */
  onBehalfOf?: OnBehalfOfOrRef;
  /**
   * ID of the payment method used with this SetupIntent. If the payment method is `card_present` and isn't a digital wallet, then the [generated_card](https://docs.stripe.com/api/setup_attempts/object#setup_attempt_object-payment_method_details-card_present-generated_card) associated with the `latest_attempt` is attached to the Customer instead.
   */
  paymentMethod?: PaymentMethodOrRef;
  /**
   * Information about the [payment method configuration](https://stripe.com/docs/api/payment_method_configurations) used for this Setup Intent.
   */
  paymentMethodConfigurationDetails?: PaymentMethodConfigBizPaymentMethodConfigurationDetails;
  /**
   * Payment method-specific configuration for this SetupIntent.
   */
  paymentMethodOptions?: SetupIntentPaymentMethodOptions;
  /**
   * The list of payment method types (e.g. card) that this SetupIntent is allowed to set up. A list of valid payment method types can be found [here](https://docs.stripe.com/api/payment_methods/object#payment_method_object-type).
   */
  paymentMethodTypes: Array<string>;
  /**
   * ID of the single_use Mandate generated by the SetupIntent.
   */
  singleUseMandate?: SingleUseMandateOrRef;
  /**
   * [Status](https://stripe.com/docs/payments/intents#intent-statuses) of this SetupIntent, one of `requires_payment_method`, `requires_confirmation`, `requires_action`, `processing`, `canceled`, or `succeeded`.
   */
  status: string;
  /**
   * Indicates how the payment method is intended to be used in the future.

Use `on_session` if you intend to only reuse the payment method when the customer is in your checkout flow. Use `off_session` if your customer may or may not be in your checkout flow. If not provided, this value defaults to `off_session`.
   */
  usage: string;
}

export const SetupIntentSchema: TypedSchema<SetupIntent> = typed<SetupIntent>(object({
  get application() { return optional(ApplicationOrRefSchema) },
  attachToSelf: optional(boolean()),
  get automaticPaymentMethods() { return optional(PaymentFlowsAutomaticPaymentMethodsSetupIntentSchema) },
  cancellationReason: optional(string()),
  clientSecret: optional(string()),
  created: number(),
  get customer() { return optional(CustomerUnionSchema) },
  description: optional(string()),
  excludedPaymentMethodTypes: optional(array(string())),
  flowDirections: optional(array(string())),
  id: string(),
  get lastSetupError() { return optional(ApiErrorsSchema) },
  get latestAttempt() { return optional(LatestAttemptOrRefSchema) },
  livemode: boolean(),
  get mandate() { return optional(MandateOrRefSchema) },
  get metadata() { return optional(MetadataPropertySchema) },
  get nextAction() { return optional(SetupIntentNextActionSchema) },
  object: string(),
  get onBehalfOf() { return optional(OnBehalfOfOrRefSchema) },
  get paymentMethod() { return optional(PaymentMethodOrRefSchema) },
  get paymentMethodConfigurationDetails() { return optional(PaymentMethodConfigBizPaymentMethodConfigurationDetailsSchema) },
  get paymentMethodOptions() { return optional(SetupIntentPaymentMethodOptionsSchema) },
  paymentMethodTypes: array(string()),
  get singleUseMandate() { return optional(SingleUseMandateOrRefSchema) },
  status: string(),
  usage: string(),
}));