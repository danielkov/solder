import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * payment_method_options_param
 */
export interface PostCheckoutSessionsRequestBancontact {
  setupFutureUsage?: string;
}

export const PostCheckoutSessionsRequestBancontactSchema: TypedSchema<PostCheckoutSessionsRequestBancontact> = typed<PostCheckoutSessionsRequestBancontact>(object({
  setupFutureUsage: optional(string()),
}));