import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * PaymentFlowsPrivatePaymentMethodsKlarnaPaymentIntentAmountDetailsLineItemPaymentMethodOptions
 *
 * 
 */
export interface PaymentFlowsPrivatePaymentMethodsKlarnaPaymentIntentAmountDetailsLineItemPaymentMethodOptions {
  imageUrl?: string;
  productUrl?: string;
  reference?: string;
  subscriptionReference?: string;
}

export const PaymentFlowsPrivatePaymentMethodsKlarnaPaymentIntentAmountDetailsLineItemPaymentMethodOptionsSchema: TypedSchema<PaymentFlowsPrivatePaymentMethodsKlarnaPaymentIntentAmountDetailsLineItemPaymentMethodOptions> = typed<PaymentFlowsPrivatePaymentMethodsKlarnaPaymentIntentAmountDetailsLineItemPaymentMethodOptions>(object({
  imageUrl: optional(string()),
  productUrl: optional(string()),
  reference: optional(string()),
  subscriptionReference: optional(string()),
}));