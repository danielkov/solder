import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * tax_id_verification
 *
 * 
 */
export interface TaxIdVerification {
  /**
   * Verification status, one of `pending`, `verified`, `unverified`, or `unavailable`.
   */
  status: string;
  /**
   * Verified address.
   */
  verifiedAddress?: string;
  /**
   * Verified name.
   */
  verifiedName?: string;
}

export const TaxIdVerificationSchema: TypedSchema<TaxIdVerification> = typed<TaxIdVerification>(object({
  status: string(),
  verifiedAddress: optional(string()),
  verifiedName: optional(string()),
}));