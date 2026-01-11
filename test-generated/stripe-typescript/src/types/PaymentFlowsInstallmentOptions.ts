import { TypedSchema, boolean, object, optional, typed } from '@speakeasy-api/tonic';

import type { PaymentMethodDetailsCardInstallmentsPlan } from './PaymentMethodDetailsCardInstallmentsPlan';
import { PaymentMethodDetailsCardInstallmentsPlanSchema } from './PaymentMethodDetailsCardInstallmentsPlan';
/**
 * PaymentFlowsInstallmentOptions
 *
 * 
 */
export interface PaymentFlowsInstallmentOptions {
  enabled: boolean;
  /**
   * payment_method_details_card_installments_plan
   *
   * 
   */
  plan?: PaymentMethodDetailsCardInstallmentsPlan;
}

export const PaymentFlowsInstallmentOptionsSchema: TypedSchema<PaymentFlowsInstallmentOptions> = typed<PaymentFlowsInstallmentOptions>(object({
  enabled: boolean(),
  get plan() { return optional(PaymentMethodDetailsCardInstallmentsPlanSchema) },
}));