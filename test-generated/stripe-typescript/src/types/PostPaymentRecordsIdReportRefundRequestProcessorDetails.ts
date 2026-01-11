import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostPaymentRecordsIdReportRefundRequestCustom } from './PostPaymentRecordsIdReportRefundRequestCustom';
import { PostPaymentRecordsIdReportRefundRequestCustomSchema } from './PostPaymentRecordsIdReportRefundRequestCustom';
/**
 * processor_details
 *
 * Processor information for this refund.
 */
export interface PostPaymentRecordsIdReportRefundRequestProcessorDetails {
  /**
   * custom
   */
  custom?: PostPaymentRecordsIdReportRefundRequestCustom;
  type: string;
}

export const PostPaymentRecordsIdReportRefundRequestProcessorDetailsSchema: TypedSchema<PostPaymentRecordsIdReportRefundRequestProcessorDetails> = typed<PostPaymentRecordsIdReportRefundRequestProcessorDetails>(object({
  get custom() { return optional(PostPaymentRecordsIdReportRefundRequestCustomSchema) },
  type: string(),
}));