import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { PostAccountsAccountRequestDefaultAccountTaxIds } from './PostAccountsAccountRequestDefaultAccountTaxIds';
import { PostAccountsAccountRequestDefaultAccountTaxIdsSchema } from './PostAccountsAccountRequestDefaultAccountTaxIds';
import type { PostCheckoutSessionsRequestLiability } from './PostCheckoutSessionsRequestLiability';
import { PostCheckoutSessionsRequestLiabilitySchema } from './PostCheckoutSessionsRequestLiability';
/**
 * invoice_settings_param
 *
 * All invoices will be billed using the specified settings.
 */
export interface PostCustomersCustomerSubscriptionsRequestInvoiceSettings {
  accountTaxIds?: PostAccountsAccountRequestDefaultAccountTaxIds;
  /**
   * param
   */
  issuer?: PostCheckoutSessionsRequestLiability;
}

export const PostCustomersCustomerSubscriptionsRequestInvoiceSettingsSchema: TypedSchema<PostCustomersCustomerSubscriptionsRequestInvoiceSettings> = typed<PostCustomersCustomerSubscriptionsRequestInvoiceSettings>(object({
  get accountTaxIds() { return optional(PostAccountsAccountRequestDefaultAccountTaxIdsSchema) },
  get issuer() { return optional(PostCheckoutSessionsRequestLiabilitySchema) },
}));