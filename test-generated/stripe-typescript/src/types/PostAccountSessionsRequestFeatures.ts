import { TypedSchema, boolean, object, optional, typed } from '@speakeasy-api/tonic';
/**
 * account_features_param
 */
export interface PostAccountSessionsRequestFeatures {
  disableStripeUserAuthentication?: boolean;
  externalAccountCollection?: boolean;
}

export const PostAccountSessionsRequestFeaturesSchema: TypedSchema<PostAccountSessionsRequestFeatures> = typed<PostAccountSessionsRequestFeatures>(object({
  disableStripeUserAuthentication: optional(boolean()),
  externalAccountCollection: optional(boolean()),
}));