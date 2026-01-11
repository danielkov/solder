import { TypedSchema, number, object, optional, typed } from '@speakeasy-api/tonic';
/**
 * InvoicesPaymentsInvoicePaymentStatusTransitions
 *
 * 
 */
export interface InvoicesPaymentsInvoicePaymentStatusTransitions {
  /**
   * The time that the payment was canceled.
   */
  canceledAt?: number;
  /**
   * The time that the payment succeeded.
   */
  paidAt?: number;
}

export const InvoicesPaymentsInvoicePaymentStatusTransitionsSchema: TypedSchema<InvoicesPaymentsInvoicePaymentStatusTransitions> = typed<InvoicesPaymentsInvoicePaymentStatusTransitions>(object({
  canceledAt: optional(number()),
  paidAt: optional(number()),
}));