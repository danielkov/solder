import { TypedSchema, boolean, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { ConfigurationOrRef } from './ConfigurationOrRef';
import { ConfigurationOrRefSchema } from './ConfigurationOrRef';
import type { PortalFlowsFlow } from './PortalFlowsFlow';
import { PortalFlowsFlowSchema } from './PortalFlowsFlow';
/**
 * PortalSession
 *
 * The Billing customer portal is a Stripe-hosted UI for subscription and
billing management.

A portal configuration describes the functionality and features that you
want to provide to your customers through the portal.

A portal session describes the instantiation of the customer portal for
a particular customer. By visiting the session's URL, the customer
can manage their subscriptions and billing details. For security reasons,
sessions are short-lived and will expire if the customer does not visit the URL.
Create sessions on-demand when customers intend to manage their subscriptions
and billing details.

Related guide: [Customer management](/customer-management)
 */
export interface BillingPortalSession {
  /**
   * The configuration used by this session, describing the features available.
   */
  configuration: ConfigurationOrRef;
  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;
  /**
   * The ID of the customer for this session.
   */
  customer: string;
  /**
   * Information about a specific flow for the customer to go through. See the [docs](https://stripe.com/docs/customer-management/portal-deep-links) to learn more about using customer portal deep links and flows.
   */
  flow?: PortalFlowsFlow;
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
  /**
   * The IETF language tag of the locale Customer Portal is displayed in. If blank or auto, the customer’s `preferred_locales` or browser’s locale is used.
   */
  locale?: string;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: string;
  /**
   * The account for which the session was created on behalf of. When specified, only subscriptions and invoices with this `on_behalf_of` account appear in the portal. For more information, see the [docs](https://stripe.com/docs/connect/separate-charges-and-transfers#settlement-merchant). Use the [Accounts API](https://stripe.com/docs/api/accounts/object#account_object-settings-branding) to modify the `on_behalf_of` account's branding settings, which the portal displays.
   */
  onBehalfOf?: string;
  /**
   * The URL to redirect customers to when they click on the portal's link to return to your website.
   */
  returnUrl?: string;
  /**
   * The short-lived URL of the session that gives customers access to the customer portal.
   */
  url: string;
}

export const BillingPortalSessionSchema: TypedSchema<BillingPortalSession> = typed<BillingPortalSession>(object({
  configuration: ConfigurationOrRefSchema,
  created: number(),
  customer: string(),
  get flow() { return optional(PortalFlowsFlowSchema) },
  id: string(),
  livemode: boolean(),
  locale: optional(string()),
  object: string(),
  onBehalfOf: optional(string()),
  returnUrl: optional(string()),
  url: string(),
}));