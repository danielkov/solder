import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { PostCheckoutSessionsRequestLiability } from './PostCheckoutSessionsRequestLiability';
import { PostCheckoutSessionsRequestLiabilitySchema } from './PostCheckoutSessionsRequestLiability';
/**
 * invoice_settings_params
 */
export interface PostCheckoutSessionsRequestInvoiceSettings {
  /**
   * param
   */
  issuer?: PostCheckoutSessionsRequestLiability;
}

export const PostCheckoutSessionsRequestInvoiceSettingsSchema: TypedSchema<PostCheckoutSessionsRequestInvoiceSettings> = typed<PostCheckoutSessionsRequestInvoiceSettings>(object({
  get issuer() { return optional(PostCheckoutSessionsRequestLiabilitySchema) },
}));