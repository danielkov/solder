import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * fuel_specs
 */
export interface PostTestHelpersIssuingAuthorizationsAuthorizationCaptureRequestFuel {
  industryProductCode?: string;
  quantityDecimal?: string;
  type?: string;
  unit?: string;
  unitCostDecimal?: string;
}

export const PostTestHelpersIssuingAuthorizationsAuthorizationCaptureRequestFuelSchema: TypedSchema<PostTestHelpersIssuingAuthorizationsAuthorizationCaptureRequestFuel> = typed<PostTestHelpersIssuingAuthorizationsAuthorizationCaptureRequestFuel>(object({
  industryProductCode: optional(string()),
  quantityDecimal: optional(string()),
  type: optional(string()),
  unit: optional(string()),
  unitCostDecimal: optional(string()),
}));