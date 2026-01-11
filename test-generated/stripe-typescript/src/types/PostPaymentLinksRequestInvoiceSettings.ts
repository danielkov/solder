import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { PostCheckoutSessionsRequestLiability } from './PostCheckoutSessionsRequestLiability';
import { PostCheckoutSessionsRequestLiabilitySchema } from './PostCheckoutSessionsRequestLiability';
/**
 * subscription_data_invoice_settings_params
 */
export interface PostPaymentLinksRequestInvoiceSettings {
  /**
   * param
   */
  issuer?: PostCheckoutSessionsRequestLiability;
}

export const PostPaymentLinksRequestInvoiceSettingsSchema: TypedSchema<PostPaymentLinksRequestInvoiceSettings> = typed<PostPaymentLinksRequestInvoiceSettings>(object({
  get issuer() { return optional(PostCheckoutSessionsRequestLiabilitySchema) },
}));