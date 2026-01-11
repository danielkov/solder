import { TypedSchema, number, object, string, typed } from '@speakeasy-api/tonic';
/**
 * TaxDeductedAtSource
 *
 * 
 */
export interface TaxDeductedAtSource {
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: string;
  /**
   * The end of the invoicing period. This TDS applies to Stripe fees collected during this invoicing period.
   */
  periodEnd: number;
  /**
   * The start of the invoicing period. This TDS applies to Stripe fees collected during this invoicing period.
   */
  periodStart: number;
  /**
   * The TAN that was supplied to Stripe when TDS was assessed
   */
  taxDeductionAccountNumber: string;
}

export const TaxDeductedAtSourceSchema: TypedSchema<TaxDeductedAtSource> = typed<TaxDeductedAtSource>(object({
  id: string(),
  object: string(),
  periodEnd: number(),
  periodStart: number(),
  taxDeductionAccountNumber: string(),
}));