import { TypedSchema, boolean, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * payment_method_options_param
 */
export interface PostCheckoutSessionsRequestP24 {
  setupFutureUsage?: string;
  tosShownAndAccepted?: boolean;
}

export const PostCheckoutSessionsRequestP24Schema: TypedSchema<PostCheckoutSessionsRequestP24> = typed<PostCheckoutSessionsRequestP24>(object({
  setupFutureUsage: optional(string()),
  tosShownAndAccepted: optional(boolean()),
}));