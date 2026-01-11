import { TypedSchema, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PaymentFlowsPrivatePaymentMethodsCardDetailsApiResourceEnterpriseFeaturesExtendedAuthorizationExtendedAuthorization } from './PaymentFlowsPrivatePaymentMethodsCardDetailsApiResourceEnterpriseFeaturesExtendedAuthorizationExtendedAuthorization';
import { PaymentFlowsPrivatePaymentMethodsCardDetailsApiResourceEnterpriseFeaturesExtendedAuthorizationExtendedAuthorizationSchema } from './PaymentFlowsPrivatePaymentMethodsCardDetailsApiResourceEnterpriseFeaturesExtendedAuthorizationExtendedAuthorization';
import type { PaymentFlowsPrivatePaymentMethodsCardDetailsApiResourceEnterpriseFeaturesIncrementalAuthorizationIncrementalAuthorization } from './PaymentFlowsPrivatePaymentMethodsCardDetailsApiResourceEnterpriseFeaturesIncrementalAuthorizationIncrementalAuthorization';
import { PaymentFlowsPrivatePaymentMethodsCardDetailsApiResourceEnterpriseFeaturesIncrementalAuthorizationIncrementalAuthorizationSchema } from './PaymentFlowsPrivatePaymentMethodsCardDetailsApiResourceEnterpriseFeaturesIncrementalAuthorizationIncrementalAuthorization';
import type { PaymentFlowsPrivatePaymentMethodsCardDetailsApiResourceEnterpriseFeaturesOvercaptureOvercapture } from './PaymentFlowsPrivatePaymentMethodsCardDetailsApiResourceEnterpriseFeaturesOvercaptureOvercapture';
import { PaymentFlowsPrivatePaymentMethodsCardDetailsApiResourceEnterpriseFeaturesOvercaptureOvercaptureSchema } from './PaymentFlowsPrivatePaymentMethodsCardDetailsApiResourceEnterpriseFeaturesOvercaptureOvercapture';
import type { PaymentFlowsPrivatePaymentMethodsCardDetailsApiResourceMulticapture } from './PaymentFlowsPrivatePaymentMethodsCardDetailsApiResourceMulticapture';
import { PaymentFlowsPrivatePaymentMethodsCardDetailsApiResourceMulticaptureSchema } from './PaymentFlowsPrivatePaymentMethodsCardDetailsApiResourceMulticapture';
import type { PaymentMethodDetailsCardChecks } from './PaymentMethodDetailsCardChecks';
import { PaymentMethodDetailsCardChecksSchema } from './PaymentMethodDetailsCardChecks';
import type { PaymentMethodDetailsCardInstallments } from './PaymentMethodDetailsCardInstallments';
import { PaymentMethodDetailsCardInstallmentsSchema } from './PaymentMethodDetailsCardInstallments';
import type { PaymentMethodDetailsCardNetworkToken } from './PaymentMethodDetailsCardNetworkToken';
import { PaymentMethodDetailsCardNetworkTokenSchema } from './PaymentMethodDetailsCardNetworkToken';
import type { PaymentMethodDetailsCardWallet } from './PaymentMethodDetailsCardWallet';
import { PaymentMethodDetailsCardWalletSchema } from './PaymentMethodDetailsCardWallet';
import type { ThreeDSecureDetailsCharge } from './ThreeDSecureDetailsCharge';
import { ThreeDSecureDetailsChargeSchema } from './ThreeDSecureDetailsCharge';
/**
 * payment_method_details_card
 *
 * 
 */
export interface PaymentMethodDetailsCard {
  /**
   * The authorized amount.
   */
  amountAuthorized?: number;
  /**
   * Authorization code on the charge.
   */
  authorizationCode?: string;
  /**
   * Card brand. Can be `amex`, `cartes_bancaires`, `diners`, `discover`, `eftpos_au`, `jcb`, `link`, `mastercard`, `unionpay`, `visa` or `unknown`.
   */
  brand?: string;
  /**
   * When using manual capture, a future timestamp at which the charge will be automatically refunded if uncaptured.
   */
  captureBefore?: number;
  /**
   * Check results by Card networks on Card address and CVC at time of payment.
   */
  checks?: PaymentMethodDetailsCardChecks;
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
   * PaymentFlowsPrivatePaymentMethodsCardDetailsAPIResourceEnterpriseFeaturesExtendedAuthorizationExtendedAuthorization
   *
   * 
   */
  extendedAuthorization?: PaymentFlowsPrivatePaymentMethodsCardDetailsApiResourceEnterpriseFeaturesExtendedAuthorizationExtendedAuthorization;
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
   * PaymentFlowsPrivatePaymentMethodsCardDetailsAPIResourceEnterpriseFeaturesIncrementalAuthorizationIncrementalAuthorization
   *
   * 
   */
  incrementalAuthorization?: PaymentFlowsPrivatePaymentMethodsCardDetailsApiResourceEnterpriseFeaturesIncrementalAuthorizationIncrementalAuthorization;
  /**
   * Installment details for this payment.

For more information, see the [installments integration guide](https://stripe.com/docs/payments/installments).
   */
  installments?: PaymentMethodDetailsCardInstallments;
  /**
   * The last four digits of the card.
   */
  last4?: string;
  /**
   * ID of the mandate used to make this payment or created by it.
   */
  mandate?: string;
  /**
   * PaymentFlowsPrivatePaymentMethodsCardDetailsAPIResourceMulticapture
   *
   * 
   */
  multicapture?: PaymentFlowsPrivatePaymentMethodsCardDetailsApiResourceMulticapture;
  /**
   * Identifies which network this charge was processed on. Can be `amex`, `cartes_bancaires`, `diners`, `discover`, `eftpos_au`, `interac`, `jcb`, `link`, `mastercard`, `unionpay`, `visa`, or `unknown`.
   */
  network?: string;
  /**
   * If this card has network token credentials, this contains the details of the network token credentials.
   */
  networkToken?: PaymentMethodDetailsCardNetworkToken;
  /**
   * This is used by the financial networks to identify a transaction. Visa calls this the Transaction ID, Mastercard calls this the Trace ID, and American Express calls this the Acquirer Reference Data. This value will be present if it is returned by the financial network in the authorization response, and null otherwise.
   */
  networkTransactionId?: string;
  /**
   * PaymentFlowsPrivatePaymentMethodsCardDetailsAPIResourceEnterpriseFeaturesOvercaptureOvercapture
   *
   * 
   */
  overcapture?: PaymentFlowsPrivatePaymentMethodsCardDetailsApiResourceEnterpriseFeaturesOvercaptureOvercapture;
  /**
   * Status of a card based on the card issuer.
   */
  regulatedStatus?: string;
  /**
   * Populated if this transaction used 3D Secure authentication.
   */
  threeDSecure?: ThreeDSecureDetailsCharge;
  /**
   * If this Card is part of a card wallet, this contains the details of the card wallet.
   */
  wallet?: PaymentMethodDetailsCardWallet;
}

export const PaymentMethodDetailsCardSchema: TypedSchema<PaymentMethodDetailsCard> = typed<PaymentMethodDetailsCard>(object({
  amountAuthorized: optional(number()),
  authorizationCode: optional(string()),
  brand: optional(string()),
  captureBefore: optional(number()),
  get checks() { return optional(PaymentMethodDetailsCardChecksSchema) },
  country: optional(string()),
  expMonth: number(),
  expYear: number(),
  get extendedAuthorization() { return optional(PaymentFlowsPrivatePaymentMethodsCardDetailsApiResourceEnterpriseFeaturesExtendedAuthorizationExtendedAuthorizationSchema) },
  fingerprint: optional(string()),
  funding: optional(string()),
  get incrementalAuthorization() { return optional(PaymentFlowsPrivatePaymentMethodsCardDetailsApiResourceEnterpriseFeaturesIncrementalAuthorizationIncrementalAuthorizationSchema) },
  get installments() { return optional(PaymentMethodDetailsCardInstallmentsSchema) },
  last4: optional(string()),
  mandate: optional(string()),
  get multicapture() { return optional(PaymentFlowsPrivatePaymentMethodsCardDetailsApiResourceMulticaptureSchema) },
  network: optional(string()),
  get networkToken() { return optional(PaymentMethodDetailsCardNetworkTokenSchema) },
  networkTransactionId: optional(string()),
  get overcapture() { return optional(PaymentFlowsPrivatePaymentMethodsCardDetailsApiResourceEnterpriseFeaturesOvercaptureOvercaptureSchema) },
  regulatedStatus: optional(string()),
  get threeDSecure() { return optional(ThreeDSecureDetailsChargeSchema) },
  get wallet() { return optional(PaymentMethodDetailsCardWalletSchema) },
}));