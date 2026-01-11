import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * payment_method_options_param
 */
export interface PostCheckoutSessionsRequestAffirm {
  captureMethod?: string;
  setupFutureUsage?: string;
}

export const PostCheckoutSessionsRequestAffirmSchema: TypedSchema<PostCheckoutSessionsRequestAffirm> = typed<PostCheckoutSessionsRequestAffirm>(object({
  captureMethod: optional(string()),
  setupFutureUsage: optional(string()),
}));