import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostBillingPortalConfigurationsRequestHeadline } from './PostBillingPortalConfigurationsRequestHeadline';
import { PostBillingPortalConfigurationsRequestHeadlineSchema } from './PostBillingPortalConfigurationsRequestHeadline';
/**
 * business_profile_create_param
 *
 * The business information shown to customers in the portal.
 */
export interface PostBillingPortalConfigurationsRequestBusinessProfile {
  headline?: PostBillingPortalConfigurationsRequestHeadline;
  privacyPolicyUrl?: string;
  termsOfServiceUrl?: string;
}

export const PostBillingPortalConfigurationsRequestBusinessProfileSchema: TypedSchema<PostBillingPortalConfigurationsRequestBusinessProfile> = typed<PostBillingPortalConfigurationsRequestBusinessProfile>(object({
  get headline() { return optional(PostBillingPortalConfigurationsRequestHeadlineSchema) },
  privacyPolicyUrl: optional(string()),
  termsOfServiceUrl: optional(string()),
}));