import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';

import type { PostChargesChargeDisputeRequestEnhancedEvidenceObject } from './PostChargesChargeDisputeRequestEnhancedEvidenceObject';
import { PostChargesChargeDisputeRequestEnhancedEvidenceObjectSchema } from './PostChargesChargeDisputeRequestEnhancedEvidenceObject';
export type PostChargesChargeDisputeRequestEnhancedEvidence = PostChargesChargeDisputeRequestEnhancedEvidenceObject | string;

export const PostChargesChargeDisputeRequestEnhancedEvidenceSchema: TypedSchema<PostChargesChargeDisputeRequestEnhancedEvidence> = typed<PostChargesChargeDisputeRequestEnhancedEvidence>(union(PostChargesChargeDisputeRequestEnhancedEvidenceObjectSchema, string()));
