import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * fleet_reported_breakdown_fuel_specs
 */
export interface PostTestHelpersIssuingAuthorizationsRequestFuel {
  grossAmountDecimal?: string;
}

export const PostTestHelpersIssuingAuthorizationsRequestFuelSchema: TypedSchema<PostTestHelpersIssuingAuthorizationsRequestFuel> = typed<PostTestHelpersIssuingAuthorizationsRequestFuel>(object({
  grossAmountDecimal: optional(string()),
}));