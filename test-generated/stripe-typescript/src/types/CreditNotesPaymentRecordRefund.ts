import { TypedSchema, object, string, typed } from '@speakeasy-api/tonic';
/**
 * CreditNotesPaymentRecordRefund
 *
 * 
 */
export interface CreditNotesPaymentRecordRefund {
  /**
   * ID of the payment record.
   */
  paymentRecord: string;
  /**
   * ID of the refund group.
   */
  refundGroup: string;
}

export const CreditNotesPaymentRecordRefundSchema: TypedSchema<CreditNotesPaymentRecordRefund> = typed<CreditNotesPaymentRecordRefund>(object({
  paymentRecord: string(),
  refundGroup: string(),
}));