import { TypedSchema, object, string, typed } from '@speakeasy-api/tonic';
/**
 * mandate_sepa_debit
 *
 * 
 */
export interface MandateSepaDebit {
  /**
   * The unique reference of the mandate.
   */
  reference: string;
  /**
   * The URL of the mandate. This URL generally contains sensitive information about the customer and should be shared with them exclusively.
   */
  url: string;
}

export const MandateSepaDebitSchema: TypedSchema<MandateSepaDebit> = typed<MandateSepaDebit>(object({
  reference: string(),
  url: string(),
}));