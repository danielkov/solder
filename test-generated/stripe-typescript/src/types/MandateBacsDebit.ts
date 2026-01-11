import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * mandate_bacs_debit
 *
 * 
 */
export interface MandateBacsDebit {
  /**
   * The status of the mandate on the Bacs network. Can be one of `pending`, `revoked`, `refused`, or `accepted`.
   */
  networkStatus: string;
  /**
   * The unique reference identifying the mandate on the Bacs network.
   */
  reference: string;
  /**
   * When the mandate is revoked on the Bacs network this field displays the reason for the revocation.
   */
  revocationReason?: string;
  /**
   * The URL that will contain the mandate that the customer has signed.
   */
  url: string;
}

export const MandateBacsDebitSchema: TypedSchema<MandateBacsDebit> = typed<MandateBacsDebit>(object({
  networkStatus: string(),
  reference: string(),
  revocationReason: optional(string()),
  url: string(),
}));