import { TypedSchema, number, object, optional, typed } from '@speakeasy-api/tonic';
/**
 * PaymentFlowsPrivatePaymentMethodsKlarnaDOB
 *
 * 
 */
export interface PaymentFlowsPrivatePaymentMethodsKlarnaDob {
  /**
   * The day of birth, between 1 and 31.
   */
  day?: number;
  /**
   * The month of birth, between 1 and 12.
   */
  month?: number;
  /**
   * The four-digit year of birth.
   */
  year?: number;
}

export const PaymentFlowsPrivatePaymentMethodsKlarnaDobSchema: TypedSchema<PaymentFlowsPrivatePaymentMethodsKlarnaDob> = typed<PaymentFlowsPrivatePaymentMethodsKlarnaDob>(object({
  day: optional(number()),
  month: optional(number()),
  year: optional(number()),
}));