import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * IssuingTransactionFuelData
 *
 * 
 */
export interface IssuingTransactionFuelData {
  /**
   * [Conexxus Payment System Product Code](https://www.conexxus.org/conexxus-payment-system-product-codes) identifying the primary fuel product purchased.
   */
  industryProductCode?: string;
  /**
   * The quantity of `unit`s of fuel that was dispensed, represented as a decimal string with at most 12 decimal places.
   */
  quantityDecimal?: string;
  /**
   * The type of fuel that was purchased. One of `diesel`, `unleaded_plus`, `unleaded_regular`, `unleaded_super`, or `other`.
   */
  type: string;
  /**
   * The units for `quantity_decimal`. One of `charging_minute`, `imperial_gallon`, `kilogram`, `kilowatt_hour`, `liter`, `pound`, `us_gallon`, or `other`.
   */
  unit: string;
  /**
   * The cost in cents per each unit of fuel, represented as a decimal string with at most 12 decimal places.
   */
  unitCostDecimal: string;
}

export const IssuingTransactionFuelDataSchema: TypedSchema<IssuingTransactionFuelData> = typed<IssuingTransactionFuelData>(object({
  industryProductCode: optional(string()),
  quantityDecimal: optional(string()),
  type: string(),
  unit: string(),
  unitCostDecimal: string(),
}));