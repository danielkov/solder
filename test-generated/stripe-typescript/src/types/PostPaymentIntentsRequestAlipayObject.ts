import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * payment_method_options_param
 */
export interface PostPaymentIntentsRequestAlipayObject {
  setupFutureUsage?: string;
}

export const PostPaymentIntentsRequestAlipayObjectSchema: TypedSchema<PostPaymentIntentsRequestAlipayObject> = typed<PostPaymentIntentsRequestAlipayObject>(object({
  setupFutureUsage: optional(string()),
}));