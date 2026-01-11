import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * payment_method_details_kr_card
 *
 * 
 */
export interface PaymentMethodDetailsKrCard {
  /**
   * The local credit or debit card brand.
   */
  brand?: string;
  /**
   * A unique identifier for the buyer as determined by the local payment processor.
   */
  buyerId?: string;
  /**
   * The last four digits of the card. This may not be present for American Express cards.
   */
  last4?: string;
  /**
   * The Korean Card transaction ID associated with this payment.
   */
  transactionId?: string;
}

export const PaymentMethodDetailsKrCardSchema: TypedSchema<PaymentMethodDetailsKrCard> = typed<PaymentMethodDetailsKrCard>(object({
  brand: optional(string()),
  buyerId: optional(string()),
  last4: optional(string()),
  transactionId: optional(string()),
}));