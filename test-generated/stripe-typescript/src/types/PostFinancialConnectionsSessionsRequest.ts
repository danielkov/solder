import { TypedSchema, array, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostFinancialConnectionsSessionsRequestAccountHolder } from './PostFinancialConnectionsSessionsRequestAccountHolder';
import { PostFinancialConnectionsSessionsRequestAccountHolderSchema } from './PostFinancialConnectionsSessionsRequestAccountHolder';
import type { PostFinancialConnectionsSessionsRequestFilters } from './PostFinancialConnectionsSessionsRequestFilters';
import { PostFinancialConnectionsSessionsRequestFiltersSchema } from './PostFinancialConnectionsSessionsRequestFilters';
export interface PostFinancialConnectionsSessionsRequest {
  /**
   * accountholder_params
   *
   * The account holder to link accounts for.
   */
  accountHolder: PostFinancialConnectionsSessionsRequestAccountHolder;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
  /**
   * filters_params
   *
   * Filters to restrict the kinds of accounts to collect.
   */
  filters?: PostFinancialConnectionsSessionsRequestFilters;
  /**
   * List of data features that you would like to request access to.

Possible values are `balances`, `transactions`, `ownership`, and `payment_method`.
   */
  permissions: Array<string>;
  /**
   * List of data features that you would like to retrieve upon account creation.
   */
  prefetch?: Array<string>;
  /**
   * For webview integrations only. Upon completing OAuth login in the native browser, the user will be redirected to this URL to return to your app.
   */
  returnUrl?: string;
}

export const PostFinancialConnectionsSessionsRequestSchema: TypedSchema<PostFinancialConnectionsSessionsRequest> = typed<PostFinancialConnectionsSessionsRequest>(object({
  accountHolder: PostFinancialConnectionsSessionsRequestAccountHolderSchema,
  expand: optional(array(string())),
  get filters() { return optional(PostFinancialConnectionsSessionsRequestFiltersSchema) },
  permissions: array(string()),
  prefetch: optional(array(string())),
  returnUrl: optional(string()),
}));