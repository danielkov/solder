import { TypedSchema, boolean, object, optional, typed } from '@speakeasy-api/tonic';

import type { PostBillingPortalConfigurationsRequestOptions } from './PostBillingPortalConfigurationsRequestOptions';
import { PostBillingPortalConfigurationsRequestOptionsSchema } from './PostBillingPortalConfigurationsRequestOptions';
/**
 * subscription_cancellation_reason_updating_param
 */
export interface PostBillingPortalConfigurationsConfigurationRequestCancellationReason {
  enabled: boolean;
  options?: PostBillingPortalConfigurationsRequestOptions;
}

export const PostBillingPortalConfigurationsConfigurationRequestCancellationReasonSchema: TypedSchema<PostBillingPortalConfigurationsConfigurationRequestCancellationReason> = typed<PostBillingPortalConfigurationsConfigurationRequestCancellationReason>(object({
  enabled: boolean(),
  get options() { return optional(PostBillingPortalConfigurationsRequestOptionsSchema) },
}));