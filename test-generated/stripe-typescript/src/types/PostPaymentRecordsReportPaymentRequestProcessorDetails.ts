import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { DefaultPostPaymentRecordsReportPaymentRequestCustom } from './DefaultPostPaymentRecordsReportPaymentRequestCustom';
import { DefaultPostPaymentRecordsReportPaymentRequestCustomSchema } from './DefaultPostPaymentRecordsReportPaymentRequestCustom';
/**
 * processor_details
 *
 * Processor information for this payment.
 */
export interface PostPaymentRecordsReportPaymentRequestProcessorDetails {
  /**
   * custom
   */
  custom?: DefaultPostPaymentRecordsReportPaymentRequestCustom;
  type: string;
}

export const PostPaymentRecordsReportPaymentRequestProcessorDetailsSchema: TypedSchema<PostPaymentRecordsReportPaymentRequestProcessorDetails> = typed<PostPaymentRecordsReportPaymentRequestProcessorDetails>(object({
  get custom() { return optional(DefaultPostPaymentRecordsReportPaymentRequestCustomSchema) },
  type: string(),
}));