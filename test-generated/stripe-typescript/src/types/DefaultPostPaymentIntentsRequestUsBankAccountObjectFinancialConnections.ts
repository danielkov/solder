import { TypedSchema, array, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { DefaultPostPaymentIntentsRequestUsBankAccountObjectFilters } from './DefaultPostPaymentIntentsRequestUsBankAccountObjectFilters';
import { DefaultPostPaymentIntentsRequestUsBankAccountObjectFiltersSchema } from './DefaultPostPaymentIntentsRequestUsBankAccountObjectFilters';
/**
 * linked_account_options_param
 */
export interface DefaultPostPaymentIntentsRequestUsBankAccountObjectFinancialConnections {
  /**
   * linked_account_options_filters_param
   */
  filters?: DefaultPostPaymentIntentsRequestUsBankAccountObjectFilters;
  permissions?: Array<string>;
  prefetch?: Array<string>;
  returnUrl?: string;
}

export const DefaultPostPaymentIntentsRequestUsBankAccountObjectFinancialConnectionsSchema: TypedSchema<DefaultPostPaymentIntentsRequestUsBankAccountObjectFinancialConnections> = typed<DefaultPostPaymentIntentsRequestUsBankAccountObjectFinancialConnections>(object({
  get filters() { return optional(DefaultPostPaymentIntentsRequestUsBankAccountObjectFiltersSchema) },
  permissions: optional(array(string())),
  prefetch: optional(array(string())),
  returnUrl: optional(string()),
}));