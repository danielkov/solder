import { TypedSchema, number, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * payment_method_details_passthrough_card
 *
 * 
 */
export interface PaymentMethodDetailsPassthroughCard {
  /**
   * Card brand. Can be `amex`, `cartes_bancaires`, `diners`, `discover`, `eftpos_au`, `jcb`, `link`, `mastercard`, `unionpay`, `visa` or `unknown`.
   */
  brand?: string;
  /**
   * Two-letter ISO code representing the country of the card. You could use this attribute to get a sense of the international breakdown of cards you've collected.
   */
  country?: string;
  /**
   * Two-digit number representing the card's expiration month.
   */
  expMonth?: number;
  /**
   * Four-digit number representing the card's expiration year.
   */
  expYear?: number;
  /**
   * Card funding type. Can be `credit`, `debit`, `prepaid`, or `unknown`.
   */
  funding?: string;
  /**
   * The last four digits of the card.
   */
  last4?: string;
}

export const PaymentMethodDetailsPassthroughCardSchema: TypedSchema<PaymentMethodDetailsPassthroughCard> = typed<PaymentMethodDetailsPassthroughCard>(object({
  brand: optional(string()),
  country: optional(string()),
  expMonth: optional(number()),
  expYear: optional(number()),
  funding: optional(string()),
  last4: optional(string()),
}));