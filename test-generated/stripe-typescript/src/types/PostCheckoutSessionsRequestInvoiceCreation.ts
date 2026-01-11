import { TypedSchema, boolean, object, optional, typed } from '@speakeasy-api/tonic';

import type { PostCheckoutSessionsRequestInvoiceData } from './PostCheckoutSessionsRequestInvoiceData';
import { PostCheckoutSessionsRequestInvoiceDataSchema } from './PostCheckoutSessionsRequestInvoiceData';
/**
 * invoice_creation_params
 *
 * Generate a post-purchase Invoice for one-time payments.
 */
export interface PostCheckoutSessionsRequestInvoiceCreation {
  enabled: boolean;
  /**
   * invoice_data_params
   */
  invoiceData?: PostCheckoutSessionsRequestInvoiceData;
}

export const PostCheckoutSessionsRequestInvoiceCreationSchema: TypedSchema<PostCheckoutSessionsRequestInvoiceCreation> = typed<PostCheckoutSessionsRequestInvoiceCreation>(object({
  enabled: boolean(),
  get invoiceData() { return optional(PostCheckoutSessionsRequestInvoiceDataSchema) },
}));