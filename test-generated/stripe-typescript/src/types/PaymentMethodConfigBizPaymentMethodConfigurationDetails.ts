import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * PaymentMethodConfigBizPaymentMethodConfigurationDetails
 *
 * 
 */
export interface PaymentMethodConfigBizPaymentMethodConfigurationDetails {
  /**
   * ID of the payment method configuration used.
   */
  id: string;
  /**
   * ID of the parent payment method configuration used.
   */
  parent?: string;
}

export const PaymentMethodConfigBizPaymentMethodConfigurationDetailsSchema: TypedSchema<PaymentMethodConfigBizPaymentMethodConfigurationDetails> = typed<PaymentMethodConfigBizPaymentMethodConfigurationDetails>(object({
  id: string(),
  parent: optional(string()),
}));