import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { PaymentMethodDetailsCardInstallmentsPlan } from './PaymentMethodDetailsCardInstallmentsPlan';
import { PaymentMethodDetailsCardInstallmentsPlanSchema } from './PaymentMethodDetailsCardInstallmentsPlan';
/**
 * ConfirmationTokensResourcePaymentMethodOptionsResourceCardResourceInstallment
 *
 * Installment configuration for payments.
 */
export interface ConfirmationTokensResourcePaymentMethodOptionsResourceCardResourceInstallment {
  /**
   * payment_method_details_card_installments_plan
   *
   * 
   */
  plan?: PaymentMethodDetailsCardInstallmentsPlan;
}

export const ConfirmationTokensResourcePaymentMethodOptionsResourceCardResourceInstallmentSchema: TypedSchema<ConfirmationTokensResourcePaymentMethodOptionsResourceCardResourceInstallment> = typed<ConfirmationTokensResourcePaymentMethodOptionsResourceCardResourceInstallment>(object({
  get plan() { return optional(PaymentMethodDetailsCardInstallmentsPlanSchema) },
}));