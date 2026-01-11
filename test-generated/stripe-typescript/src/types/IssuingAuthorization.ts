import { TypedSchema, array, boolean, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { BalanceTransaction } from './BalanceTransaction';
import { BalanceTransactionSchema } from './BalanceTransaction';
import type { CardholderOrRef } from './CardholderOrRef';
import { CardholderOrRefSchema } from './CardholderOrRef';
import type { IssuingAuthorizationAmountDetails } from './IssuingAuthorizationAmountDetails';
import { IssuingAuthorizationAmountDetailsSchema } from './IssuingAuthorizationAmountDetails';
import type { IssuingAuthorizationFleetData } from './IssuingAuthorizationFleetData';
import { IssuingAuthorizationFleetDataSchema } from './IssuingAuthorizationFleetData';
import type { IssuingAuthorizationFraudChallenge } from './IssuingAuthorizationFraudChallenge';
import { IssuingAuthorizationFraudChallengeSchema } from './IssuingAuthorizationFraudChallenge';
import type { IssuingAuthorizationFuelData } from './IssuingAuthorizationFuelData';
import { IssuingAuthorizationFuelDataSchema } from './IssuingAuthorizationFuelData';
import type { IssuingAuthorizationMerchantData } from './IssuingAuthorizationMerchantData';
import { IssuingAuthorizationMerchantDataSchema } from './IssuingAuthorizationMerchantData';
import type { IssuingAuthorizationNetworkData } from './IssuingAuthorizationNetworkData';
import { IssuingAuthorizationNetworkDataSchema } from './IssuingAuthorizationNetworkData';
import type { IssuingAuthorizationPendingRequest } from './IssuingAuthorizationPendingRequest';
import { IssuingAuthorizationPendingRequestSchema } from './IssuingAuthorizationPendingRequest';
import type { IssuingAuthorizationRequest } from './IssuingAuthorizationRequest';
import { IssuingAuthorizationRequestSchema } from './IssuingAuthorizationRequest';
import type { IssuingAuthorizationTreasury } from './IssuingAuthorizationTreasury';
import { IssuingAuthorizationTreasurySchema } from './IssuingAuthorizationTreasury';
import type { IssuingAuthorizationVerificationData } from './IssuingAuthorizationVerificationData';
import { IssuingAuthorizationVerificationDataSchema } from './IssuingAuthorizationVerificationData';
import type { IssuingCard } from './IssuingCard';
import { IssuingCardSchema } from './IssuingCard';
import type { IssuingTransaction } from './IssuingTransaction';
import { IssuingTransactionSchema } from './IssuingTransaction';
import type { MetadataProperty } from './MetadataProperty';
import { MetadataPropertySchema } from './MetadataProperty';
import type { TokenOrRef } from './TokenOrRef';
import { TokenOrRefSchema } from './TokenOrRef';
/**
 * IssuingAuthorization
 *
 * When an [issued card](https://stripe.com/docs/issuing) is used to make a purchase, an Issuing `Authorization`
object is created. [Authorizations](https://stripe.com/docs/issuing/purchases/authorizations) must be approved for the
purchase to be completed successfully.

Related guide: [Issued card authorizations](https://stripe.com/docs/issuing/purchases/authorizations)
 */
export interface IssuingAuthorization {
  /**
   * The total amount that was authorized or rejected. This amount is in `currency` and in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal). `amount` should be the same as `merchant_amount`, unless `currency` and `merchant_currency` are different.
   */
  amount: number;
  /**
   * Detailed breakdown of amount components. These amounts are denominated in `currency` and in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal).
   */
  amountDetails?: IssuingAuthorizationAmountDetails;
  /**
   * Whether the authorization has been approved.
   */
  approved: boolean;
  /**
   * How the card details were provided.
   */
  authorizationMethod: string;
  /**
   * List of balance transactions associated with this authorization.
   */
  balanceTransactions: Array<BalanceTransaction>;
  /**
   * IssuingCard
   *
   * You can [create physical or virtual cards](https://stripe.com/docs/issuing) that are issued to cardholders.
   */
  card: IssuingCard;
  /**
   * The cardholder to whom this authorization belongs.
   */
  cardholder?: CardholderOrRef;
  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;
  /**
   * The currency of the cardholder. This currency can be different from the currency presented at authorization and the `merchant_currency` field on this authorization. Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
   */
  currency: string;
  /**
   * Fleet-specific information for authorizations using Fleet cards.
   */
  fleet?: IssuingAuthorizationFleetData;
  /**
   * Fraud challenges sent to the cardholder, if this authorization was declined for fraud risk reasons.
   */
  fraudChallenges?: Array<IssuingAuthorizationFraudChallenge>;
  /**
   * Information about fuel that was purchased with this transaction. Typically this information is received from the merchant after the authorization has been approved and the fuel dispensed.
   */
  fuel?: IssuingAuthorizationFuelData;
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
  /**
   * The total amount that was authorized or rejected. This amount is in the `merchant_currency` and in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal). `merchant_amount` should be the same as `amount`, unless `merchant_currency` and `currency` are different.
   */
  merchantAmount: number;
  /**
   * The local currency that was presented to the cardholder for the authorization. This currency can be different from the cardholder currency and the `currency` field on this authorization. Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
   */
  merchantCurrency: string;
  /**
   * IssuingAuthorizationMerchantData
   *
   * 
   */
  merchantData: IssuingAuthorizationMerchantData;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
   */
  metadata: MetadataProperty;
  /**
   * Details about the authorization, such as identifiers, set by the card network.
   */
  networkData?: IssuingAuthorizationNetworkData;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: string;
  /**
   * The pending authorization request. This field will only be non-null during an `issuing_authorization.request` webhook.
   */
  pendingRequest?: IssuingAuthorizationPendingRequest;
  /**
   * History of every time a `pending_request` authorization was approved/declined, either by you directly or by Stripe (e.g. based on your spending_controls). If the merchant changes the authorization by performing an incremental authorization, you can look at this field to see the previous requests for the authorization. This field can be helpful in determining why a given authorization was approved/declined.
   */
  requestHistory: Array<IssuingAuthorizationRequest>;
  /**
   * The current status of the authorization in its lifecycle.
   */
  status: string;
  /**
   * [Token](https://stripe.com/docs/api/issuing/tokens/object) object used for this authorization. If a network token was not used for this authorization, this field will be null.
   */
  token?: TokenOrRef;
  /**
   * List of [transactions](https://stripe.com/docs/api/issuing/transactions) associated with this authorization.
   */
  transactions: Array<IssuingTransaction>;
  /**
   * [Treasury](https://stripe.com/docs/api/treasury) details related to this authorization if it was created on a [FinancialAccount](https://stripe.com/docs/api/treasury/financial_accounts).
   */
  treasury?: IssuingAuthorizationTreasury;
  /**
   * IssuingAuthorizationVerificationData
   *
   * 
   */
  verificationData: IssuingAuthorizationVerificationData;
  /**
   * Whether the authorization bypassed fraud risk checks because the cardholder has previously completed a fraud challenge on a similar high-risk authorization from the same merchant.
   */
  verifiedByFraudChallenge?: boolean;
  /**
   * The digital wallet used for this transaction. One of `apple_pay`, `google_pay`, or `samsung_pay`. Will populate as `null` when no digital wallet was utilized.
   */
  wallet?: string;
}

export const IssuingAuthorizationSchema: TypedSchema<IssuingAuthorization> = typed<IssuingAuthorization>(object({
  amount: number(),
  get amountDetails() { return optional(IssuingAuthorizationAmountDetailsSchema) },
  approved: boolean(),
  authorizationMethod: string(),
  balanceTransactions: array(BalanceTransactionSchema),
  card: IssuingCardSchema,
  get cardholder() { return optional(CardholderOrRefSchema) },
  created: number(),
  currency: string(),
  get fleet() { return optional(IssuingAuthorizationFleetDataSchema) },
  get fraudChallenges() { return optional(array(IssuingAuthorizationFraudChallengeSchema)) },
  get fuel() { return optional(IssuingAuthorizationFuelDataSchema) },
  id: string(),
  livemode: boolean(),
  merchantAmount: number(),
  merchantCurrency: string(),
  merchantData: IssuingAuthorizationMerchantDataSchema,
  metadata: MetadataPropertySchema,
  get networkData() { return optional(IssuingAuthorizationNetworkDataSchema) },
  object: string(),
  get pendingRequest() { return optional(IssuingAuthorizationPendingRequestSchema) },
  requestHistory: array(IssuingAuthorizationRequestSchema),
  status: string(),
  get token() { return optional(TokenOrRefSchema) },
  transactions: array(IssuingTransactionSchema),
  get treasury() { return optional(IssuingAuthorizationTreasurySchema) },
  verificationData: IssuingAuthorizationVerificationDataSchema,
  verifiedByFraudChallenge: optional(boolean()),
  wallet: optional(string()),
}));