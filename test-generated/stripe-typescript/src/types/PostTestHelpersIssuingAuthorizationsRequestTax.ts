import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * fleet_reported_breakdown_tax_specs
 */
export interface PostTestHelpersIssuingAuthorizationsRequestTax {
  localAmountDecimal?: string;
  nationalAmountDecimal?: string;
}

export const PostTestHelpersIssuingAuthorizationsRequestTaxSchema: TypedSchema<PostTestHelpersIssuingAuthorizationsRequestTax> = typed<PostTestHelpersIssuingAuthorizationsRequestTax>(object({
  localAmountDecimal: optional(string()),
  nationalAmountDecimal: optional(string()),
}));