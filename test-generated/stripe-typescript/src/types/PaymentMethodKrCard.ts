import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * payment_method_kr_card
 *
 * 
 */
export interface PaymentMethodKrCard {
  /**
   * The local credit or debit card brand.
   */
  brand?: string;
  /**
   * The last four digits of the card. This may not be present for American Express cards.
   */
  last4?: string;
}

export const PaymentMethodKrCardSchema: TypedSchema<PaymentMethodKrCard> = typed<PaymentMethodKrCard>(object({
  brand: optional(string()),
  last4: optional(string()),
}));