import { TypedSchema, number, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * fraud_risk_specs
 */
export interface PostTestHelpersIssuingAuthorizationsRequestFraudRisk {
  level: string;
  score?: number;
}

export const PostTestHelpersIssuingAuthorizationsRequestFraudRiskSchema: TypedSchema<PostTestHelpersIssuingAuthorizationsRequestFraudRisk> = typed<PostTestHelpersIssuingAuthorizationsRequestFraudRisk>(object({
  level: string(),
  score: optional(number()),
}));