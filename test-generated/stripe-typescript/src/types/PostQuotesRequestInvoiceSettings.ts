import { TypedSchema, number, object, optional, typed } from '@speakeasy-api/tonic';

import type { PostCheckoutSessionsRequestLiability } from './PostCheckoutSessionsRequestLiability';
import { PostCheckoutSessionsRequestLiabilitySchema } from './PostCheckoutSessionsRequestLiability';
/**
 * quote_param
 *
 * All invoices will be billed using the specified settings.
 */
export interface PostQuotesRequestInvoiceSettings {
  daysUntilDue?: number;
  /**
   * param
   */
  issuer?: PostCheckoutSessionsRequestLiability;
}

export const PostQuotesRequestInvoiceSettingsSchema: TypedSchema<PostQuotesRequestInvoiceSettings> = typed<PostQuotesRequestInvoiceSettings>(object({
  daysUntilDue: optional(number()),
  get issuer() { return optional(PostCheckoutSessionsRequestLiabilitySchema) },
}));