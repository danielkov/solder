import { TypedSchema, number, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * LegalEntityDirectorshipDeclaration
 *
 * 
 */
export interface LegalEntityDirectorshipDeclaration {
  /**
   * The Unix timestamp marking when the directorship declaration attestation was made.
   */
  date?: number;
  /**
   * The IP address from which the directorship declaration attestation was made.
   */
  ip?: string;
  /**
   * The user-agent string from the browser where the directorship declaration attestation was made.
   */
  userAgent?: string;
}

export const LegalEntityDirectorshipDeclarationSchema: TypedSchema<LegalEntityDirectorshipDeclaration> = typed<LegalEntityDirectorshipDeclaration>(object({
  date: optional(number()),
  ip: optional(string()),
  userAgent: optional(string()),
}));