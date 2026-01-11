import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { PaymentFlowsPrivatePaymentMethodsKlarnaDob } from './PaymentFlowsPrivatePaymentMethodsKlarnaDob';
import { PaymentFlowsPrivatePaymentMethodsKlarnaDobSchema } from './PaymentFlowsPrivatePaymentMethodsKlarnaDob';
/**
 * payment_method_klarna
 *
 * 
 */
export interface PaymentMethodKlarna {
  /**
   * The customer's date of birth, if provided.
   */
  dob?: PaymentFlowsPrivatePaymentMethodsKlarnaDob;
}

export const PaymentMethodKlarnaSchema: TypedSchema<PaymentMethodKlarna> = typed<PaymentMethodKlarna>(object({
  get dob() { return optional(PaymentFlowsPrivatePaymentMethodsKlarnaDobSchema) },
}));