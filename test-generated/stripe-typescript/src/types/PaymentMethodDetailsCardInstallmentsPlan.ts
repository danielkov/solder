import { TypedSchema, number, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * payment_method_details_card_installments_plan
 *
 * 
 */
export interface PaymentMethodDetailsCardInstallmentsPlan {
  /**
   * For `fixed_count` installment plans, this is the number of installment payments your customer will make to their credit card.
   */
  count?: number;
  /**
   * For `fixed_count` installment plans, this is the interval between installment payments your customer will make to their credit card.
One of `month`.
   */
  interval?: string;
  /**
   * Type of installment plan, one of `fixed_count`, `bonus`, or `revolving`.
   */
  type: string;
}

export const PaymentMethodDetailsCardInstallmentsPlanSchema: TypedSchema<PaymentMethodDetailsCardInstallmentsPlan> = typed<PaymentMethodDetailsCardInstallmentsPlan>(object({
  count: optional(number()),
  interval: optional(string()),
  type: string(),
}));