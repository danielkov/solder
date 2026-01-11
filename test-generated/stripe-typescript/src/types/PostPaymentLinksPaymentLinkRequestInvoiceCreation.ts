import { TypedSchema, boolean, object, optional, typed } from '@speakeasy-api/tonic';

import type { PostPaymentLinksRequestInvoiceData } from './PostPaymentLinksRequestInvoiceData';
import { PostPaymentLinksRequestInvoiceDataSchema } from './PostPaymentLinksRequestInvoiceData';
/**
 * invoice_creation_update_params
 *
 * Generate a post-purchase Invoice for one-time payments.
 */
export interface PostPaymentLinksPaymentLinkRequestInvoiceCreation {
  enabled: boolean;
  /**
   * invoice_settings_params
   */
  invoiceData?: PostPaymentLinksRequestInvoiceData;
}

export const PostPaymentLinksPaymentLinkRequestInvoiceCreationSchema: TypedSchema<PostPaymentLinksPaymentLinkRequestInvoiceCreation> = typed<PostPaymentLinksPaymentLinkRequestInvoiceCreation>(object({
  enabled: boolean(),
  get invoiceData() { return optional(PostPaymentLinksRequestInvoiceDataSchema) },
}));