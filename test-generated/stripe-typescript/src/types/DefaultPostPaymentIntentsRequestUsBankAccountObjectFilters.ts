import { TypedSchema, array, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * linked_account_options_filters_param
 */
export interface DefaultPostPaymentIntentsRequestUsBankAccountObjectFilters {
  accountSubcategories?: Array<string>;
}

export const DefaultPostPaymentIntentsRequestUsBankAccountObjectFiltersSchema: TypedSchema<DefaultPostPaymentIntentsRequestUsBankAccountObjectFilters> = typed<DefaultPostPaymentIntentsRequestUsBankAccountObjectFilters>(object({
  accountSubcategories: optional(array(string())),
}));