import { TypedSchema, number, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * merchant_dispute_risk_specs
 */
export interface PostTestHelpersIssuingAuthorizationsRequestMerchantDisputeRisk {
  disputeRate?: number;
  riskLevel: string;
}

export const PostTestHelpersIssuingAuthorizationsRequestMerchantDisputeRiskSchema: TypedSchema<PostTestHelpersIssuingAuthorizationsRequestMerchantDisputeRisk> = typed<PostTestHelpersIssuingAuthorizationsRequestMerchantDisputeRisk>(object({
  disputeRate: optional(number()),
  riskLevel: string(),
}));