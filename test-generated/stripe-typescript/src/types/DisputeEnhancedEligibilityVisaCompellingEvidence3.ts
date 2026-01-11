import { TypedSchema, array, object, string, typed } from '@speakeasy-api/tonic';
/**
 * DisputeEnhancedEligibilityVisaCompellingEvidence3
 *
 * 
 */
export interface DisputeEnhancedEligibilityVisaCompellingEvidence3 {
  /**
   * List of actions required to qualify dispute for Visa Compelling Evidence 3.0 evidence submission.
   */
  requiredActions: Array<string>;
  /**
   * Visa Compelling Evidence 3.0 eligibility status.
   */
  status: string;
}

export const DisputeEnhancedEligibilityVisaCompellingEvidence3Schema: TypedSchema<DisputeEnhancedEligibilityVisaCompellingEvidence3> = typed<DisputeEnhancedEligibilityVisaCompellingEvidence3>(object({
  requiredActions: array(string()),
  status: string(),
}));