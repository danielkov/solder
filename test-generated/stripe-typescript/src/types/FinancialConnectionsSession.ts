import { TypedSchema, array, boolean, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { AccountsProperty } from './AccountsProperty';
import { AccountsPropertySchema } from './AccountsProperty';
import type { BankConnectionsResourceAccountholder } from './BankConnectionsResourceAccountholder';
import { BankConnectionsResourceAccountholderSchema } from './BankConnectionsResourceAccountholder';
import type { BankConnectionsResourceLinkAccountSessionFilters } from './BankConnectionsResourceLinkAccountSessionFilters';
import { BankConnectionsResourceLinkAccountSessionFiltersSchema } from './BankConnectionsResourceLinkAccountSessionFilters';
/**
 * BankConnectionsResourceLinkAccountSession
 *
 * A Financial Connections Session is the secure way to programmatically launch the client-side Stripe.js modal that lets your users link their accounts.
 */
export interface FinancialConnectionsSession {
  /**
   * The account holder for whom accounts are collected in this session.
   */
  accountHolder?: BankConnectionsResourceAccountholder;
  /**
   * BankConnectionsResourceLinkedAccountList
   *
   * The accounts that were collected as part of this Session.
   */
  accounts: AccountsProperty;
  /**
   * A value that will be passed to the client to launch the authentication flow.
   */
  clientSecret?: string;
  /**
   * BankConnectionsResourceLinkAccountSessionFilters
   *
   * 
   */
  filters?: BankConnectionsResourceLinkAccountSessionFilters;
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: string;
  /**
   * Permissions requested for accounts collected during this session.
   */
  permissions: Array<string>;
  /**
   * Data features requested to be retrieved upon account creation.
   */
  prefetch?: Array<string>;
  /**
   * For webview integrations only. Upon completing OAuth login in the native browser, the user will be redirected to this URL to return to your app.
   */
  returnUrl?: string;
}

export const FinancialConnectionsSessionSchema: TypedSchema<FinancialConnectionsSession> = typed<FinancialConnectionsSession>(object({
  get accountHolder() { return optional(BankConnectionsResourceAccountholderSchema) },
  accounts: AccountsPropertySchema,
  clientSecret: optional(string()),
  get filters() { return optional(BankConnectionsResourceLinkAccountSessionFiltersSchema) },
  id: string(),
  livemode: boolean(),
  object: string(),
  permissions: array(string()),
  prefetch: optional(array(string())),
  returnUrl: optional(string()),
}));