import { TypedSchema, array, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostCustomersCustomerSubscriptionsRequestUsBankAccountObjectFilters } from './PostCustomersCustomerSubscriptionsRequestUsBankAccountObjectFilters';
import { PostCustomersCustomerSubscriptionsRequestUsBankAccountObjectFiltersSchema } from './PostCustomersCustomerSubscriptionsRequestUsBankAccountObjectFilters';
/**
 * invoice_linked_account_options_param
 */
export interface PostCustomersCustomerSubscriptionsRequestUsBankAccountObjectFinancialConnections {
  /**
   * invoice_linked_account_options_filters_param
   */
  filters?: PostCustomersCustomerSubscriptionsRequestUsBankAccountObjectFilters;
  permissions?: Array<string>;
  prefetch?: Array<string>;
}

export const PostCustomersCustomerSubscriptionsRequestUsBankAccountObjectFinancialConnectionsSchema: TypedSchema<PostCustomersCustomerSubscriptionsRequestUsBankAccountObjectFinancialConnections> = typed<PostCustomersCustomerSubscriptionsRequestUsBankAccountObjectFinancialConnections>(object({
  get filters() { return optional(PostCustomersCustomerSubscriptionsRequestUsBankAccountObjectFiltersSchema) },
  permissions: optional(array(string())),
  prefetch: optional(array(string())),
}));