import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * customer_details
 *
 * Customer information for this payment.
 */
export interface PostPaymentRecordsReportPaymentRequestCustomerDetails {
  customer?: string;
  email?: string;
  name?: string;
  phone?: string;
}

export const PostPaymentRecordsReportPaymentRequestCustomerDetailsSchema: TypedSchema<PostPaymentRecordsReportPaymentRequestCustomerDetails> = typed<PostPaymentRecordsReportPaymentRequestCustomerDetails>(object({
  customer: optional(string()),
  email: optional(string()),
  name: optional(string()),
  phone: optional(string()),
}));