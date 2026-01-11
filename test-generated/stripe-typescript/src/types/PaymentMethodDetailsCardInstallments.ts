import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { PaymentMethodDetailsCardInstallmentsPlan } from './PaymentMethodDetailsCardInstallmentsPlan';
import { PaymentMethodDetailsCardInstallmentsPlanSchema } from './PaymentMethodDetailsCardInstallmentsPlan';
/**
 * payment_method_details_card_installments
 *
 * 
 */
export interface PaymentMethodDetailsCardInstallments {
  /**
   * Installment plan selected for the payment.
   */
  plan?: PaymentMethodDetailsCardInstallmentsPlan;
}

export const PaymentMethodDetailsCardInstallmentsSchema: TypedSchema<PaymentMethodDetailsCardInstallments> = typed<PaymentMethodDetailsCardInstallments>(object({
  get plan() { return optional(PaymentMethodDetailsCardInstallmentsPlanSchema) },
}));