import { TypedSchema, object, string, typed } from '@speakeasy-api/tonic';
/**
 * mandate_au_becs_debit
 *
 * 
 */
export interface MandateAuBecsDebit {
  /**
   * The URL of the mandate. This URL generally contains sensitive information about the customer and should be shared with them exclusively.
   */
  url: string;
}

export const MandateAuBecsDebitSchema: TypedSchema<MandateAuBecsDebit> = typed<MandateAuBecsDebit>(object({
  url: string(),
}));