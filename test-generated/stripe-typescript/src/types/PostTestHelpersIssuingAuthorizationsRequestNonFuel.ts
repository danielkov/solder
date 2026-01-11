import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * fleet_reported_breakdown_non_fuel_specs
 */
export interface PostTestHelpersIssuingAuthorizationsRequestNonFuel {
  grossAmountDecimal?: string;
}

export const PostTestHelpersIssuingAuthorizationsRequestNonFuelSchema: TypedSchema<PostTestHelpersIssuingAuthorizationsRequestNonFuel> = typed<PostTestHelpersIssuingAuthorizationsRequestNonFuel>(object({
  grossAmountDecimal: optional(string()),
}));