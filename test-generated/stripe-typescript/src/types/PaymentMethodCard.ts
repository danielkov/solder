import { TypedSchema, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { Networks } from './Networks';
import { NetworksSchema } from './Networks';
import type { PaymentMethodCardChecks } from './PaymentMethodCardChecks';
import { PaymentMethodCardChecksSchema } from './PaymentMethodCardChecks';
import type { PaymentMethodCardGeneratedCard } from './PaymentMethodCardGeneratedCard';
import { PaymentMethodCardGeneratedCardSchema } from './PaymentMethodCardGeneratedCard';
import type { PaymentMethodCardWallet } from './PaymentMethodCardWallet';
import { PaymentMethodCardWalletSchema } from './PaymentMethodCardWallet';
import type { ThreeDSecureUsage } from './ThreeDSecureUsage';
import { ThreeDSecureUsageSchema } from './ThreeDSecureUsage';
/**
 * payment_method_card
 *
 * 
 */
export interface PaymentMethodCard {
  /**
   * Card brand. Can be `amex`, `cartes_bancaires`, `diners`, `discover`, `eftpos_au`, `jcb`, `link`, `mastercard`, `unionpay`, `visa` or `unknown`.
   */
  brand: string;
  /**
   * Checks on Card address and CVC if provided.
   */
  checks?: PaymentMethodCardChecks;
  /**
   * Two-letter ISO code representing the country of the card. You could use this attribute to get a sense of the international breakdown of cards you've collected.
   */
  country?: string;
  /**
   * The brand to use when displaying the card, this accounts for customer's brand choice on dual-branded cards. Can be `american_express`, `cartes_bancaires`, `diners_club`, `discover`, `eftpos_australia`, `interac`, `jcb`, `mastercard`, `union_pay`, `visa`, or `other` and may contain more values in the future.
   */
  displayBrand?: string;
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
   * Details of the original PaymentMethod that created this object.
   */
  generatedFrom?: PaymentMethodCardGeneratedCard;
  /**
   * The last four digits of the card.
   */
  last4: string;
  /**
   * Contains information about card networks that can be used to process the payment.
   */
  networks?: Networks;
  /**
   * Status of a card based on the card issuer.
   */
  regulatedStatus?: string;
  /**
   * Contains details on how this Card may be used for 3D Secure authentication.
   */
  threeDSecureUsage?: ThreeDSecureUsage;
  /**
   * If this Card is part of a card wallet, this contains the details of the card wallet.
   */
  wallet?: PaymentMethodCardWallet;
}

export const PaymentMethodCardSchema: TypedSchema<PaymentMethodCard> = typed<PaymentMethodCard>(object({
  brand: string(),
  get checks() { return optional(PaymentMethodCardChecksSchema) },
  country: optional(string()),
  displayBrand: optional(string()),
  expMonth: number(),
  expYear: number(),
  fingerprint: optional(string()),
  funding: string(),
  get generatedFrom() { return optional(PaymentMethodCardGeneratedCardSchema) },
  last4: string(),
  get networks() { return optional(NetworksSchema) },
  regulatedStatus: optional(string()),
  get threeDSecureUsage() { return optional(ThreeDSecureUsageSchema) },
  get wallet() { return optional(PaymentMethodCardWalletSchema) },
}));