import { TypedSchema, array, object, optional, typed } from '@speakeasy-api/tonic';

import type { PostChargesChargeDisputeRequestEnhancedEvidenceObjectDisputedTransaction } from './PostChargesChargeDisputeRequestEnhancedEvidenceObjectDisputedTransaction';
import { PostChargesChargeDisputeRequestEnhancedEvidenceObjectDisputedTransactionSchema } from './PostChargesChargeDisputeRequestEnhancedEvidenceObjectDisputedTransaction';
import type { PostChargesChargeDisputeRequestEnhancedEvidenceObjectPriorUndisputedTransactionsItem } from './PostChargesChargeDisputeRequestEnhancedEvidenceObjectPriorUndisputedTransactionsItem';
import { PostChargesChargeDisputeRequestEnhancedEvidenceObjectPriorUndisputedTransactionsItemSchema } from './PostChargesChargeDisputeRequestEnhancedEvidenceObjectPriorUndisputedTransactionsItem';
/**
 * visa_compelling_evidence3
 */
export interface PostChargesChargeDisputeRequestEnhancedEvidenceObjectVisaCompellingEvidence3 {
  /**
   * visa_compelling_evidence3_disputed_transaction
   */
  disputedTransaction?: PostChargesChargeDisputeRequestEnhancedEvidenceObjectDisputedTransaction;
  priorUndisputedTransactions?: Array<PostChargesChargeDisputeRequestEnhancedEvidenceObjectPriorUndisputedTransactionsItem>;
}

export const PostChargesChargeDisputeRequestEnhancedEvidenceObjectVisaCompellingEvidence3Schema: TypedSchema<PostChargesChargeDisputeRequestEnhancedEvidenceObjectVisaCompellingEvidence3> = typed<PostChargesChargeDisputeRequestEnhancedEvidenceObjectVisaCompellingEvidence3>(object({
  get disputedTransaction() { return optional(PostChargesChargeDisputeRequestEnhancedEvidenceObjectDisputedTransactionSchema) },
  get priorUndisputedTransactions() { return optional(array(PostChargesChargeDisputeRequestEnhancedEvidenceObjectPriorUndisputedTransactionsItemSchema)) },
}));