import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * TreasuryReceivedDebitsResourceDebitReversalLinkedFlows
 *
 * 
 */
export interface TreasuryReceivedDebitsResourceDebitReversalLinkedFlows {
  /**
   * Set if there is an Issuing dispute associated with the DebitReversal.
   */
  issuingDispute?: string;
}

export const TreasuryReceivedDebitsResourceDebitReversalLinkedFlowsSchema: TypedSchema<TreasuryReceivedDebitsResourceDebitReversalLinkedFlows> = typed<TreasuryReceivedDebitsResourceDebitReversalLinkedFlows>(object({
  issuingDispute: optional(string()),
}));