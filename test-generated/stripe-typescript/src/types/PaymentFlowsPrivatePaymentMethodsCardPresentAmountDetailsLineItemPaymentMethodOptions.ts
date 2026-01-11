import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * PaymentFlowsPrivatePaymentMethodsCardPresentAmountDetailsLineItemPaymentMethodOptions
 *
 * 
 */
export interface PaymentFlowsPrivatePaymentMethodsCardPresentAmountDetailsLineItemPaymentMethodOptions {
  commodityCode?: string;
}

export const PaymentFlowsPrivatePaymentMethodsCardPresentAmountDetailsLineItemPaymentMethodOptionsSchema: TypedSchema<PaymentFlowsPrivatePaymentMethodsCardPresentAmountDetailsLineItemPaymentMethodOptions> = typed<PaymentFlowsPrivatePaymentMethodsCardPresentAmountDetailsLineItemPaymentMethodOptions>(object({
  commodityCode: optional(string()),
}));