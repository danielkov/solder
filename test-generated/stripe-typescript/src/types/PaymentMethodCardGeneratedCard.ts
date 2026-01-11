import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { CardGeneratedFromPaymentMethodDetails } from './CardGeneratedFromPaymentMethodDetails';
import { CardGeneratedFromPaymentMethodDetailsSchema } from './CardGeneratedFromPaymentMethodDetails';
import type { SetupAttemptOrRef } from './SetupAttemptOrRef';
import { SetupAttemptOrRefSchema } from './SetupAttemptOrRef';
/**
 * payment_method_card_generated_card
 *
 * 
 */
export interface PaymentMethodCardGeneratedCard {
  /**
   * The charge that created this object.
   */
  charge?: string;
  /**
   * Transaction-specific details of the payment method used in the payment.
   */
  paymentMethodDetails?: CardGeneratedFromPaymentMethodDetails;
  /**
   * The ID of the SetupAttempt that generated this PaymentMethod, if any.
   */
  setupAttempt?: SetupAttemptOrRef;
}

export const PaymentMethodCardGeneratedCardSchema: TypedSchema<PaymentMethodCardGeneratedCard> = typed<PaymentMethodCardGeneratedCard>(object({
  charge: optional(string()),
  get paymentMethodDetails() { return optional(CardGeneratedFromPaymentMethodDetailsSchema) },
  get setupAttempt() { return optional(SetupAttemptOrRefSchema) },
}));