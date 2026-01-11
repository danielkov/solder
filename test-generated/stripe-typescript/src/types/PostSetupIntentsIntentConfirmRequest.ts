import { TypedSchema, array, boolean, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostPaymentIntentsIntentConfirmRequestMandateData } from './PostPaymentIntentsIntentConfirmRequestMandateData';
import { PostPaymentIntentsIntentConfirmRequestMandateDataSchema } from './PostPaymentIntentsIntentConfirmRequestMandateData';
import type { PostSetupIntentsRequestPaymentMethodData } from './PostSetupIntentsRequestPaymentMethodData';
import { PostSetupIntentsRequestPaymentMethodDataSchema } from './PostSetupIntentsRequestPaymentMethodData';
import type { PostSetupIntentsRequestPaymentMethodOptions } from './PostSetupIntentsRequestPaymentMethodOptions';
import { PostSetupIntentsRequestPaymentMethodOptionsSchema } from './PostSetupIntentsRequestPaymentMethodOptions';
export interface PostSetupIntentsIntentConfirmRequest {
  /**
   * The client secret of the SetupIntent.
   */
  clientSecret?: string;
  /**
   * ID of the ConfirmationToken used to confirm this SetupIntent.

If the provided ConfirmationToken contains properties that are also being provided in this request, such as `payment_method`, then the values in this request will take precedence.
   */
  confirmationToken?: string;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
  mandateData?: PostPaymentIntentsIntentConfirmRequestMandateData;
  /**
   * ID of the payment method (a PaymentMethod, Card, or saved Source object) to attach to this SetupIntent.
   */
  paymentMethod?: string;
  /**
   * payment_method_data_params
   *
   * When included, this hash creates a PaymentMethod that is set as the [`payment_method`](https://stripe.com/docs/api/setup_intents/object#setup_intent_object-payment_method)
value in the SetupIntent.
   */
  paymentMethodData?: PostSetupIntentsRequestPaymentMethodData;
  /**
   * payment_method_options_param
   *
   * Payment method-specific configuration for this SetupIntent.
   */
  paymentMethodOptions?: PostSetupIntentsRequestPaymentMethodOptions;
  /**
   * The URL to redirect your customer back to after they authenticate on the payment method's app or site.
If you'd prefer to redirect to a mobile application, you can alternatively supply an application URI scheme.
This parameter is only used for cards and other redirect-based payment methods.
   */
  returnUrl?: string;
  /**
   * Set to `true` when confirming server-side and using Stripe.js, iOS, or Android client-side SDKs to handle the next actions.
   */
  useStripeSdk?: boolean;
}

export const PostSetupIntentsIntentConfirmRequestSchema: TypedSchema<PostSetupIntentsIntentConfirmRequest> = typed<PostSetupIntentsIntentConfirmRequest>(object({
  clientSecret: optional(string()),
  confirmationToken: optional(string()),
  expand: optional(array(string())),
  get mandateData() { return optional(PostPaymentIntentsIntentConfirmRequestMandateDataSchema) },
  paymentMethod: optional(string()),
  get paymentMethodData() { return optional(PostSetupIntentsRequestPaymentMethodDataSchema) },
  get paymentMethodOptions() { return optional(PostSetupIntentsRequestPaymentMethodOptionsSchema) },
  returnUrl: optional(string()),
  useStripeSdk: optional(boolean()),
}));