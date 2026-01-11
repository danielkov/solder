import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { DisputeEnhancedEligibilityVisaCompellingEvidence3 } from './DisputeEnhancedEligibilityVisaCompellingEvidence3';
import { DisputeEnhancedEligibilityVisaCompellingEvidence3Schema } from './DisputeEnhancedEligibilityVisaCompellingEvidence3';
import type { DisputeEnhancedEligibilityVisaCompliance } from './DisputeEnhancedEligibilityVisaCompliance';
import { DisputeEnhancedEligibilityVisaComplianceSchema } from './DisputeEnhancedEligibilityVisaCompliance';
/**
 * DisputeEnhancedEligibility
 *
 * 
 */
export interface DisputeEnhancedEligibility {
  /**
   * DisputeEnhancedEligibilityVisaCompellingEvidence3
   *
   * 
   */
  visaCompellingEvidence3?: DisputeEnhancedEligibilityVisaCompellingEvidence3;
  /**
   * DisputeEnhancedEligibilityVisaCompliance
   *
   * 
   */
  visaCompliance?: DisputeEnhancedEligibilityVisaCompliance;
}

export const DisputeEnhancedEligibilitySchema: TypedSchema<DisputeEnhancedEligibility> = typed<DisputeEnhancedEligibility>(object({
  get visaCompellingEvidence3() { return optional(DisputeEnhancedEligibilityVisaCompellingEvidence3Schema) },
  get visaCompliance() { return optional(DisputeEnhancedEligibilityVisaComplianceSchema) },
}));