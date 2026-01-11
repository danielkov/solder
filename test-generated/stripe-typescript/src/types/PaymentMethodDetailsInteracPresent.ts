import { TypedSchema, array, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PaymentMethodDetailsInteracPresentReceipt } from './PaymentMethodDetailsInteracPresentReceipt';
import { PaymentMethodDetailsInteracPresentReceiptSchema } from './PaymentMethodDetailsInteracPresentReceipt';
/**
 * payment_method_details_interac_present
 *
 * 
 */
export interface PaymentMethodDetailsInteracPresent {
  /**
   * Card brand. Can be `interac`, `mastercard` or `visa`.
   */
  brand?: string;
  /**
   * The cardholder name as read from the card, in [ISO 7813](https://en.wikipedia.org/wiki/ISO/IEC_7813) format. May include alphanumeric characters, special characters and first/last name separator (`/`). In some cases, the cardholder name may not be available depending on how the issuer has configured the card. Cardholder name is typically not available on swipe or contactless payments, such as those made with Apple Pay and Google Pay.
   */
  cardholderName?: string;
  /**
   * Two-letter ISO code representing the country of the card. You could use this attribute to get a sense of the international breakdown of cards you've collected.
   */
  country?: string;
  /**
   * A high-level description of the type of cards issued in this range.
   */
  description?: string;
  /**
   * Authorization response cryptogram.
   */
  emvAuthData?: string;
  /**
   * Two-digit number representing the card's expiration month.
   */
  expMonth: number;
  /**
   * Four-digit number representing the card's expiration year.
   */
  expYear: number;
  /**
   * Uniquely identifies this particular card number. You can use this attribute to check whether two customers who’ve signed up with you are using the same card number, for example. For payment methods that tokenize card information (Apple Pay, Google Pay), the tokenized number might be provided instead of the underlying card number.

*As of May 1, 2021, card fingerprint in India for Connect changed to allow two fingerprints for the same card---one for India and one for the rest of the world.*
   */
  fingerprint?: string;
  /**
   * Card funding type. Can be `credit`, `debit`, `prepaid`, or `unknown`.
   */
  funding?: string;
  /**
   * ID of a card PaymentMethod generated from the card_present PaymentMethod that may be attached to a Customer for future transactions. Only present if it was possible to generate a card PaymentMethod.
   */
  generatedCard?: string;
  /**
   * The name of the card's issuing bank.
   */
  issuer?: string;
  /**
   * The last four digits of the card.
   */
  last4?: string;
  /**
   * Identifies which network this charge was processed on. Can be `amex`, `cartes_bancaires`, `diners`, `discover`, `eftpos_au`, `interac`, `jcb`, `link`, `mastercard`, `unionpay`, `visa`, or `unknown`.
   */
  network?: string;
  /**
   * This is used by the financial networks to identify a transaction. Visa calls this the Transaction ID, Mastercard calls this the Trace ID, and American Express calls this the Acquirer Reference Data. This value will be present if it is returned by the financial network in the authorization response, and null otherwise.
   */
  networkTransactionId?: string;
  /**
   * The languages that the issuing bank recommends using for localizing any customer-facing text, as read from the card. Referenced from EMV tag 5F2D, data encoded on the card's chip.
   */
  preferredLocales?: Array<string>;
  /**
   * How card details were read in this transaction.
   */
  readMethod?: string;
  /**
   * A collection of fields required to be displayed on receipts. Only required for EMV transactions.
   */
  receipt?: PaymentMethodDetailsInteracPresentReceipt;
}

export const PaymentMethodDetailsInteracPresentSchema: TypedSchema<PaymentMethodDetailsInteracPresent> = typed<PaymentMethodDetailsInteracPresent>(object({
  brand: optional(string()),
  cardholderName: optional(string()),
  country: optional(string()),
  description: optional(string()),
  emvAuthData: optional(string()),
  expMonth: number(),
  expYear: number(),
  fingerprint: optional(string()),
  funding: optional(string()),
  generatedCard: optional(string()),
  issuer: optional(string()),
  last4: optional(string()),
  network: optional(string()),
  networkTransactionId: optional(string()),
  preferredLocales: optional(array(string())),
  readMethod: optional(string()),
  get receipt() { return optional(PaymentMethodDetailsInteracPresentReceiptSchema) },
}));