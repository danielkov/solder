import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * payment_method_data_param
 *
 * This parameter allows you to set some attributes on the payment method created during a Checkout session.
 */
export interface PostCheckoutSessionsRequestPaymentMethodData {
  allowRedisplay?: string;
}

export const PostCheckoutSessionsRequestPaymentMethodDataSchema: TypedSchema<PostCheckoutSessionsRequestPaymentMethodData> = typed<PostCheckoutSessionsRequestPaymentMethodData>(object({
  allowRedisplay: optional(string()),
}));