import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';
/**
 * The default URL to redirect customers to when they click on the portal's link to return to your website. This can be [overriden](https://stripe.com/docs/api/customer_portal/sessions/create#create_portal_session-return_url) when creating the session.
 */
export type PostBillingPortalConfigurationsRequestDefaultReturnUrl = string | string;

export const PostBillingPortalConfigurationsRequestDefaultReturnUrlSchema: TypedSchema<PostBillingPortalConfigurationsRequestDefaultReturnUrl> = typed<PostBillingPortalConfigurationsRequestDefaultReturnUrl>(union(string(), string()));
