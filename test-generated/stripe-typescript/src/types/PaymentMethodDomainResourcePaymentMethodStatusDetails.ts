import { TypedSchema, object, string, typed } from '@speakeasy-api/tonic';
/**
 * PaymentMethodDomainResourcePaymentMethodStatusDetails
 *
 * Contains additional details about the status of a payment method for a specific payment method domain.
 */
export interface PaymentMethodDomainResourcePaymentMethodStatusDetails {
  /**
   * The error message associated with the status of the payment method on the domain.
   */
  errorMessage: string;
}

export const PaymentMethodDomainResourcePaymentMethodStatusDetailsSchema: TypedSchema<PaymentMethodDomainResourcePaymentMethodStatusDetails> = typed<PaymentMethodDomainResourcePaymentMethodStatusDetails>(object({
  errorMessage: string(),
}));