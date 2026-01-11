import { TypedSchema, array, boolean, object, optional, typed } from '@speakeasy-api/tonic';

import type { PaymentMethodDetailsCardInstallmentsPlan } from './PaymentMethodDetailsCardInstallmentsPlan';
import { PaymentMethodDetailsCardInstallmentsPlanSchema } from './PaymentMethodDetailsCardInstallmentsPlan';
/**
 * payment_method_options_card_installments
 *
 * 
 */
export interface PaymentMethodOptionsCardInstallments {
  /**
   * Installment plans that may be selected for this PaymentIntent.
   */
  availablePlans?: Array<PaymentMethodDetailsCardInstallmentsPlan>;
  /**
   * Whether Installments are enabled for this PaymentIntent.
   */
  enabled: boolean;
  /**
   * Installment plan selected for this PaymentIntent.
   */
  plan?: PaymentMethodDetailsCardInstallmentsPlan;
}

export const PaymentMethodOptionsCardInstallmentsSchema: TypedSchema<PaymentMethodOptionsCardInstallments> = typed<PaymentMethodOptionsCardInstallments>(object({
  get availablePlans() { return optional(array(PaymentMethodDetailsCardInstallmentsPlanSchema)) },
  enabled: boolean(),
  get plan() { return optional(PaymentMethodDetailsCardInstallmentsPlanSchema) },
}));