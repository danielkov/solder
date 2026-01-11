import { TypedSchema, boolean, object, optional, typed } from '@speakeasy-api/tonic';
/**
 * visa_compliance
 */
export interface PostChargesChargeDisputeRequestEnhancedEvidenceObjectVisaCompliance {
  feeAcknowledged?: boolean;
}

export const PostChargesChargeDisputeRequestEnhancedEvidenceObjectVisaComplianceSchema: TypedSchema<PostChargesChargeDisputeRequestEnhancedEvidenceObjectVisaCompliance> = typed<PostChargesChargeDisputeRequestEnhancedEvidenceObjectVisaCompliance>(object({
  feeAcknowledged: optional(boolean()),
}));