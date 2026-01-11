import { TypedSchema, array, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * invoice_linked_account_options_filters_param
 */
export interface PostCustomersCustomerSubscriptionsRequestUsBankAccountObjectFilters {
  accountSubcategories?: Array<string>;
}

export const PostCustomersCustomerSubscriptionsRequestUsBankAccountObjectFiltersSchema: TypedSchema<PostCustomersCustomerSubscriptionsRequestUsBankAccountObjectFilters> = typed<PostCustomersCustomerSubscriptionsRequestUsBankAccountObjectFilters>(object({
  accountSubcategories: optional(array(string())),
}));