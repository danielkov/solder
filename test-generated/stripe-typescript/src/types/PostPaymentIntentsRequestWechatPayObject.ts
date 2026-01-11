import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * payment_method_options_param
 */
export interface PostPaymentIntentsRequestWechatPayObject {
  appId?: string;
  client?: string;
  setupFutureUsage?: string;
}

export const PostPaymentIntentsRequestWechatPayObjectSchema: TypedSchema<PostPaymentIntentsRequestWechatPayObject> = typed<PostPaymentIntentsRequestWechatPayObject>(object({
  appId: optional(string()),
  client: optional(string()),
  setupFutureUsage: optional(string()),
}));