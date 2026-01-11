import { TypedSchema, boolean, number, object, optional, typed } from '@speakeasy-api/tonic';

import type { DisputeEnhancedEligibility } from './DisputeEnhancedEligibility';
import { DisputeEnhancedEligibilitySchema } from './DisputeEnhancedEligibility';
/**
 * DisputeEvidenceDetails
 *
 * 
 */
export interface DisputeEvidenceDetails {
  /**
   * Date by which evidence must be submitted in order to successfully challenge dispute. Will be 0 if the customer's bank or credit card company doesn't allow a response for this particular dispute.
   */
  dueBy?: number;
  /**
   * DisputeEnhancedEligibility
   *
   * 
   */
  enhancedEligibility: DisputeEnhancedEligibility;
  /**
   * Whether evidence has been staged for this dispute.
   */
  hasEvidence: boolean;
  /**
   * Whether the last evidence submission was submitted past the due date. Defaults to `false` if no evidence submissions have occurred. If `true`, then delivery of the latest evidence is *not* guaranteed.
   */
  pastDue: boolean;
  /**
   * The number of times evidence has been submitted. Typically, you may only submit evidence once.
   */
  submissionCount: number;
}

export const DisputeEvidenceDetailsSchema: TypedSchema<DisputeEvidenceDetails> = typed<DisputeEvidenceDetails>(object({
  dueBy: optional(number()),
  enhancedEligibility: DisputeEnhancedEligibilitySchema,
  hasEvidence: boolean(),
  pastDue: boolean(),
  submissionCount: number(),
}));