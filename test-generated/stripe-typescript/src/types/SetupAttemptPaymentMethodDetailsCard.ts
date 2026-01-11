import { TypedSchema, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { SetupAttemptPaymentMethodDetailsCardChecks } from './SetupAttemptPaymentMethodDetailsCardChecks';
import { SetupAttemptPaymentMethodDetailsCardChecksSchema } from './SetupAttemptPaymentMethodDetailsCardChecks';
import type { SetupAttemptPaymentMethodDetailsCardWallet } from './SetupAttemptPaymentMethodDetailsCardWallet';
import { SetupAttemptPaymentMethodDetailsCardWalletSchema } from './SetupAttemptPaymentMethodDetailsCardWallet';
import type { ThreeDSecureDetails } from './ThreeDSecureDetails';
import { ThreeDSecureDetailsSchema } from './ThreeDSecureDetails';
/**
 * setup_attempt_payment_method_details_card
 *
 * 
 */
export interface SetupAttemptPaymentMethodDetailsCard {
  /**
   * Card brand. Can be `amex`, `cartes_bancaires`, `diners`, `discover`, `eftpos_au`, `jcb`, `link`, `mastercard`, `unionpay`, `visa` or `unknown`.
   */
  brand?: string;
  /**
   * Check results by Card networks on Card address and CVC at the time of authorization
   */
  checks?: SetupAttemptPaymentMethodDetailsCardChecks;
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
   * Uniquely identifies this particular card number. You can use this attribute to check whether two customers who’ve signed up with you are using the same card number, for example. For payment methods that tokenize card information (Apple Pay, Google Pay), the tokenized number might be provided instead of the underlying card number.

*As of May 1, 2021, card fingerprint in India for Connect changed to allow two fingerprints for the same card---one for India and one for the rest of the world.*
   */
  fingerprint?: string;
  /**
   * Card funding type. Can be `credit`, `debit`, `prepaid`, or `unknown`.
   */
  funding?: string;
  /**
   * The last four digits of the card.
   */
  last4?: string;
  /**
   * Identifies which network this charge was processed on. Can be `amex`, `cartes_bancaires`, `diners`, `discover`, `eftpos_au`, `interac`, `jcb`, `link`, `mastercard`, `unionpay`, `visa`, or `unknown`.
   */
  network?: string;
  /**
   * Populated if this authorization used 3D Secure authentication.
   */
  threeDSecure?: ThreeDSecureDetails;
  /**
   * If this Card is part of a card wallet, this contains the details of the card wallet.
   */
  wallet?: SetupAttemptPaymentMethodDetailsCardWallet;
}

export const SetupAttemptPaymentMethodDetailsCardSchema: TypedSchema<SetupAttemptPaymentMethodDetailsCard> = typed<SetupAttemptPaymentMethodDetailsCard>(object({
  brand: optional(string()),
  get checks() { return optional(SetupAttemptPaymentMethodDetailsCardChecksSchema) },
  country: optional(string()),
  expMonth: optional(number()),
  expYear: optional(number()),
  fingerprint: optional(string()),
  funding: optional(string()),
  last4: optional(string()),
  network: optional(string()),
  get threeDSecure() { return optional(ThreeDSecureDetailsSchema) },
  get wallet() { return optional(SetupAttemptPaymentMethodDetailsCardWalletSchema) },
}));