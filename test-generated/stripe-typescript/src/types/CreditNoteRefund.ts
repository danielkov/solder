import { TypedSchema, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { CreditNotesPaymentRecordRefund } from './CreditNotesPaymentRecordRefund';
import { CreditNotesPaymentRecordRefundSchema } from './CreditNotesPaymentRecordRefund';
import type { RefundOrRef } from './RefundOrRef';
import { RefundOrRefSchema } from './RefundOrRef';
/**
 * CreditNoteRefund
 *
 * 
 */
export interface CreditNoteRefund {
  /**
   * Amount of the refund that applies to this credit note, in cents (or local equivalent).
   */
  amountRefunded: number;
  /**
   * The PaymentRecord refund details associated with this credit note refund.
   */
  paymentRecordRefund?: CreditNotesPaymentRecordRefund;
  /**
   * ID of the refund.
   */
  refund: RefundOrRef;
  /**
   * Type of the refund, one of `refund` or `payment_record_refund`.
   */
  type?: string;
}

export const CreditNoteRefundSchema: TypedSchema<CreditNoteRefund> = typed<CreditNoteRefund>(object({
  amountRefunded: number(),
  get paymentRecordRefund() { return optional(CreditNotesPaymentRecordRefundSchema) },
  refund: RefundOrRefSchema,
  type: optional(string()),
}));