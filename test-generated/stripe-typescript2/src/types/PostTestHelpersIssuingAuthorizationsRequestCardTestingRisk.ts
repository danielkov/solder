import { number, object, optional, string, typed } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';
/**
 * card_testing_risk_specs
 */
export interface PostTestHelpersIssuingAuthorizationsRequestCardTestingRisk {
  invalidAccountNumberDeclineRatePastHour?: number;
  invalidCredentialsDeclineRatePastHour?: number;
  riskLevel: string;
}

export const PostTestHelpersIssuingAuthorizationsRequestCardTestingRiskSchema: TypedSchema<PostTestHelpersIssuingAuthorizationsRequestCardTestingRisk> = typed<PostTestHelpersIssuingAuthorizationsRequestCardTestingRisk>(object({
  invalidAccountNumberDeclineRatePastHour: optional(number()),
  invalidCredentialsDeclineRatePastHour: optional(number()),
  riskLevel: string(),
}));
