import { object, string, typed } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';
/**
 * treasury_param
 * 
 * Params for disputes related to Treasury FinancialAccounts
 */
export interface PostIssuingDisputesRequestTreasury {
  receivedDebit: string;
}

export const PostIssuingDisputesRequestTreasurySchema: TypedSchema<PostIssuingDisputesRequestTreasury> = typed<PostIssuingDisputesRequestTreasury>(object({ receivedDebit: string() }));
