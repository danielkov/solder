import { object, optional, string, typed } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';
/**
 * PaymentFlowsPrivatePaymentMethodsPaycoPaymentMethodOptions
 * 
 * 
 */
export interface PaymentFlowsPrivatePaymentMethodsPaycoPaymentMethodOptions {
  /**
   * Controls when the funds will be captured from the customer's account.
   */
  captureMethod?: string;
}

export const PaymentFlowsPrivatePaymentMethodsPaycoPaymentMethodOptionsSchema: TypedSchema<PaymentFlowsPrivatePaymentMethodsPaycoPaymentMethodOptions> = typed<PaymentFlowsPrivatePaymentMethodsPaycoPaymentMethodOptions>(object({ captureMethod: optional(string()) }));
