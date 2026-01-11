import { TypedSchema, array, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * saved_payment_method_options_param
 *
 * Controls saved payment method settings for the session. Only available in `payment` and `subscription` mode.
 */
export interface PostCheckoutSessionsRequestSavedPaymentMethodOptions {
  allowRedisplayFilters?: Array<string>;
  paymentMethodRemove?: string;
  paymentMethodSave?: string;
}

export const PostCheckoutSessionsRequestSavedPaymentMethodOptionsSchema: TypedSchema<PostCheckoutSessionsRequestSavedPaymentMethodOptions> = typed<PostCheckoutSessionsRequestSavedPaymentMethodOptions>(object({
  allowRedisplayFilters: optional(array(string())),
  paymentMethodRemove: optional(string()),
  paymentMethodSave: optional(string()),
}));