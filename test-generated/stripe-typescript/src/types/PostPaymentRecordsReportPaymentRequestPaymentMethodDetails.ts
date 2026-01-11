import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostPaymentRecordsReportPaymentRequestBillingDetails } from './PostPaymentRecordsReportPaymentRequestBillingDetails';
import { PostPaymentRecordsReportPaymentRequestBillingDetailsSchema } from './PostPaymentRecordsReportPaymentRequestBillingDetails';
import type { PostPaymentRecordsReportPaymentRequestCustom } from './PostPaymentRecordsReportPaymentRequestCustom';
import { PostPaymentRecordsReportPaymentRequestCustomSchema } from './PostPaymentRecordsReportPaymentRequestCustom';
/**
 * payment_method_details
 *
 * Information about the Payment Method debited for this payment.
 */
export interface PostPaymentRecordsReportPaymentRequestPaymentMethodDetails {
  /**
   * billing_details
   */
  billingDetails?: PostPaymentRecordsReportPaymentRequestBillingDetails;
  /**
   * custom
   */
  custom?: PostPaymentRecordsReportPaymentRequestCustom;
  paymentMethod?: string;
  type?: string;
}

export const PostPaymentRecordsReportPaymentRequestPaymentMethodDetailsSchema: TypedSchema<PostPaymentRecordsReportPaymentRequestPaymentMethodDetails> = typed<PostPaymentRecordsReportPaymentRequestPaymentMethodDetails>(object({
  get billingDetails() { return optional(PostPaymentRecordsReportPaymentRequestBillingDetailsSchema) },
  get custom() { return optional(PostPaymentRecordsReportPaymentRequestCustomSchema) },
  paymentMethod: optional(string()),
  type: optional(string()),
}));