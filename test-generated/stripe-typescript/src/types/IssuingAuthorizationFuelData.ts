import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * IssuingAuthorizationFuelData
 *
 * 
 */
export interface IssuingAuthorizationFuelData {
  /**
   * [Conexxus Payment System Product Code](https://www.conexxus.org/conexxus-payment-system-product-codes) identifying the primary fuel product purchased.
   */
  industryProductCode?: string;
  /**
   * The quantity of `unit`s of fuel that was dispensed, represented as a decimal string with at most 12 decimal places.
   */
  quantityDecimal?: string;
  /**
   * The type of fuel that was purchased.
   */
  type?: string;
  /**
   * The units for `quantity_decimal`.
   */
  unit?: string;
  /**
   * The cost in cents per each unit of fuel, represented as a decimal string with at most 12 decimal places.
   */
  unitCostDecimal?: string;
}

export const IssuingAuthorizationFuelDataSchema: TypedSchema<IssuingAuthorizationFuelData> = typed<IssuingAuthorizationFuelData>(object({
  industryProductCode: optional(string()),
  quantityDecimal: optional(string()),
  type: optional(string()),
  unit: optional(string()),
  unitCostDecimal: optional(string()),
}));