import { TypedSchema, boolean, object, optional, typed } from '@speakeasy-api/tonic';
/**
 * instant_payouts_promotion_features_param
 */
export interface PostAccountSessionsRequestFeatures5 {
  disableStripeUserAuthentication?: boolean;
  externalAccountCollection?: boolean;
  instantPayouts?: boolean;
}

export const PostAccountSessionsRequestFeatures5Schema: TypedSchema<PostAccountSessionsRequestFeatures5> = typed<PostAccountSessionsRequestFeatures5>(object({
  disableStripeUserAuthentication: optional(boolean()),
  externalAccountCollection: optional(boolean()),
  instantPayouts: optional(boolean()),
}));