import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * fuel_specs
 *
 * Information about fuel that was purchased with this transaction.
 */
export interface DefaultPostTestHelpersIssuingAuthorizationsRequestFuel {
  industryProductCode?: string;
  quantityDecimal?: string;
  type?: string;
  unit?: string;
  unitCostDecimal?: string;
}

export const DefaultPostTestHelpersIssuingAuthorizationsRequestFuelSchema: TypedSchema<DefaultPostTestHelpersIssuingAuthorizationsRequestFuel> = typed<DefaultPostTestHelpersIssuingAuthorizationsRequestFuel>(object({
  industryProductCode: optional(string()),
  quantityDecimal: optional(string()),
  type: optional(string()),
  unit: optional(string()),
  unitCostDecimal: optional(string()),
}));