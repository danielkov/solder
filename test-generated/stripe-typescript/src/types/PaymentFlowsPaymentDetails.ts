import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * PaymentFlowsPaymentDetails
 *
 * 
 */
export interface PaymentFlowsPaymentDetails {
  /**
   * A unique value to identify the customer. This field is available only for card payments.

This field is truncated to 25 alphanumeric characters, excluding spaces, before being sent to card networks.
   */
  customerReference?: string;
  /**
   * A unique value assigned by the business to identify the transaction. Required for L2 and L3 rates.

Required when the Payment Method Types array contains `card`, including when [automatic_payment_methods.enabled](/api/payment_intents/create#create_payment_intent-automatic_payment_methods-enabled) is set to `true`.

For Cards, this field is truncated to 25 alphanumeric characters, excluding spaces, before being sent to card networks. For Klarna, this field is truncated to 255 characters and is visible to customers when they view the order in the Klarna app.
   */
  orderReference?: string;
}

export const PaymentFlowsPaymentDetailsSchema: TypedSchema<PaymentFlowsPaymentDetails> = typed<PaymentFlowsPaymentDetails>(object({
  customerReference: optional(string()),
  orderReference: optional(string()),
}));