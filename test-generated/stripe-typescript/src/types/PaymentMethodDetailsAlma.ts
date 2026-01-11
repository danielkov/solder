import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { AlmaInstallments } from './AlmaInstallments';
import { AlmaInstallmentsSchema } from './AlmaInstallments';
/**
 * payment_method_details_alma
 *
 * 
 */
export interface PaymentMethodDetailsAlma {
  /**
   * alma_installments
   *
   * 
   */
  installments?: AlmaInstallments;
  /**
   * The Alma transaction ID associated with this payment.
   */
  transactionId?: string;
}

export const PaymentMethodDetailsAlmaSchema: TypedSchema<PaymentMethodDetailsAlma> = typed<PaymentMethodDetailsAlma>(object({
  get installments() { return optional(AlmaInstallmentsSchema) },
  transactionId: optional(string()),
}));