import { TypedSchema, array, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostTestHelpersConfirmationTokensRequestPaymentMethodData } from './PostTestHelpersConfirmationTokensRequestPaymentMethodData';
import { PostTestHelpersConfirmationTokensRequestPaymentMethodDataSchema } from './PostTestHelpersConfirmationTokensRequestPaymentMethodData';
import type { PostTestHelpersConfirmationTokensRequestPaymentMethodOptions } from './PostTestHelpersConfirmationTokensRequestPaymentMethodOptions';
import { PostTestHelpersConfirmationTokensRequestPaymentMethodOptionsSchema } from './PostTestHelpersConfirmationTokensRequestPaymentMethodOptions';
import type { PostTestHelpersConfirmationTokensRequestShipping } from './PostTestHelpersConfirmationTokensRequestShipping';
import { PostTestHelpersConfirmationTokensRequestShippingSchema } from './PostTestHelpersConfirmationTokensRequestShipping';
export interface PostTestHelpersConfirmationTokensRequest {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
  /**
   * ID of an existing PaymentMethod.
   */
  paymentMethod?: string;
  /**
   * payment_method_data_params
   *
   * If provided, this hash will be used to create a PaymentMethod.
   */
  paymentMethodData?: PostTestHelpersConfirmationTokensRequestPaymentMethodData;
  /**
   * test_payment_method_options_param
   *
   * Payment-method-specific configuration for this ConfirmationToken.
   */
  paymentMethodOptions?: PostTestHelpersConfirmationTokensRequestPaymentMethodOptions;
  /**
   * Return URL used to confirm the Intent.
   */
  returnUrl?: string;
  /**
   * Indicates that you intend to make future payments with this ConfirmationToken's payment method.

The presence of this property will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete.
   */
  setupFutureUsage?: string;
  /**
   * recipient_shipping_with_optional_fields_address
   *
   * Shipping information for this ConfirmationToken.
   */
  shipping?: PostTestHelpersConfirmationTokensRequestShipping;
}

export const PostTestHelpersConfirmationTokensRequestSchema: TypedSchema<PostTestHelpersConfirmationTokensRequest> = typed<PostTestHelpersConfirmationTokensRequest>(object({
  expand: optional(array(string())),
  paymentMethod: optional(string()),
  get paymentMethodData() { return optional(PostTestHelpersConfirmationTokensRequestPaymentMethodDataSchema) },
  get paymentMethodOptions() { return optional(PostTestHelpersConfirmationTokensRequestPaymentMethodOptionsSchema) },
  returnUrl: optional(string()),
  setupFutureUsage: optional(string()),
  get shipping() { return optional(PostTestHelpersConfirmationTokensRequestShippingSchema) },
}));