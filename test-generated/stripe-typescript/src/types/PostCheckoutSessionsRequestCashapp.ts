import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * payment_method_options_param
 */
export interface PostCheckoutSessionsRequestCashapp {
  captureMethod?: string;
  setupFutureUsage?: string;
}

export const PostCheckoutSessionsRequestCashappSchema: TypedSchema<PostCheckoutSessionsRequestCashapp> = typed<PostCheckoutSessionsRequestCashapp>(object({
  captureMethod: optional(string()),
  setupFutureUsage: optional(string()),
}));