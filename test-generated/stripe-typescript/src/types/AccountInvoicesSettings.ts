import { TypedSchema, array, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { DefaultAccountTaxIdsItemOrRef } from './DefaultAccountTaxIdsItemOrRef';
import { DefaultAccountTaxIdsItemOrRefSchema } from './DefaultAccountTaxIdsItemOrRef';
/**
 * AccountInvoicesSettings
 *
 * 
 */
export interface AccountInvoicesSettings {
  /**
   * The list of default Account Tax IDs to automatically include on invoices. Account Tax IDs get added when an invoice is finalized.
   */
  defaultAccountTaxIds?: Array<DefaultAccountTaxIdsItemOrRef>;
  /**
   * Whether to save the payment method after a payment is completed for a one-time invoice or a subscription invoice when the customer already has a default payment method on the hosted invoice page.
   */
  hostedPaymentMethodSave?: string;
}

export const AccountInvoicesSettingsSchema: TypedSchema<AccountInvoicesSettings> = typed<AccountInvoicesSettings>(object({
  get defaultAccountTaxIds() { return optional(array(DefaultAccountTaxIdsItemOrRefSchema)) },
  hostedPaymentMethodSave: optional(string()),
}));