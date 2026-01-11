import { TypedSchema, boolean, object, optional, typed } from '@speakeasy-api/tonic';
/**
 * issuing_cards_list_features_param
 */
export interface PostAccountSessionsRequestFeatures7 {
  cardManagement?: boolean;
  cardSpendDisputeManagement?: boolean;
  cardholderManagement?: boolean;
  disableStripeUserAuthentication?: boolean;
  spendControlManagement?: boolean;
}

export const PostAccountSessionsRequestFeatures7Schema: TypedSchema<PostAccountSessionsRequestFeatures7> = typed<PostAccountSessionsRequestFeatures7>(object({
  cardManagement: optional(boolean()),
  cardSpendDisputeManagement: optional(boolean()),
  cardholderManagement: optional(boolean()),
  disableStripeUserAuthentication: optional(boolean()),
  spendControlManagement: optional(boolean()),
}));