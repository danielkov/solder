import { TypedSchema, number, object, typed } from '@speakeasy-api/tonic';
/**
 * refunded
 *
 * Information about the payment attempt refund.
 */
export interface PostPaymentRecordsIdReportRefundRequestRefunded {
  refundedAt: number;
}

export const PostPaymentRecordsIdReportRefundRequestRefundedSchema: TypedSchema<PostPaymentRecordsIdReportRefundRequestRefunded> = typed<PostPaymentRecordsIdReportRefundRequestRefunded>(object({
  refundedAt: number(),
}));