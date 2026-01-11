import { TypedSchema, array, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * invoice_payment_method_options_us_bank_account_linked_account_options_filters
 *
 * 
 */
export interface InvoicePaymentMethodOptionsUsBankAccountLinkedAccountOptionsFilters {
  /**
   * The account subcategories to use to filter for possible accounts to link. Valid subcategories are `checking` and `savings`.
   */
  accountSubcategories?: Array<string>;
}

export const InvoicePaymentMethodOptionsUsBankAccountLinkedAccountOptionsFiltersSchema: TypedSchema<InvoicePaymentMethodOptionsUsBankAccountLinkedAccountOptionsFilters> = typed<InvoicePaymentMethodOptionsUsBankAccountLinkedAccountOptionsFilters>(object({
  accountSubcategories: optional(array(string())),
}));