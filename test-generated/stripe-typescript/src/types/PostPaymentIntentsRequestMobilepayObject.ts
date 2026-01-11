import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * payment_method_options_param
 */
export interface PostPaymentIntentsRequestMobilepayObject {
  captureMethod?: string;
  setupFutureUsage?: string;
}

export const PostPaymentIntentsRequestMobilepayObjectSchema: TypedSchema<PostPaymentIntentsRequestMobilepayObject> = typed<PostPaymentIntentsRequestMobilepayObject>(object({
  captureMethod: optional(string()),
  setupFutureUsage: optional(string()),
}));