import { TypedSchema, array, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostAccountsAccountBankAccountsRequestMetadata } from './PostAccountsAccountBankAccountsRequestMetadata';
import { PostAccountsAccountBankAccountsRequestMetadataSchema } from './PostAccountsAccountBankAccountsRequestMetadata';
import type { PostBillingPortalConfigurationsRequestBusinessProfile } from './PostBillingPortalConfigurationsRequestBusinessProfile';
import { PostBillingPortalConfigurationsRequestBusinessProfileSchema } from './PostBillingPortalConfigurationsRequestBusinessProfile';
import type { PostBillingPortalConfigurationsRequestDefaultReturnUrl } from './PostBillingPortalConfigurationsRequestDefaultReturnUrl';
import { PostBillingPortalConfigurationsRequestDefaultReturnUrlSchema } from './PostBillingPortalConfigurationsRequestDefaultReturnUrl';
import type { PostBillingPortalConfigurationsRequestFeatures } from './PostBillingPortalConfigurationsRequestFeatures';
import { PostBillingPortalConfigurationsRequestFeaturesSchema } from './PostBillingPortalConfigurationsRequestFeatures';
import type { PostBillingPortalConfigurationsRequestLoginPage } from './PostBillingPortalConfigurationsRequestLoginPage';
import { PostBillingPortalConfigurationsRequestLoginPageSchema } from './PostBillingPortalConfigurationsRequestLoginPage';
import type { PostBillingPortalConfigurationsRequestName } from './PostBillingPortalConfigurationsRequestName';
import { PostBillingPortalConfigurationsRequestNameSchema } from './PostBillingPortalConfigurationsRequestName';
export interface PostBillingPortalConfigurationsRequest {
  /**
   * business_profile_create_param
   *
   * The business information shown to customers in the portal.
   */
  businessProfile?: PostBillingPortalConfigurationsRequestBusinessProfile;
  /**
   * The default URL to redirect customers to when they click on the portal's link to return to your website. This can be [overriden](https://stripe.com/docs/api/customer_portal/sessions/create#create_portal_session-return_url) when creating the session.
   */
  defaultReturnUrl?: PostBillingPortalConfigurationsRequestDefaultReturnUrl;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
  /**
   * features_creation_param
   *
   * Information about the features available in the portal.
   */
  features: PostBillingPortalConfigurationsRequestFeatures;
  /**
   * login_page_create_param
   *
   * The hosted login page for this configuration. Learn more about the portal login page in our [integration docs](https://stripe.com/docs/billing/subscriptions/integrating-customer-portal#share).
   */
  loginPage?: PostBillingPortalConfigurationsRequestLoginPage;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: PostAccountsAccountBankAccountsRequestMetadata;
  /**
   * The name of the configuration.
   */
  name?: PostBillingPortalConfigurationsRequestName;
}

export const PostBillingPortalConfigurationsRequestSchema: TypedSchema<PostBillingPortalConfigurationsRequest> = typed<PostBillingPortalConfigurationsRequest>(object({
  get businessProfile() { return optional(PostBillingPortalConfigurationsRequestBusinessProfileSchema) },
  get defaultReturnUrl() { return optional(PostBillingPortalConfigurationsRequestDefaultReturnUrlSchema) },
  expand: optional(array(string())),
  features: PostBillingPortalConfigurationsRequestFeaturesSchema,
  get loginPage() { return optional(PostBillingPortalConfigurationsRequestLoginPageSchema) },
  get metadata() { return optional(PostAccountsAccountBankAccountsRequestMetadataSchema) },
  get name() { return optional(PostBillingPortalConfigurationsRequestNameSchema) },
}));