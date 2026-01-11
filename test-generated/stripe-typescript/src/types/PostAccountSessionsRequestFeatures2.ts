import { TypedSchema, boolean, object, optional, typed } from '@speakeasy-api/tonic';
/**
 * disputes_list_features_param
 */
export interface PostAccountSessionsRequestFeatures2 {
  capturePayments?: boolean;
  destinationOnBehalfOfChargeManagement?: boolean;
  disputeManagement?: boolean;
  refundManagement?: boolean;
}

export const PostAccountSessionsRequestFeatures2Schema: TypedSchema<PostAccountSessionsRequestFeatures2> = typed<PostAccountSessionsRequestFeatures2>(object({
  capturePayments: optional(boolean()),
  destinationOnBehalfOfChargeManagement: optional(boolean()),
  disputeManagement: optional(boolean()),
  refundManagement: optional(boolean()),
}));