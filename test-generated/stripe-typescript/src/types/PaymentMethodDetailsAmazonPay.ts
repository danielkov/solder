import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { AmazonPayUnderlyingPaymentMethodFundingDetails } from './AmazonPayUnderlyingPaymentMethodFundingDetails';
import { AmazonPayUnderlyingPaymentMethodFundingDetailsSchema } from './AmazonPayUnderlyingPaymentMethodFundingDetails';
/**
 * payment_method_details_amazon_pay
 *
 * 
 */
export interface PaymentMethodDetailsAmazonPay {
  /**
   * amazon_pay_underlying_payment_method_funding_details
   *
   * 
   */
  funding?: AmazonPayUnderlyingPaymentMethodFundingDetails;
  /**
   * The Amazon Pay transaction ID associated with this payment.
   */
  transactionId?: string;
}

export const PaymentMethodDetailsAmazonPaySchema: TypedSchema<PaymentMethodDetailsAmazonPay> = typed<PaymentMethodDetailsAmazonPay>(object({
  get funding() { return optional(AmazonPayUnderlyingPaymentMethodFundingDetailsSchema) },
  transactionId: optional(string()),
}));