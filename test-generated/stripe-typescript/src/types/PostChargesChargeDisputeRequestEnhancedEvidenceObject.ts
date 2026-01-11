import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { PostChargesChargeDisputeRequestEnhancedEvidenceObjectVisaCompellingEvidence3 } from './PostChargesChargeDisputeRequestEnhancedEvidenceObjectVisaCompellingEvidence3';
import { PostChargesChargeDisputeRequestEnhancedEvidenceObjectVisaCompellingEvidence3Schema } from './PostChargesChargeDisputeRequestEnhancedEvidenceObjectVisaCompellingEvidence3';
import type { PostChargesChargeDisputeRequestEnhancedEvidenceObjectVisaCompliance } from './PostChargesChargeDisputeRequestEnhancedEvidenceObjectVisaCompliance';
import { PostChargesChargeDisputeRequestEnhancedEvidenceObjectVisaComplianceSchema } from './PostChargesChargeDisputeRequestEnhancedEvidenceObjectVisaCompliance';
/**
 * enhanced_evidence
 */
export interface PostChargesChargeDisputeRequestEnhancedEvidenceObject {
  /**
   * visa_compelling_evidence3
   */
  visaCompellingEvidence3?: PostChargesChargeDisputeRequestEnhancedEvidenceObjectVisaCompellingEvidence3;
  /**
   * visa_compliance
   */
  visaCompliance?: PostChargesChargeDisputeRequestEnhancedEvidenceObjectVisaCompliance;
}

export const PostChargesChargeDisputeRequestEnhancedEvidenceObjectSchema: TypedSchema<PostChargesChargeDisputeRequestEnhancedEvidenceObject> = typed<PostChargesChargeDisputeRequestEnhancedEvidenceObject>(object({
  get visaCompellingEvidence3() { return optional(PostChargesChargeDisputeRequestEnhancedEvidenceObjectVisaCompellingEvidence3Schema) },
  get visaCompliance() { return optional(PostChargesChargeDisputeRequestEnhancedEvidenceObjectVisaComplianceSchema) },
}));