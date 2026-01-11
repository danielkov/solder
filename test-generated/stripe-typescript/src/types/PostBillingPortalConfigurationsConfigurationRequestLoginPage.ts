import { TypedSchema, boolean, object, typed } from '@speakeasy-api/tonic';
/**
 * login_page_update_param
 *
 * The hosted login page for this configuration. Learn more about the portal login page in our [integration docs](https://stripe.com/docs/billing/subscriptions/integrating-customer-portal#share).
 */
export interface PostBillingPortalConfigurationsConfigurationRequestLoginPage {
  enabled: boolean;
}

export const PostBillingPortalConfigurationsConfigurationRequestLoginPageSchema: TypedSchema<PostBillingPortalConfigurationsConfigurationRequestLoginPage> = typed<PostBillingPortalConfigurationsConfigurationRequestLoginPage>(object({
  enabled: boolean(),
}));