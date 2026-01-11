import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { DisputeEnhancedEvidenceVisaCompellingEvidence3 } from './DisputeEnhancedEvidenceVisaCompellingEvidence3';
import { DisputeEnhancedEvidenceVisaCompellingEvidence3Schema } from './DisputeEnhancedEvidenceVisaCompellingEvidence3';
import type { DisputeEnhancedEvidenceVisaCompliance } from './DisputeEnhancedEvidenceVisaCompliance';
import { DisputeEnhancedEvidenceVisaComplianceSchema } from './DisputeEnhancedEvidenceVisaCompliance';
/**
 * DisputeEnhancedEvidence
 *
 * 
 */
export interface DisputeEnhancedEvidence {
  /**
   * DisputeEnhancedEvidenceVisaCompellingEvidence3
   *
   * 
   */
  visaCompellingEvidence3?: DisputeEnhancedEvidenceVisaCompellingEvidence3;
  /**
   * DisputeEnhancedEvidenceVisaCompliance
   *
   * 
   */
  visaCompliance?: DisputeEnhancedEvidenceVisaCompliance;
}

export const DisputeEnhancedEvidenceSchema: TypedSchema<DisputeEnhancedEvidence> = typed<DisputeEnhancedEvidence>(object({
  get visaCompellingEvidence3() { return optional(DisputeEnhancedEvidenceVisaCompellingEvidence3Schema) },
  get visaCompliance() { return optional(DisputeEnhancedEvidenceVisaComplianceSchema) },
}));