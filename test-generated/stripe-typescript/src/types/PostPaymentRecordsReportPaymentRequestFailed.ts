import { TypedSchema, number, object, typed } from '@speakeasy-api/tonic';
/**
 * failed
 *
 * Information about the payment attempt failure.
 */
export interface PostPaymentRecordsReportPaymentRequestFailed {
  failedAt: number;
}

export const PostPaymentRecordsReportPaymentRequestFailedSchema: TypedSchema<PostPaymentRecordsReportPaymentRequestFailed> = typed<PostPaymentRecordsReportPaymentRequestFailed>(object({
  failedAt: number(),
}));