import { TypedSchema, array, boolean, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { BalanceTransaction } from './BalanceTransaction';
import { BalanceTransactionSchema } from './BalanceTransaction';
import type { IssuingDisputeEvidence } from './IssuingDisputeEvidence';
import { IssuingDisputeEvidenceSchema } from './IssuingDisputeEvidence';
import type { IssuingDisputeTreasury } from './IssuingDisputeTreasury';
import { IssuingDisputeTreasurySchema } from './IssuingDisputeTreasury';
import type { MetadataProperty } from './MetadataProperty';
import { MetadataPropertySchema } from './MetadataProperty';
import type { TransactionOrRef } from './TransactionOrRef';
import { TransactionOrRefSchema } from './TransactionOrRef';
/**
 * IssuingDispute
 *
 * As a [card issuer](https://stripe.com/docs/issuing), you can dispute transactions that the cardholder does not recognize, suspects to be fraudulent, or has other issues with.

Related guide: [Issuing disputes](https://stripe.com/docs/issuing/purchases/disputes)
 */
export interface IssuingDispute {
  /**
   * Disputed amount in the card's currency and in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal). Usually the amount of the `transaction`, but can differ (usually because of currency fluctuation).
   */
  amount: number;
  /**
   * List of balance transactions associated with the dispute.
   */
  balanceTransactions?: Array<BalanceTransaction>;
  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;
  /**
   * The currency the `transaction` was made in.
   */
  currency: string;
  /**
   * IssuingDisputeEvidence
   *
   * 
   */
  evidence: IssuingDisputeEvidence;
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
  /**
   * The enum that describes the dispute loss outcome. If the dispute is not lost, this field will be absent. New enum values may be added in the future, so be sure to handle unknown values.
   */
  lossReason?: string;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
   */
  metadata: MetadataProperty;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: string;
  /**
   * Current status of the dispute.
   */
  status: string;
  /**
   * The transaction being disputed.
   */
  transaction: TransactionOrRef;
  /**
   * [Treasury](https://stripe.com/docs/api/treasury) details related to this dispute if it was created on a [FinancialAccount](/docs/api/treasury/financial_accounts
   */
  treasury?: IssuingDisputeTreasury;
}

export const IssuingDisputeSchema: TypedSchema<IssuingDispute> = typed<IssuingDispute>(object({
  amount: number(),
  get balanceTransactions() { return optional(array(BalanceTransactionSchema)) },
  created: number(),
  currency: string(),
  evidence: IssuingDisputeEvidenceSchema,
  id: string(),
  livemode: boolean(),
  lossReason: optional(string()),
  metadata: MetadataPropertySchema,
  object: string(),
  status: string(),
  transaction: TransactionOrRefSchema,
  get treasury() { return optional(IssuingDisputeTreasurySchema) },
}));