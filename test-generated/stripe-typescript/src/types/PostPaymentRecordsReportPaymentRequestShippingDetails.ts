import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostPaymentRecordsReportPaymentRequestAddress } from './PostPaymentRecordsReportPaymentRequestAddress';
import { PostPaymentRecordsReportPaymentRequestAddressSchema } from './PostPaymentRecordsReportPaymentRequestAddress';
/**
 * shipping_details
 *
 * Shipping information for this payment.
 */
export interface PostPaymentRecordsReportPaymentRequestShippingDetails {
  /**
   * address
   */
  address?: PostPaymentRecordsReportPaymentRequestAddress;
  name?: string;
  phone?: string;
}

export const PostPaymentRecordsReportPaymentRequestShippingDetailsSchema: TypedSchema<PostPaymentRecordsReportPaymentRequestShippingDetails> = typed<PostPaymentRecordsReportPaymentRequestShippingDetails>(object({
  get address() { return optional(PostPaymentRecordsReportPaymentRequestAddressSchema) },
  name: optional(string()),
  phone: optional(string()),
}));