import { TypedSchema, number, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * PriceTier
 *
 * 
 */
export interface PriceTier {
  /**
   * Price for the entire tier.
   */
  flatAmount?: number;
  /**
   * Same as `flat_amount`, but contains a decimal value with at most 12 decimal places.
   */
  flatAmountDecimal?: string;
  /**
   * Per unit price for units relevant to the tier.
   */
  unitAmount?: number;
  /**
   * Same as `unit_amount`, but contains a decimal value with at most 12 decimal places.
   */
  unitAmountDecimal?: string;
  /**
   * Up to and including to this quantity will be contained in the tier.
   */
  upTo?: number;
}

export const PriceTierSchema: TypedSchema<PriceTier> = typed<PriceTier>(object({
  flatAmount: optional(number()),
  flatAmountDecimal: optional(string()),
  unitAmount: optional(number()),
  unitAmountDecimal: optional(string()),
  upTo: optional(number()),
}));