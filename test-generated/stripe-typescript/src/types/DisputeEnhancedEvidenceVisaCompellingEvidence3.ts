import { TypedSchema, array, object, optional, typed } from '@speakeasy-api/tonic';

import type { DisputeVisaCompellingEvidence3DisputedTransaction } from './DisputeVisaCompellingEvidence3DisputedTransaction';
import { DisputeVisaCompellingEvidence3DisputedTransactionSchema } from './DisputeVisaCompellingEvidence3DisputedTransaction';
import type { DisputeVisaCompellingEvidence3PriorUndisputedTransaction } from './DisputeVisaCompellingEvidence3PriorUndisputedTransaction';
import { DisputeVisaCompellingEvidence3PriorUndisputedTransactionSchema } from './DisputeVisaCompellingEvidence3PriorUndisputedTransaction';
/**
 * DisputeEnhancedEvidenceVisaCompellingEvidence3
 *
 * 
 */
export interface DisputeEnhancedEvidenceVisaCompellingEvidence3 {
  /**
   * Disputed transaction details for Visa Compelling Evidence 3.0 evidence submission.
   */
  disputedTransaction?: DisputeVisaCompellingEvidence3DisputedTransaction;
  /**
   * List of exactly two prior undisputed transaction objects for Visa Compelling Evidence 3.0 evidence submission.
   */
  priorUndisputedTransactions: Array<DisputeVisaCompellingEvidence3PriorUndisputedTransaction>;
}

export const DisputeEnhancedEvidenceVisaCompellingEvidence3Schema: TypedSchema<DisputeEnhancedEvidenceVisaCompellingEvidence3> = typed<DisputeEnhancedEvidenceVisaCompellingEvidence3>(object({
  get disputedTransaction() { return optional(DisputeVisaCompellingEvidence3DisputedTransactionSchema) },
  priorUndisputedTransactions: array(DisputeVisaCompellingEvidence3PriorUndisputedTransactionSchema),
}));