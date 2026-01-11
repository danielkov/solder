import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { PostAccountsRequestSupportUrl } from './PostAccountsRequestSupportUrl';
import { PostAccountsRequestSupportUrlSchema } from './PostAccountsRequestSupportUrl';
import type { PostBillingPortalConfigurationsRequestHeadline } from './PostBillingPortalConfigurationsRequestHeadline';
import { PostBillingPortalConfigurationsRequestHeadlineSchema } from './PostBillingPortalConfigurationsRequestHeadline';
/**
 * business_profile_update_param
 *
 * The business information shown to customers in the portal.
 */
export interface PostBillingPortalConfigurationsConfigurationRequestBusinessProfile {
  headline?: PostBillingPortalConfigurationsRequestHeadline;
  privacyPolicyUrl?: PostAccountsRequestSupportUrl;
  termsOfServiceUrl?: PostAccountsRequestSupportUrl;
}

export const PostBillingPortalConfigurationsConfigurationRequestBusinessProfileSchema: TypedSchema<PostBillingPortalConfigurationsConfigurationRequestBusinessProfile> = typed<PostBillingPortalConfigurationsConfigurationRequestBusinessProfile>(object({
  get headline() { return optional(PostBillingPortalConfigurationsRequestHeadlineSchema) },
  get privacyPolicyUrl() { return optional(PostAccountsRequestSupportUrlSchema) },
  get termsOfServiceUrl() { return optional(PostAccountsRequestSupportUrlSchema) },
}));