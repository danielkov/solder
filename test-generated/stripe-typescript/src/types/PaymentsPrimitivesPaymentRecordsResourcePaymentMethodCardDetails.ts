import { TypedSchema, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PaymentsPrimitivesPaymentRecordsResourcePaymentMethodCardDetailsResourceChecks } from './PaymentsPrimitivesPaymentRecordsResourcePaymentMethodCardDetailsResourceChecks';
import { PaymentsPrimitivesPaymentRecordsResourcePaymentMethodCardDetailsResourceChecksSchema } from './PaymentsPrimitivesPaymentRecordsResourcePaymentMethodCardDetailsResourceChecks';
import type { PaymentsPrimitivesPaymentRecordsResourcePaymentMethodCardDetailsResourceNetworkToken } from './PaymentsPrimitivesPaymentRecordsResourcePaymentMethodCardDetailsResourceNetworkToken';
import { PaymentsPrimitivesPaymentRecordsResourcePaymentMethodCardDetailsResourceNetworkTokenSchema } from './PaymentsPrimitivesPaymentRecordsResourcePaymentMethodCardDetailsResourceNetworkToken';
import type { PaymentsPrimitivesPaymentRecordsResourcePaymentMethodCardDetailsResourceThreeDSecure } from './PaymentsPrimitivesPaymentRecordsResourcePaymentMethodCardDetailsResourceThreeDSecure';
import { PaymentsPrimitivesPaymentRecordsResourcePaymentMethodCardDetailsResourceThreeDSecureSchema } from './PaymentsPrimitivesPaymentRecordsResourcePaymentMethodCardDetailsResourceThreeDSecure';
import type { PaymentsPrimitivesPaymentRecordsResourcePaymentMethodCardDetailsResourceWallet } from './PaymentsPrimitivesPaymentRecordsResourcePaymentMethodCardDetailsResourceWallet';
import { PaymentsPrimitivesPaymentRecordsResourcePaymentMethodCardDetailsResourceWalletSchema } from './PaymentsPrimitivesPaymentRecordsResourcePaymentMethodCardDetailsResourceWallet';
/**
 * PaymentsPrimitivesPaymentRecordsResourcePaymentMethodCardDetails
 *
 * Details of the card used for this payment attempt.
 */
export interface PaymentsPrimitivesPaymentRecordsResourcePaymentMethodCardDetails {
  /**
   * Card brand. Can be `amex`, `cartes_bancaires`, `diners`, `discover`, `eftpos_au`, `jcb`, `link`, `mastercard`, `unionpay`, `visa` or `unknown`.
   */
  brand: string;
  /**
   * When using manual capture, a future timestamp at which the charge will be automatically refunded if uncaptured.
   */
  captureBefore?: number;
  /**
   * Check results by Card networks on Card address and CVC at time of payment.
   */
  checks?: PaymentsPrimitivesPaymentRecordsResourcePaymentMethodCardDetailsResourceChecks;
  /**
   * Two-letter ISO code representing the country of the card. You could use this attribute to get a sense of the international breakdown of cards you've collected.
   */
  country?: string;
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
  funding: string;
  /**
   * The last four digits of the card.
   */
  last4: string;
  /**
   * Identifies which network this charge was processed on. Can be `amex`, `cartes_bancaires`, `diners`, `discover`, `eftpos_au`, `interac`, `jcb`, `link`, `mastercard`, `unionpay`, `visa`, or `unknown`.
   */
  network?: string;
  /**
   * If this card has network token credentials, this contains the details of the network token credentials.
   */
  networkToken?: PaymentsPrimitivesPaymentRecordsResourcePaymentMethodCardDetailsResourceNetworkToken;
  /**
   * This is used by the financial networks to identify a transaction. Visa calls this the Transaction ID, Mastercard calls this the Trace ID, and American Express calls this the Acquirer Reference Data. This value will be present if it is returned by the financial network in the authorization response, and null otherwise.
   */
  networkTransactionId?: string;
  /**
   * Populated if this transaction used 3D Secure authentication.
   */
  threeDSecure?: PaymentsPrimitivesPaymentRecordsResourcePaymentMethodCardDetailsResourceThreeDSecure;
  /**
   * If this Card is part of a card wallet, this contains the details of the card wallet.
   */
  wallet?: PaymentsPrimitivesPaymentRecordsResourcePaymentMethodCardDetailsResourceWallet;
}

export const PaymentsPrimitivesPaymentRecordsResourcePaymentMethodCardDetailsSchema: TypedSchema<PaymentsPrimitivesPaymentRecordsResourcePaymentMethodCardDetails> = typed<PaymentsPrimitivesPaymentRecordsResourcePaymentMethodCardDetails>(object({
  brand: string(),
  captureBefore: optional(number()),
  get checks() { return optional(PaymentsPrimitivesPaymentRecordsResourcePaymentMethodCardDetailsResourceChecksSchema) },
  country: optional(string()),
  expMonth: number(),
  expYear: number(),
  fingerprint: optional(string()),
  funding: string(),
  last4: string(),
  network: optional(string()),
  get networkToken() { return optional(PaymentsPrimitivesPaymentRecordsResourcePaymentMethodCardDetailsResourceNetworkTokenSchema) },
  networkTransactionId: optional(string()),
  get threeDSecure() { return optional(PaymentsPrimitivesPaymentRecordsResourcePaymentMethodCardDetailsResourceThreeDSecureSchema) },
  get wallet() { return optional(PaymentsPrimitivesPaymentRecordsResourcePaymentMethodCardDetailsResourceWalletSchema) },
}));