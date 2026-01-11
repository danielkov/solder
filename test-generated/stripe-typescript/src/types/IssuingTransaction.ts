import { TypedSchema, boolean, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { AuthorizationOrRef } from './AuthorizationOrRef';
import { AuthorizationOrRefSchema } from './AuthorizationOrRef';
import type { BalanceTransactionOrRef } from './BalanceTransactionOrRef';
import { BalanceTransactionOrRefSchema } from './BalanceTransactionOrRef';
import type { CardOrRef } from './CardOrRef';
import { CardOrRefSchema } from './CardOrRef';
import type { CardholderOrRef } from './CardholderOrRef';
import { CardholderOrRefSchema } from './CardholderOrRef';
import type { DisputeOrRef } from './DisputeOrRef';
import { DisputeOrRefSchema } from './DisputeOrRef';
import type { IssuingAuthorizationMerchantData } from './IssuingAuthorizationMerchantData';
import { IssuingAuthorizationMerchantDataSchema } from './IssuingAuthorizationMerchantData';
import type { IssuingTransactionAmountDetails } from './IssuingTransactionAmountDetails';
import { IssuingTransactionAmountDetailsSchema } from './IssuingTransactionAmountDetails';
import type { IssuingTransactionNetworkData } from './IssuingTransactionNetworkData';
import { IssuingTransactionNetworkDataSchema } from './IssuingTransactionNetworkData';
import type { IssuingTransactionPurchaseDetails } from './IssuingTransactionPurchaseDetails';
import { IssuingTransactionPurchaseDetailsSchema } from './IssuingTransactionPurchaseDetails';
import type { IssuingTransactionTreasury } from './IssuingTransactionTreasury';
import { IssuingTransactionTreasurySchema } from './IssuingTransactionTreasury';
import type { MetadataProperty } from './MetadataProperty';
import { MetadataPropertySchema } from './MetadataProperty';
import type { TokenOrRef } from './TokenOrRef';
import { TokenOrRefSchema } from './TokenOrRef';
/**
 * IssuingTransaction
 *
 * Any use of an [issued card](https://stripe.com/docs/issuing) that results in funds entering or leaving
your Stripe account, such as a completed purchase or refund, is represented by an Issuing
`Transaction` object.

Related guide: [Issued card transactions](https://stripe.com/docs/issuing/purchases/transactions)
 */
export interface IssuingTransaction {
  /**
   * The transaction amount, which will be reflected in your balance. This amount is in your currency and in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal).
   */
  amount: number;
  /**
   * Detailed breakdown of amount components. These amounts are denominated in `currency` and in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal).
   */
  amountDetails?: IssuingTransactionAmountDetails;
  /**
   * The `Authorization` object that led to this transaction.
   */
  authorization?: AuthorizationOrRef;
  /**
   * ID of the [balance transaction](https://stripe.com/docs/api/balance_transactions) associated with this transaction.
   */
  balanceTransaction?: BalanceTransactionOrRef;
  /**
   * The card used to make this transaction.
   */
  card: CardOrRef;
  /**
   * The cardholder to whom this transaction belongs.
   */
  cardholder?: CardholderOrRef;
  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;
  /**
   * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
   */
  currency: string;
  /**
   * If you've disputed the transaction, the ID of the dispute.
   */
  dispute?: DisputeOrRef;
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
  /**
   * The amount that the merchant will receive, denominated in `merchant_currency` and in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal). It will be different from `amount` if the merchant is taking payment in a different currency.
   */
  merchantAmount: number;
  /**
   * The currency with which the merchant is taking payment.
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
   * Details about the transaction, such as processing dates, set by the card network.
   */
  networkData?: IssuingTransactionNetworkData;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: string;
  /**
   * Additional purchase information that is optionally provided by the merchant.
   */
  purchaseDetails?: IssuingTransactionPurchaseDetails;
  /**
   * [Token](https://stripe.com/docs/api/issuing/tokens/object) object used for this transaction. If a network token was not used for this transaction, this field will be null.
   */
  token?: TokenOrRef;
  /**
   * [Treasury](https://stripe.com/docs/api/treasury) details related to this transaction if it was created on a [FinancialAccount](/docs/api/treasury/financial_accounts
   */
  treasury?: IssuingTransactionTreasury;
  /**
   * The nature of the transaction.
   */
  type: string;
  /**
   * The digital wallet used for this transaction. One of `apple_pay`, `google_pay`, or `samsung_pay`.
   */
  wallet?: string;
}

export const IssuingTransactionSchema: TypedSchema<IssuingTransaction> = typed<IssuingTransaction>(object({
  amount: number(),
  get amountDetails() { return optional(IssuingTransactionAmountDetailsSchema) },
  get authorization() { return optional(AuthorizationOrRefSchema) },
  get balanceTransaction() { return optional(BalanceTransactionOrRefSchema) },
  card: CardOrRefSchema,
  get cardholder() { return optional(CardholderOrRefSchema) },
  created: number(),
  currency: string(),
  get dispute() { return optional(DisputeOrRefSchema) },
  id: string(),
  livemode: boolean(),
  merchantAmount: number(),
  merchantCurrency: string(),
  merchantData: IssuingAuthorizationMerchantDataSchema,
  metadata: MetadataPropertySchema,
  get networkData() { return optional(IssuingTransactionNetworkDataSchema) },
  object: string(),
  get purchaseDetails() { return optional(IssuingTransactionPurchaseDetailsSchema) },
  get token() { return optional(TokenOrRefSchema) },
  get treasury() { return optional(IssuingTransactionTreasurySchema) },
  type: string(),
  wallet: optional(string()),
}));