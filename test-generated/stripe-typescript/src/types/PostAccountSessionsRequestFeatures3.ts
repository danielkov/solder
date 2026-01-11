import { TypedSchema, boolean, object, optional, typed } from '@speakeasy-api/tonic';
/**
 * financial_account_features_param
 */
export interface PostAccountSessionsRequestFeatures3 {
  disableStripeUserAuthentication?: boolean;
  externalAccountCollection?: boolean;
  sendMoney?: boolean;
  transferBalance?: boolean;
}

export const PostAccountSessionsRequestFeatures3Schema: TypedSchema<PostAccountSessionsRequestFeatures3> = typed<PostAccountSessionsRequestFeatures3>(object({
  disableStripeUserAuthentication: optional(boolean()),
  externalAccountCollection: optional(boolean()),
  sendMoney: optional(boolean()),
  transferBalance: optional(boolean()),
}));