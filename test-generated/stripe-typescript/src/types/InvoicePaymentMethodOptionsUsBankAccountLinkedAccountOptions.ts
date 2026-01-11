import { TypedSchema, array, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { InvoicePaymentMethodOptionsUsBankAccountLinkedAccountOptionsFilters } from './InvoicePaymentMethodOptionsUsBankAccountLinkedAccountOptionsFilters';
import { InvoicePaymentMethodOptionsUsBankAccountLinkedAccountOptionsFiltersSchema } from './InvoicePaymentMethodOptionsUsBankAccountLinkedAccountOptionsFilters';
/**
 * invoice_payment_method_options_us_bank_account_linked_account_options
 *
 * 
 */
export interface InvoicePaymentMethodOptionsUsBankAccountLinkedAccountOptions {
  /**
   * invoice_payment_method_options_us_bank_account_linked_account_options_filters
   *
   * 
   */
  filters?: InvoicePaymentMethodOptionsUsBankAccountLinkedAccountOptionsFilters;
  /**
   * The list of permissions to request. The `payment_method` permission must be included.
   */
  permissions?: Array<string>;
  /**
   * Data features requested to be retrieved upon account creation.
   */
  prefetch?: Array<string>;
}

export const InvoicePaymentMethodOptionsUsBankAccountLinkedAccountOptionsSchema: TypedSchema<InvoicePaymentMethodOptionsUsBankAccountLinkedAccountOptions> = typed<InvoicePaymentMethodOptionsUsBankAccountLinkedAccountOptions>(object({
  get filters() { return optional(InvoicePaymentMethodOptionsUsBankAccountLinkedAccountOptionsFiltersSchema) },
  permissions: optional(array(string())),
  prefetch: optional(array(string())),
}));