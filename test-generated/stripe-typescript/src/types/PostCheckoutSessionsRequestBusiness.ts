import { TypedSchema, boolean, object, optional, typed } from '@speakeasy-api/tonic';
/**
 * name_collection_business_params
 */
export interface PostCheckoutSessionsRequestBusiness {
  enabled: boolean;
  optional?: boolean;
}

export const PostCheckoutSessionsRequestBusinessSchema: TypedSchema<PostCheckoutSessionsRequestBusiness> = typed<PostCheckoutSessionsRequestBusiness>(object({
  enabled: boolean(),
  optional: optional(boolean()),
}));