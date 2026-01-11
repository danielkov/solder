import { TypedSchema, array, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * restrictions_param
 */
export interface PostCheckoutSessionsRequestRestrictions {
  brandsBlocked?: Array<string>;
}

export const PostCheckoutSessionsRequestRestrictionsSchema: TypedSchema<PostCheckoutSessionsRequestRestrictions> = typed<PostCheckoutSessionsRequestRestrictions>(object({
  brandsBlocked: optional(array(string())),
}));