import { TypedSchema, object, string, typed } from '@speakeasy-api/tonic';
/**
 * payment_record_refund_params
 */
export interface PostCreditNotesRequestRefundsItemPaymentRecordRefund {
  paymentRecord: string;
  refundGroup: string;
}

export const PostCreditNotesRequestRefundsItemPaymentRecordRefundSchema: TypedSchema<PostCreditNotesRequestRefundsItemPaymentRecordRefund> = typed<PostCreditNotesRequestRefundsItemPaymentRecordRefund>(object({
  paymentRecord: string(),
  refundGroup: string(),
}));