import { TypedSchema, array, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostBillingPortalSessionsRequestFlowData } from './PostBillingPortalSessionsRequestFlowData';
import { PostBillingPortalSessionsRequestFlowDataSchema } from './PostBillingPortalSessionsRequestFlowData';
export interface PostBillingPortalSessionsRequest {
  /**
   * The ID of an existing [configuration](https://stripe.com/docs/api/customer_portal/configuration) to use for this session, describing its functionality and features. If not specified, the session uses the default configuration.
   */
  configuration?: string;
  /**
   * The ID of an existing customer.
   */
  customer: string;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
  /**
   * flow_data_param
   *
   * Information about a specific flow for the customer to go through. See the [docs](https://stripe.com/docs/customer-management/portal-deep-links) to learn more about using customer portal deep links and flows.
   */
  flowData?: PostBillingPortalSessionsRequestFlowData;
  /**
   * The IETF language tag of the locale customer portal is displayed in. If blank or auto, the customer’s `preferred_locales` or browser’s locale is used.
   */
  locale?: string;
  /**
   * The `on_behalf_of` account to use for this session. When specified, only subscriptions and invoices with this `on_behalf_of` account appear in the portal. For more information, see the [docs](https://stripe.com/docs/connect/separate-charges-and-transfers#settlement-merchant). Use the [Accounts API](https://stripe.com/docs/api/accounts/object#account_object-settings-branding) to modify the `on_behalf_of` account's branding settings, which the portal displays.
   */
  onBehalfOf?: string;
  /**
   * The default URL to redirect customers to when they click on the portal's link to return to your website.
   */
  returnUrl?: string;
}

export const PostBillingPortalSessionsRequestSchema: TypedSchema<PostBillingPortalSessionsRequest> = typed<PostBillingPortalSessionsRequest>(object({
  configuration: optional(string()),
  customer: string(),
  expand: optional(array(string())),
  get flowData() { return optional(PostBillingPortalSessionsRequestFlowDataSchema) },
  locale: optional(string()),
  onBehalfOf: optional(string()),
  returnUrl: optional(string()),
}));