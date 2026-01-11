import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PaymentMethodDomainResourcePaymentMethodStatusDetails } from './PaymentMethodDomainResourcePaymentMethodStatusDetails';
import { PaymentMethodDomainResourcePaymentMethodStatusDetailsSchema } from './PaymentMethodDomainResourcePaymentMethodStatusDetails';
/**
 * PaymentMethodDomainResourcePaymentMethodStatus
 *
 * Indicates the status of a specific payment method on a payment method domain.
 */
export interface PaymentMethodDomainResourcePaymentMethodStatus {
  /**
   * The status of the payment method on the domain.
   */
  status: string;
  /**
   * PaymentMethodDomainResourcePaymentMethodStatusDetails
   *
   * Contains additional details about the status of a payment method for a specific payment method domain.
   */
  statusDetails?: PaymentMethodDomainResourcePaymentMethodStatusDetails;
}

export const PaymentMethodDomainResourcePaymentMethodStatusSchema: TypedSchema<PaymentMethodDomainResourcePaymentMethodStatus> = typed<PaymentMethodDomainResourcePaymentMethodStatus>(object({
  status: string(),
  get statusDetails() { return optional(PaymentMethodDomainResourcePaymentMethodStatusDetailsSchema) },
}));