import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { ChargeOrRef } from './ChargeOrRef';
import { ChargeOrRefSchema } from './ChargeOrRef';
import type { PaymentIntentOrRef } from './PaymentIntentOrRef';
import { PaymentIntentOrRefSchema } from './PaymentIntentOrRef';
import type { PaymentRecordOrRef } from './PaymentRecordOrRef';
import { PaymentRecordOrRefSchema } from './PaymentRecordOrRef';
/**
 * InvoicesPaymentsInvoicePaymentAssociatedPayment
 *
 * 
 */
export interface InvoicesPaymentsInvoicePaymentAssociatedPayment {
  /**
   * ID of the successful charge for this payment when `type` is `charge`.Note: charge is only surfaced if the charge object is not associated with a payment intent. If the charge object does have a payment intent, the Invoice Payment surfaces the payment intent instead.
   */
  charge?: ChargeOrRef;
  /**
   * ID of the PaymentIntent associated with this payment when `type` is `payment_intent`. Note: This property is only populated for invoices finalized on or after March 15th, 2019.
   */
  paymentIntent?: PaymentIntentOrRef;
  /**
   * ID of the PaymentRecord associated with this payment when `type` is `payment_record`.
   */
  paymentRecord?: PaymentRecordOrRef;
  /**
   * Type of payment object associated with this invoice payment.
   */
  type: string;
}

export const InvoicesPaymentsInvoicePaymentAssociatedPaymentSchema: TypedSchema<InvoicesPaymentsInvoicePaymentAssociatedPayment> = typed<InvoicesPaymentsInvoicePaymentAssociatedPayment>(object({
  get charge() { return optional(ChargeOrRefSchema) },
  get paymentIntent() { return optional(PaymentIntentOrRefSchema) },
  get paymentRecord() { return optional(PaymentRecordOrRefSchema) },
  type: string(),
}));