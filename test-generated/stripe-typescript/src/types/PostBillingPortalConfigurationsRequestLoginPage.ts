import { TypedSchema, boolean, object, typed } from '@speakeasy-api/tonic';
/**
 * login_page_create_param
 *
 * The hosted login page for this configuration. Learn more about the portal login page in our [integration docs](https://stripe.com/docs/billing/subscriptions/integrating-customer-portal#share).
 */
export interface PostBillingPortalConfigurationsRequestLoginPage {
  enabled: boolean;
}

export const PostBillingPortalConfigurationsRequestLoginPageSchema: TypedSchema<PostBillingPortalConfigurationsRequestLoginPage> = typed<PostBillingPortalConfigurationsRequestLoginPage>(object({
  enabled: boolean(),
}));