import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostPaymentRecordsReportPaymentRequestAddress } from './PostPaymentRecordsReportPaymentRequestAddress';
import { PostPaymentRecordsReportPaymentRequestAddressSchema } from './PostPaymentRecordsReportPaymentRequestAddress';
/**
 * billing_details
 */
export interface PostPaymentRecordsReportPaymentRequestBillingDetails {
  /**
   * address
   */
  address?: PostPaymentRecordsReportPaymentRequestAddress;
  email?: string;
  name?: string;
  phone?: string;
}

export const PostPaymentRecordsReportPaymentRequestBillingDetailsSchema: TypedSchema<PostPaymentRecordsReportPaymentRequestBillingDetails> = typed<PostPaymentRecordsReportPaymentRequestBillingDetails>(object({
  get address() { return optional(PostPaymentRecordsReportPaymentRequestAddressSchema) },
  email: optional(string()),
  name: optional(string()),
  phone: optional(string()),
}));