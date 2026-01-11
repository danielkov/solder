import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * payment_method_options_param
 */
export interface PostCheckoutSessionsRequestAlipay {
  setupFutureUsage?: string;
}

export const PostCheckoutSessionsRequestAlipaySchema: TypedSchema<PostCheckoutSessionsRequestAlipay> = typed<PostCheckoutSessionsRequestAlipay>(object({
  setupFutureUsage: optional(string()),
}));