import { TypedSchema, number, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * payment_method_options_param
 */
export interface PostCheckoutSessionsRequestPix {
  amountIncludesIof?: string;
  expiresAfterSeconds?: number;
  setupFutureUsage?: string;
}

export const PostCheckoutSessionsRequestPixSchema: TypedSchema<PostCheckoutSessionsRequestPix> = typed<PostCheckoutSessionsRequestPix>(object({
  amountIncludesIof: optional(string()),
  expiresAfterSeconds: optional(number()),
  setupFutureUsage: optional(string()),
}));