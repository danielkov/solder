import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * payment_method_options_param
 */
export interface PostCheckoutSessionsRequestAmazonPay {
  captureMethod?: string;
  setupFutureUsage?: string;
}

export const PostCheckoutSessionsRequestAmazonPaySchema: TypedSchema<PostCheckoutSessionsRequestAmazonPay> = typed<PostCheckoutSessionsRequestAmazonPay>(object({
  captureMethod: optional(string()),
  setupFutureUsage: optional(string()),
}));