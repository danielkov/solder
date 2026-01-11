import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * PaymentFlowsPrivatePaymentMethodsPaypalAmountDetailsLineItemPaymentMethodOptions
 *
 * 
 */
export interface PaymentFlowsPrivatePaymentMethodsPaypalAmountDetailsLineItemPaymentMethodOptions {
  /**
   * Type of the line item.
   */
  category?: string;
  /**
   * Description of the line item.
   */
  description?: string;
  /**
   * The Stripe account ID of the connected account that sells the item. This is only needed when using [Separate Charges and Transfers](https://docs.stripe.com/connect/separate-charges-and-transfers).
   */
  soldBy?: string;
}

export const PaymentFlowsPrivatePaymentMethodsPaypalAmountDetailsLineItemPaymentMethodOptionsSchema: TypedSchema<PaymentFlowsPrivatePaymentMethodsPaypalAmountDetailsLineItemPaymentMethodOptions> = typed<PaymentFlowsPrivatePaymentMethodsPaypalAmountDetailsLineItemPaymentMethodOptions>(object({
  category: optional(string()),
  description: optional(string()),
  soldBy: optional(string()),
}));