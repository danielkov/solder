import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { PaymentLinksResourceCustomTextPosition } from './PaymentLinksResourceCustomTextPosition';
import { PaymentLinksResourceCustomTextPositionSchema } from './PaymentLinksResourceCustomTextPosition';
/**
 * PaymentLinksResourceCustomText
 *
 * 
 */
export interface PaymentLinksResourceCustomText {
  /**
   * Custom text that should be displayed after the payment confirmation button.
   */
  afterSubmit?: PaymentLinksResourceCustomTextPosition;
  /**
   * Custom text that should be displayed alongside shipping address collection.
   */
  shippingAddress?: PaymentLinksResourceCustomTextPosition;
  /**
   * Custom text that should be displayed alongside the payment confirmation button.
   */
  submit?: PaymentLinksResourceCustomTextPosition;
  /**
   * Custom text that should be displayed in place of the default terms of service agreement text.
   */
  termsOfServiceAcceptance?: PaymentLinksResourceCustomTextPosition;
}

export const PaymentLinksResourceCustomTextSchema: TypedSchema<PaymentLinksResourceCustomText> = typed<PaymentLinksResourceCustomText>(object({
  get afterSubmit() { return optional(PaymentLinksResourceCustomTextPositionSchema) },
  get shippingAddress() { return optional(PaymentLinksResourceCustomTextPositionSchema) },
  get submit() { return optional(PaymentLinksResourceCustomTextPositionSchema) },
  get termsOfServiceAcceptance() { return optional(PaymentLinksResourceCustomTextPositionSchema) },
}));