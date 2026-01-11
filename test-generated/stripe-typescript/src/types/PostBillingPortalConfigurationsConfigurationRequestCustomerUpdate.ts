import { TypedSchema, boolean, object, optional, typed } from '@speakeasy-api/tonic';

import type { PostBillingPortalConfigurationsRequestAllowedUpdates } from './PostBillingPortalConfigurationsRequestAllowedUpdates';
import { PostBillingPortalConfigurationsRequestAllowedUpdatesSchema } from './PostBillingPortalConfigurationsRequestAllowedUpdates';
/**
 * customer_update_updating_param
 */
export interface PostBillingPortalConfigurationsConfigurationRequestCustomerUpdate {
  allowedUpdates?: PostBillingPortalConfigurationsRequestAllowedUpdates;
  enabled?: boolean;
}

export const PostBillingPortalConfigurationsConfigurationRequestCustomerUpdateSchema: TypedSchema<PostBillingPortalConfigurationsConfigurationRequestCustomerUpdate> = typed<PostBillingPortalConfigurationsConfigurationRequestCustomerUpdate>(object({
  get allowedUpdates() { return optional(PostBillingPortalConfigurationsRequestAllowedUpdatesSchema) },
  enabled: optional(boolean()),
}));