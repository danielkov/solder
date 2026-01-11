import { TypedSchema, boolean, object, optional, typed } from '@speakeasy-api/tonic';
/**
 * issuing_card_features_param
 */
export interface PostAccountSessionsRequestFeatures6 {
  cardManagement?: boolean;
  cardSpendDisputeManagement?: boolean;
  cardholderManagement?: boolean;
  spendControlManagement?: boolean;
}

export const PostAccountSessionsRequestFeatures6Schema: TypedSchema<PostAccountSessionsRequestFeatures6> = typed<PostAccountSessionsRequestFeatures6>(object({
  cardManagement: optional(boolean()),
  cardSpendDisputeManagement: optional(boolean()),
  cardholderManagement: optional(boolean()),
  spendControlManagement: optional(boolean()),
}));