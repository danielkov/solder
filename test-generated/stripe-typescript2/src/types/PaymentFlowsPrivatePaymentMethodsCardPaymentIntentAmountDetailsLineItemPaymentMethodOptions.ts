import { object, optional, string, typed } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';
/**
 * PaymentFlowsPrivatePaymentMethodsCardPaymentIntentAmountDetailsLineItemPaymentMethodOptions
 * 
 * 
 */
export interface PaymentFlowsPrivatePaymentMethodsCardPaymentIntentAmountDetailsLineItemPaymentMethodOptions {
  commodityCode?: string;
}

export const PaymentFlowsPrivatePaymentMethodsCardPaymentIntentAmountDetailsLineItemPaymentMethodOptionsSchema: TypedSchema<PaymentFlowsPrivatePaymentMethodsCardPaymentIntentAmountDetailsLineItemPaymentMethodOptions> = typed<PaymentFlowsPrivatePaymentMethodsCardPaymentIntentAmountDetailsLineItemPaymentMethodOptions>(object({ commodityCode: optional(string()) }));
