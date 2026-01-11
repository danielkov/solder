import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * payment_method_options_param
 */
export interface PostCheckoutSessionsRequestWechatPay {
  appId?: string;
  client: string;
  setupFutureUsage?: string;
}

export const PostCheckoutSessionsRequestWechatPaySchema: TypedSchema<PostCheckoutSessionsRequestWechatPay> = typed<PostCheckoutSessionsRequestWechatPay>(object({
  appId: optional(string()),
  client: string(),
  setupFutureUsage: optional(string()),
}));