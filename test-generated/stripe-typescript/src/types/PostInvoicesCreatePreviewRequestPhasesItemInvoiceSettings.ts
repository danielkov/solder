import { TypedSchema, number, object, optional, typed } from '@speakeasy-api/tonic';

import type { PostAccountsAccountRequestDefaultAccountTaxIds } from './PostAccountsAccountRequestDefaultAccountTaxIds';
import { PostAccountsAccountRequestDefaultAccountTaxIdsSchema } from './PostAccountsAccountRequestDefaultAccountTaxIds';
import type { PostCheckoutSessionsRequestLiability } from './PostCheckoutSessionsRequestLiability';
import { PostCheckoutSessionsRequestLiabilitySchema } from './PostCheckoutSessionsRequestLiability';
/**
 * invoice_settings
 */
export interface PostInvoicesCreatePreviewRequestPhasesItemInvoiceSettings {
  accountTaxIds?: PostAccountsAccountRequestDefaultAccountTaxIds;
  daysUntilDue?: number;
  /**
   * param
   */
  issuer?: PostCheckoutSessionsRequestLiability;
}

export const PostInvoicesCreatePreviewRequestPhasesItemInvoiceSettingsSchema: TypedSchema<PostInvoicesCreatePreviewRequestPhasesItemInvoiceSettings> = typed<PostInvoicesCreatePreviewRequestPhasesItemInvoiceSettings>(object({
  get accountTaxIds() { return optional(PostAccountsAccountRequestDefaultAccountTaxIdsSchema) },
  daysUntilDue: optional(number()),
  get issuer() { return optional(PostCheckoutSessionsRequestLiabilitySchema) },
}));