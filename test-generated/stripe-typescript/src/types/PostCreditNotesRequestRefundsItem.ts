import { TypedSchema, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostCreditNotesRequestRefundsItemPaymentRecordRefund } from './PostCreditNotesRequestRefundsItemPaymentRecordRefund';
import { PostCreditNotesRequestRefundsItemPaymentRecordRefundSchema } from './PostCreditNotesRequestRefundsItemPaymentRecordRefund';
/**
 * credit_note_refund_params
 */
export interface PostCreditNotesRequestRefundsItem {
  amountRefunded?: number;
  /**
   * payment_record_refund_params
   */
  paymentRecordRefund?: PostCreditNotesRequestRefundsItemPaymentRecordRefund;
  refund?: string;
  type?: string;
}

export const PostCreditNotesRequestRefundsItemSchema: TypedSchema<PostCreditNotesRequestRefundsItem> = typed<PostCreditNotesRequestRefundsItem>(object({
  amountRefunded: optional(number()),
  get paymentRecordRefund() { return optional(PostCreditNotesRequestRefundsItemPaymentRecordRefundSchema) },
  refund: optional(string()),
  type: optional(string()),
}));