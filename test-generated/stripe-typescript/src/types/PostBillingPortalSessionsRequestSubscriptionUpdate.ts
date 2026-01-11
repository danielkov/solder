import { TypedSchema, object, string, typed } from '@speakeasy-api/tonic';
/**
 * flow_data_subscription_update_param
 */
export interface PostBillingPortalSessionsRequestSubscriptionUpdate {
  subscription: string;
}

export const PostBillingPortalSessionsRequestSubscriptionUpdateSchema: TypedSchema<PostBillingPortalSessionsRequestSubscriptionUpdate> = typed<PostBillingPortalSessionsRequestSubscriptionUpdate>(object({
  subscription: string(),
}));