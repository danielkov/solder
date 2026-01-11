import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostAccountsAccountRequestDefaultAccountTaxIds } from './PostAccountsAccountRequestDefaultAccountTaxIds';
import { PostAccountsAccountRequestDefaultAccountTaxIdsSchema } from './PostAccountsAccountRequestDefaultAccountTaxIds';
/**
 * invoices_settings_specs
 */
export interface PostAccountsAccountRequestInvoices {
  defaultAccountTaxIds?: PostAccountsAccountRequestDefaultAccountTaxIds;
  hostedPaymentMethodSave?: string;
}

export const PostAccountsAccountRequestInvoicesSchema: TypedSchema<PostAccountsAccountRequestInvoices> = typed<PostAccountsAccountRequestInvoices>(object({
  get defaultAccountTaxIds() { return optional(PostAccountsAccountRequestDefaultAccountTaxIdsSchema) },
  hostedPaymentMethodSave: optional(string()),
}));