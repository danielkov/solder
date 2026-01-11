import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostChargesChargeDisputeRequestEnhancedEvidence } from './PostChargesChargeDisputeRequestEnhancedEvidence';
import { PostChargesChargeDisputeRequestEnhancedEvidenceSchema } from './PostChargesChargeDisputeRequestEnhancedEvidence';
/**
 * dispute_evidence_params
 *
 * Evidence to upload, to respond to a dispute. Updating any field in the hash will submit all fields in the hash for review. The combined character count of all fields is limited to 150,000.
 */
export interface PostChargesChargeDisputeRequestEvidence {
  accessActivityLog?: string;
  billingAddress?: string;
  cancellationPolicy?: string;
  cancellationPolicyDisclosure?: string;
  cancellationRebuttal?: string;
  customerCommunication?: string;
  customerEmailAddress?: string;
  customerName?: string;
  customerPurchaseIp?: string;
  customerSignature?: string;
  duplicateChargeDocumentation?: string;
  duplicateChargeExplanation?: string;
  duplicateChargeId?: string;
  enhancedEvidence?: PostChargesChargeDisputeRequestEnhancedEvidence;
  productDescription?: string;
  receipt?: string;
  refundPolicy?: string;
  refundPolicyDisclosure?: string;
  refundRefusalExplanation?: string;
  serviceDate?: string;
  serviceDocumentation?: string;
  shippingAddress?: string;
  shippingCarrier?: string;
  shippingDate?: string;
  shippingDocumentation?: string;
  shippingTrackingNumber?: string;
  uncategorizedFile?: string;
  uncategorizedText?: string;
}

export const PostChargesChargeDisputeRequestEvidenceSchema: TypedSchema<PostChargesChargeDisputeRequestEvidence> = typed<PostChargesChargeDisputeRequestEvidence>(object({
  accessActivityLog: optional(string()),
  billingAddress: optional(string()),
  cancellationPolicy: optional(string()),
  cancellationPolicyDisclosure: optional(string()),
  cancellationRebuttal: optional(string()),
  customerCommunication: optional(string()),
  customerEmailAddress: optional(string()),
  customerName: optional(string()),
  customerPurchaseIp: optional(string()),
  customerSignature: optional(string()),
  duplicateChargeDocumentation: optional(string()),
  duplicateChargeExplanation: optional(string()),
  duplicateChargeId: optional(string()),
  get enhancedEvidence() { return optional(PostChargesChargeDisputeRequestEnhancedEvidenceSchema) },
  productDescription: optional(string()),
  receipt: optional(string()),
  refundPolicy: optional(string()),
  refundPolicyDisclosure: optional(string()),
  refundRefusalExplanation: optional(string()),
  serviceDate: optional(string()),
  serviceDocumentation: optional(string()),
  shippingAddress: optional(string()),
  shippingCarrier: optional(string()),
  shippingDate: optional(string()),
  shippingDocumentation: optional(string()),
  shippingTrackingNumber: optional(string()),
  uncategorizedFile: optional(string()),
  uncategorizedText: optional(string()),
}));