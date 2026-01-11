import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PaymentMethodDetailsPassthroughCard } from './PaymentMethodDetailsPassthroughCard';
import { PaymentMethodDetailsPassthroughCardSchema } from './PaymentMethodDetailsPassthroughCard';
/**
 * revolut_pay_underlying_payment_method_funding_details
 *
 * 
 */
export interface RevolutPayUnderlyingPaymentMethodFundingDetails {
  /**
   * payment_method_details_passthrough_card
   *
   * 
   */
  card?: PaymentMethodDetailsPassthroughCard;
  /**
   * funding type of the underlying payment method.
   */
  type?: string;
}

export const RevolutPayUnderlyingPaymentMethodFundingDetailsSchema: TypedSchema<RevolutPayUnderlyingPaymentMethodFundingDetails> = typed<RevolutPayUnderlyingPaymentMethodFundingDetails>(object({
  get card() { return optional(PaymentMethodDetailsPassthroughCardSchema) },
  type: optional(string()),
}));