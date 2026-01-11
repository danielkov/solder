import { TypedSchema, number, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * LegalEntityRepresentativeDeclaration
 *
 * 
 */
export interface LegalEntityRepresentativeDeclaration {
  /**
   * The Unix timestamp marking when the representative declaration attestation was made.
   */
  date?: number;
  /**
   * The IP address from which the representative declaration attestation was made.
   */
  ip?: string;
  /**
   * The user-agent string from the browser where the representative declaration attestation was made.
   */
  userAgent?: string;
}

export const LegalEntityRepresentativeDeclarationSchema: TypedSchema<LegalEntityRepresentativeDeclaration> = typed<LegalEntityRepresentativeDeclaration>(object({
  date: optional(number()),
  ip: optional(string()),
  userAgent: optional(string()),
}));