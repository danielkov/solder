import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * payment_method_options_param
 */
export interface PostPaymentIntentsRequestAmazonPayObject {
  captureMethod?: string;
  setupFutureUsage?: string;
}

export const PostPaymentIntentsRequestAmazonPayObjectSchema: TypedSchema<PostPaymentIntentsRequestAmazonPayObject> = typed<PostPaymentIntentsRequestAmazonPayObject>(object({
  captureMethod: optional(string()),
  setupFutureUsage: optional(string()),
}));