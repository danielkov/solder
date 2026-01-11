import { TypedSchema, number, object, optional, typed } from '@speakeasy-api/tonic';
/**
 * PaymentFlowsAmountDetailsClientResourceTip
 *
 * 
 */
export interface PaymentFlowsAmountDetailsClientResourceTip {
  /**
   * Portion of the amount that corresponds to a tip.
   */
  amount?: number;
}

export const PaymentFlowsAmountDetailsClientResourceTipSchema: TypedSchema<PaymentFlowsAmountDetailsClientResourceTip> = typed<PaymentFlowsAmountDetailsClientResourceTip>(object({
  amount: optional(number()),
}));