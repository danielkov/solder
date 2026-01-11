import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { RevolutPayUnderlyingPaymentMethodFundingDetails } from './RevolutPayUnderlyingPaymentMethodFundingDetails';
import { RevolutPayUnderlyingPaymentMethodFundingDetailsSchema } from './RevolutPayUnderlyingPaymentMethodFundingDetails';
/**
 * payment_method_details_revolut_pay
 *
 * 
 */
export interface PaymentMethodDetailsRevolutPay {
  /**
   * revolut_pay_underlying_payment_method_funding_details
   *
   * 
   */
  funding?: RevolutPayUnderlyingPaymentMethodFundingDetails;
  /**
   * The Revolut Pay transaction ID associated with this payment.
   */
  transactionId?: string;
}

export const PaymentMethodDetailsRevolutPaySchema: TypedSchema<PaymentMethodDetailsRevolutPay> = typed<PaymentMethodDetailsRevolutPay>(object({
  get funding() { return optional(RevolutPayUnderlyingPaymentMethodFundingDetailsSchema) },
  transactionId: optional(string()),
}));