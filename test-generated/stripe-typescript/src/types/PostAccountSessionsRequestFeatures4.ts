import { TypedSchema, boolean, object, optional, typed } from '@speakeasy-api/tonic';
/**
 * financial_account_transactions_features_param
 */
export interface PostAccountSessionsRequestFeatures4 {
  cardSpendDisputeManagement?: boolean;
}

export const PostAccountSessionsRequestFeatures4Schema: TypedSchema<PostAccountSessionsRequestFeatures4> = typed<PostAccountSessionsRequestFeatures4>(object({
  cardSpendDisputeManagement: optional(boolean()),
}));