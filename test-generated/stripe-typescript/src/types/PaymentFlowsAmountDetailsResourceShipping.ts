import { TypedSchema, number, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * PaymentFlowsAmountDetailsResourceShipping
 *
 * 
 */
export interface PaymentFlowsAmountDetailsResourceShipping {
  /**
   * If a physical good is being shipped, the cost of shipping represented in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal). An integer greater than or equal to 0.
   */
  amount?: number;
  /**
   * If a physical good is being shipped, the postal code of where it is being shipped from. At most 10 alphanumeric characters long, hyphens are allowed.
   */
  fromPostalCode?: string;
  /**
   * If a physical good is being shipped, the postal code of where it is being shipped to. At most 10 alphanumeric characters long, hyphens are allowed.
   */
  toPostalCode?: string;
}

export const PaymentFlowsAmountDetailsResourceShippingSchema: TypedSchema<PaymentFlowsAmountDetailsResourceShipping> = typed<PaymentFlowsAmountDetailsResourceShipping>(object({
  amount: optional(number()),
  fromPostalCode: optional(string()),
  toPostalCode: optional(string()),
}));