import { TypedSchema, boolean, object, typed } from '@speakeasy-api/tonic';

import type { PostBillingPortalConfigurationsRequestOptions } from './PostBillingPortalConfigurationsRequestOptions';
import { PostBillingPortalConfigurationsRequestOptionsSchema } from './PostBillingPortalConfigurationsRequestOptions';
/**
 * subscription_cancellation_reason_creation_param
 */
export interface PostBillingPortalConfigurationsRequestCancellationReason {
  enabled: boolean;
  options: PostBillingPortalConfigurationsRequestOptions;
}

export const PostBillingPortalConfigurationsRequestCancellationReasonSchema: TypedSchema<PostBillingPortalConfigurationsRequestCancellationReason> = typed<PostBillingPortalConfigurationsRequestCancellationReason>(object({
  enabled: boolean(),
  options: PostBillingPortalConfigurationsRequestOptionsSchema,
}));