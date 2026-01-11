import { TypedSchema, array, boolean, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { DefaultPostAccountsRequestMetadata } from './DefaultPostAccountsRequestMetadata';
import { DefaultPostAccountsRequestMetadataSchema } from './DefaultPostAccountsRequestMetadata';
import type { PostBillingPortalConfigurationsConfigurationRequestBusinessProfile } from './PostBillingPortalConfigurationsConfigurationRequestBusinessProfile';
import { PostBillingPortalConfigurationsConfigurationRequestBusinessProfileSchema } from './PostBillingPortalConfigurationsConfigurationRequestBusinessProfile';
import type { PostBillingPortalConfigurationsConfigurationRequestFeatures } from './PostBillingPortalConfigurationsConfigurationRequestFeatures';
import { PostBillingPortalConfigurationsConfigurationRequestFeaturesSchema } from './PostBillingPortalConfigurationsConfigurationRequestFeatures';
import type { PostBillingPortalConfigurationsConfigurationRequestLoginPage } from './PostBillingPortalConfigurationsConfigurationRequestLoginPage';
import { PostBillingPortalConfigurationsConfigurationRequestLoginPageSchema } from './PostBillingPortalConfigurationsConfigurationRequestLoginPage';
import type { PostBillingPortalConfigurationsRequestDefaultReturnUrl } from './PostBillingPortalConfigurationsRequestDefaultReturnUrl';
import { PostBillingPortalConfigurationsRequestDefaultReturnUrlSchema } from './PostBillingPortalConfigurationsRequestDefaultReturnUrl';
import type { PostBillingPortalConfigurationsRequestName } from './PostBillingPortalConfigurationsRequestName';
import { PostBillingPortalConfigurationsRequestNameSchema } from './PostBillingPortalConfigurationsRequestName';
export interface PostBillingPortalConfigurationsConfigurationRequest {
  /**
   * Whether the configuration is active and can be used to create portal sessions.
   */
  active?: boolean;
  /**
   * business_profile_update_param
   *
   * The business information shown to customers in the portal.
   */
  businessProfile?: PostBillingPortalConfigurationsConfigurationRequestBusinessProfile;
  /**
   * The default URL to redirect customers to when they click on the portal's link to return to your website. This can be [overriden](https://stripe.com/docs/api/customer_portal/sessions/create#create_portal_session-return_url) when creating the session.
   */
  defaultReturnUrl?: PostBillingPortalConfigurationsRequestDefaultReturnUrl;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
  /**
   * features_updating_param
   *
   * Information about the features available in the portal.
   */
  features?: PostBillingPortalConfigurationsConfigurationRequestFeatures;
  /**
   * login_page_update_param
   *
   * The hosted login page for this configuration. Learn more about the portal login page in our [integration docs](https://stripe.com/docs/billing/subscriptions/integrating-customer-portal#share).
   */
  loginPage?: PostBillingPortalConfigurationsConfigurationRequestLoginPage;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: DefaultPostAccountsRequestMetadata;
  /**
   * The name of the configuration.
   */
  name?: PostBillingPortalConfigurationsRequestName;
}

export const PostBillingPortalConfigurationsConfigurationRequestSchema: TypedSchema<PostBillingPortalConfigurationsConfigurationRequest> = typed<PostBillingPortalConfigurationsConfigurationRequest>(object({
  active: optional(boolean()),
  get businessProfile() { return optional(PostBillingPortalConfigurationsConfigurationRequestBusinessProfileSchema) },
  get defaultReturnUrl() { return optional(PostBillingPortalConfigurationsRequestDefaultReturnUrlSchema) },
  expand: optional(array(string())),
  get features() { return optional(PostBillingPortalConfigurationsConfigurationRequestFeaturesSchema) },
  get loginPage() { return optional(PostBillingPortalConfigurationsConfigurationRequestLoginPageSchema) },
  get metadata() { return optional(DefaultPostAccountsRequestMetadataSchema) },
  get name() { return optional(PostBillingPortalConfigurationsRequestNameSchema) },
}));