import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * flexible_params
 */
export interface PostCheckoutSessionsRequestFlexible {
  prorationDiscounts?: string;
}

export const PostCheckoutSessionsRequestFlexibleSchema: TypedSchema<PostCheckoutSessionsRequestFlexible> = typed<PostCheckoutSessionsRequestFlexible>(object({
  prorationDiscounts: optional(string()),
}));