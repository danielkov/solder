import { TypedSchema, boolean, object, optional, typed } from '@speakeasy-api/tonic';

import type { PostPaymentLinksRequestInvoiceData } from './PostPaymentLinksRequestInvoiceData';
import { PostPaymentLinksRequestInvoiceDataSchema } from './PostPaymentLinksRequestInvoiceData';
/**
 * invoice_creation_create_params
 *
 * Generate a post-purchase Invoice for one-time payments.
 */
export interface PostPaymentLinksRequestInvoiceCreation {
  enabled: boolean;
  /**
   * invoice_settings_params
   */
  invoiceData?: PostPaymentLinksRequestInvoiceData;
}

export const PostPaymentLinksRequestInvoiceCreationSchema: TypedSchema<PostPaymentLinksRequestInvoiceCreation> = typed<PostPaymentLinksRequestInvoiceCreation>(object({
  enabled: boolean(),
  get invoiceData() { return optional(PostPaymentLinksRequestInvoiceDataSchema) },
}));