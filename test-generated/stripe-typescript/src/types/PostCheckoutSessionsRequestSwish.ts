import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * payment_method_options_param
 */
export interface PostCheckoutSessionsRequestSwish {
  reference?: string;
}

export const PostCheckoutSessionsRequestSwishSchema: TypedSchema<PostCheckoutSessionsRequestSwish> = typed<PostCheckoutSessionsRequestSwish>(object({
  reference: optional(string()),
}));