import { TypedSchema, boolean, object, optional, typed } from '@speakeasy-api/tonic';
/**
 * payment_disputes_features_param
 */
export interface PostAccountSessionsRequestFeatures8 {
  destinationOnBehalfOfChargeManagement?: boolean;
  disputeManagement?: boolean;
  refundManagement?: boolean;
}

export const PostAccountSessionsRequestFeatures8Schema: TypedSchema<PostAccountSessionsRequestFeatures8> = typed<PostAccountSessionsRequestFeatures8>(object({
  destinationOnBehalfOfChargeManagement: optional(boolean()),
  disputeManagement: optional(boolean()),
  refundManagement: optional(boolean()),
}));