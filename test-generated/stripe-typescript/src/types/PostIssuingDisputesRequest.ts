import { TypedSchema, array, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostAccountsAccountBankAccountsRequestMetadata } from './PostAccountsAccountBankAccountsRequestMetadata';
import { PostAccountsAccountBankAccountsRequestMetadataSchema } from './PostAccountsAccountBankAccountsRequestMetadata';
import type { PostIssuingDisputesRequestEvidence } from './PostIssuingDisputesRequestEvidence';
import { PostIssuingDisputesRequestEvidenceSchema } from './PostIssuingDisputesRequestEvidence';
import type { PostIssuingDisputesRequestTreasury } from './PostIssuingDisputesRequestTreasury';
import { PostIssuingDisputesRequestTreasurySchema } from './PostIssuingDisputesRequestTreasury';
export interface PostIssuingDisputesRequest {
  /**
   * The dispute amount in the card's currency and in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal). If not set, defaults to the full transaction amount.
   */
  amount?: number;
  /**
   * evidence_param
   *
   * Evidence provided for the dispute.
   */
  evidence?: PostIssuingDisputesRequestEvidence;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: PostAccountsAccountBankAccountsRequestMetadata;
  /**
   * The ID of the issuing transaction to create a dispute for. For transaction on Treasury FinancialAccounts, use `treasury.received_debit`.
   */
  transaction?: string;
  /**
   * treasury_param
   *
   * Params for disputes related to Treasury FinancialAccounts
   */
  treasury?: PostIssuingDisputesRequestTreasury;
}

export const PostIssuingDisputesRequestSchema: TypedSchema<PostIssuingDisputesRequest> = typed<PostIssuingDisputesRequest>(object({
  amount: optional(number()),
  get evidence() { return optional(PostIssuingDisputesRequestEvidenceSchema) },
  expand: optional(array(string())),
  get metadata() { return optional(PostAccountsAccountBankAccountsRequestMetadataSchema) },
  transaction: optional(string()),
  get treasury() { return optional(PostIssuingDisputesRequestTreasurySchema) },
}));