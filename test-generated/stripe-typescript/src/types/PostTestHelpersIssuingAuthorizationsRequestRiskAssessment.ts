import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { PostTestHelpersIssuingAuthorizationsRequestCardTestingRisk } from './PostTestHelpersIssuingAuthorizationsRequestCardTestingRisk';
import { PostTestHelpersIssuingAuthorizationsRequestCardTestingRiskSchema } from './PostTestHelpersIssuingAuthorizationsRequestCardTestingRisk';
import type { PostTestHelpersIssuingAuthorizationsRequestFraudRisk } from './PostTestHelpersIssuingAuthorizationsRequestFraudRisk';
import { PostTestHelpersIssuingAuthorizationsRequestFraudRiskSchema } from './PostTestHelpersIssuingAuthorizationsRequestFraudRisk';
import type { PostTestHelpersIssuingAuthorizationsRequestMerchantDisputeRisk } from './PostTestHelpersIssuingAuthorizationsRequestMerchantDisputeRisk';
import { PostTestHelpersIssuingAuthorizationsRequestMerchantDisputeRiskSchema } from './PostTestHelpersIssuingAuthorizationsRequestMerchantDisputeRisk';
/**
 * risk_assessment_specs
 *
 * Stripe’s assessment of the fraud risk for this authorization.
 */
export interface PostTestHelpersIssuingAuthorizationsRequestRiskAssessment {
  /**
   * card_testing_risk_specs
   */
  cardTestingRisk?: PostTestHelpersIssuingAuthorizationsRequestCardTestingRisk;
  /**
   * fraud_risk_specs
   */
  fraudRisk?: PostTestHelpersIssuingAuthorizationsRequestFraudRisk;
  /**
   * merchant_dispute_risk_specs
   */
  merchantDisputeRisk?: PostTestHelpersIssuingAuthorizationsRequestMerchantDisputeRisk;
}

export const PostTestHelpersIssuingAuthorizationsRequestRiskAssessmentSchema: TypedSchema<PostTestHelpersIssuingAuthorizationsRequestRiskAssessment> = typed<PostTestHelpersIssuingAuthorizationsRequestRiskAssessment>(object({
  get cardTestingRisk() { return optional(PostTestHelpersIssuingAuthorizationsRequestCardTestingRiskSchema) },
  get fraudRisk() { return optional(PostTestHelpersIssuingAuthorizationsRequestFraudRiskSchema) },
  get merchantDisputeRisk() { return optional(PostTestHelpersIssuingAuthorizationsRequestMerchantDisputeRiskSchema) },
}));