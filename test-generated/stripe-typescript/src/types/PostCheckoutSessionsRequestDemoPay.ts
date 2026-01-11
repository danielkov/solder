import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * payment_method_options_param
 */
export interface PostCheckoutSessionsRequestDemoPay {
  setupFutureUsage?: string;
}

export const PostCheckoutSessionsRequestDemoPaySchema: TypedSchema<PostCheckoutSessionsRequestDemoPay> = typed<PostCheckoutSessionsRequestDemoPay>(object({
  setupFutureUsage: optional(string()),
}));