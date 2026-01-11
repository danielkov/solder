import { TypedSchema, boolean, object, optional, typed } from '@speakeasy-api/tonic';

import type { PostBillingPortalConfigurationsRequestAllowedUpdates } from './PostBillingPortalConfigurationsRequestAllowedUpdates';
import { PostBillingPortalConfigurationsRequestAllowedUpdatesSchema } from './PostBillingPortalConfigurationsRequestAllowedUpdates';
/**
 * customer_update_creation_param
 */
export interface PostBillingPortalConfigurationsRequestCustomerUpdate {
  allowedUpdates?: PostBillingPortalConfigurationsRequestAllowedUpdates;
  enabled: boolean;
}

export const PostBillingPortalConfigurationsRequestCustomerUpdateSchema: TypedSchema<PostBillingPortalConfigurationsRequestCustomerUpdate> = typed<PostBillingPortalConfigurationsRequestCustomerUpdate>(object({
  get allowedUpdates() { return optional(PostBillingPortalConfigurationsRequestAllowedUpdatesSchema) },
  enabled: boolean(),
}));