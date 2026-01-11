import { TypedSchema, number, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * payment_method_options_param
 */
export interface PostCheckoutSessionsRequestKonbini {
  expiresAfterDays?: number;
  setupFutureUsage?: string;
}

export const PostCheckoutSessionsRequestKonbiniSchema: TypedSchema<PostCheckoutSessionsRequestKonbini> = typed<PostCheckoutSessionsRequestKonbini>(object({
  expiresAfterDays: optional(number()),
  setupFutureUsage: optional(string()),
}));