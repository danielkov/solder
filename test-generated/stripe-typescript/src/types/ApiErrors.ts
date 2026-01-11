import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PaymentIntent } from './PaymentIntent';
import { PaymentIntentSchema } from './PaymentIntent';
import type { PaymentMethod } from './PaymentMethod';
import { PaymentMethodSchema } from './PaymentMethod';
import type { SetupIntent } from './SetupIntent';
import { SetupIntentSchema } from './SetupIntent';
import type { SourceUnion } from './SourceUnion';
import { SourceUnionSchema } from './SourceUnion';
/**
 * APIErrors
 *
 * 
 */
export interface ApiErrors {
  /**
   * For card errors resulting from a card issuer decline, a short string indicating [how to proceed with an error](https://stripe.com/docs/declines#retrying-issuer-declines) if they provide one.
   */
  adviceCode?: string;
  /**
   * For card errors, the ID of the failed charge.
   */
  charge?: string;
  /**
   * For some errors that could be handled programmatically, a short string indicating the [error code](https://stripe.com/docs/error-codes) reported.
   */
  code?: string;
  /**
   * For card errors resulting from a card issuer decline, a short string indicating the [card issuer's reason for the decline](https://stripe.com/docs/declines#issuer-declines) if they provide one.
   */
  declineCode?: string;
  /**
   * A URL to more information about the [error code](https://stripe.com/docs/error-codes) reported.
   */
  docUrl?: string;
  /**
   * A human-readable message providing more details about the error. For card errors, these messages can be shown to your users.
   */
  message?: string;
  /**
   * For card errors resulting from a card issuer decline, a 2 digit code which indicates the advice given to merchant by the card network on how to proceed with an error.
   */
  networkAdviceCode?: string;
  /**
   * For payments declined by the network, an alphanumeric code which indicates the reason the payment failed.
   */
  networkDeclineCode?: string;
  /**
   * If the error is parameter-specific, the parameter related to the error. For example, you can use this to display a message near the correct form field.
   */
  param?: string;
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
  paymentIntent?: PaymentIntent;
  /**
   * PaymentMethod
   *
   * PaymentMethod objects represent your customer's payment instruments.
You can use them with [PaymentIntents](https://stripe.com/docs/payments/payment-intents) to collect payments or save them to
Customer objects to store instrument details for future payments.

Related guides: [Payment Methods](https://stripe.com/docs/payments/payment-methods) and [More Payment Scenarios](https://stripe.com/docs/payments/more-payment-scenarios).
   */
  paymentMethod?: PaymentMethod;
  /**
   * If the error is specific to the type of payment method, the payment method type that had a problem. This field is only populated for invoice-related errors.
   */
  paymentMethodType?: string;
  /**
   * A URL to the request log entry in your dashboard.
   */
  requestLogUrl?: string;
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
  setupIntent?: SetupIntent;
  /**
   * The [source object](https://stripe.com/docs/api/sources/object) for errors returned on a request involving a source.
   */
  source?: SourceUnion;
  /**
   * The type of error returned. One of `api_error`, `card_error`, `idempotency_error`, or `invalid_request_error`
   */
  type: string;
}

export const ApiErrorsSchema: TypedSchema<ApiErrors> = typed<ApiErrors>(object({
  adviceCode: optional(string()),
  charge: optional(string()),
  code: optional(string()),
  declineCode: optional(string()),
  docUrl: optional(string()),
  message: optional(string()),
  networkAdviceCode: optional(string()),
  networkDeclineCode: optional(string()),
  param: optional(string()),
  get paymentIntent() { return optional(PaymentIntentSchema) },
  get paymentMethod() { return optional(PaymentMethodSchema) },
  paymentMethodType: optional(string()),
  requestLogUrl: optional(string()),
  get setupIntent() { return optional(SetupIntentSchema) },
  get source() { return optional(SourceUnionSchema) },
  type: string(),
}));