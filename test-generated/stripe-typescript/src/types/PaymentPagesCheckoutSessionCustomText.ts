import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { PaymentPagesCheckoutSessionCustomTextPosition } from './PaymentPagesCheckoutSessionCustomTextPosition';
import { PaymentPagesCheckoutSessionCustomTextPositionSchema } from './PaymentPagesCheckoutSessionCustomTextPosition';
/**
 * PaymentPagesCheckoutSessionCustomText
 *
 * 
 */
export interface PaymentPagesCheckoutSessionCustomText {
  /**
   * Custom text that should be displayed after the payment confirmation button.
   */
  afterSubmit?: PaymentPagesCheckoutSessionCustomTextPosition;
  /**
   * Custom text that should be displayed alongside shipping address collection.
   */
  shippingAddress?: PaymentPagesCheckoutSessionCustomTextPosition;
  /**
   * Custom text that should be displayed alongside the payment confirmation button.
   */
  submit?: PaymentPagesCheckoutSessionCustomTextPosition;
  /**
   * Custom text that should be displayed in place of the default terms of service agreement text.
   */
  termsOfServiceAcceptance?: PaymentPagesCheckoutSessionCustomTextPosition;
}

export const PaymentPagesCheckoutSessionCustomTextSchema: TypedSchema<PaymentPagesCheckoutSessionCustomText> = typed<PaymentPagesCheckoutSessionCustomText>(object({
  get afterSubmit() { return optional(PaymentPagesCheckoutSessionCustomTextPositionSchema) },
  get shippingAddress() { return optional(PaymentPagesCheckoutSessionCustomTextPositionSchema) },
  get submit() { return optional(PaymentPagesCheckoutSessionCustomTextPositionSchema) },
  get termsOfServiceAcceptance() { return optional(PaymentPagesCheckoutSessionCustomTextPositionSchema) },
}));