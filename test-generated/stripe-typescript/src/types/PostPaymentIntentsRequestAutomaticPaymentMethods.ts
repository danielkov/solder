import { TypedSchema, boolean, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * automatic_payment_methods_param
 *
 * When you enable this parameter, this PaymentIntent accepts payment methods that you enable in the Dashboard and that are compatible with this PaymentIntent's other parameters.
 */
export interface PostPaymentIntentsRequestAutomaticPaymentMethods {
  allowRedirects?: string;
  enabled: boolean;
}

export const PostPaymentIntentsRequestAutomaticPaymentMethodsSchema: TypedSchema<PostPaymentIntentsRequestAutomaticPaymentMethods> = typed<PostPaymentIntentsRequestAutomaticPaymentMethods>(object({
  allowRedirects: optional(string()),
  enabled: boolean(),
}));