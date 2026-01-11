import { TypedSchema, number, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * LegalEntityUBODeclaration
 *
 * 
 */
export interface LegalEntityUboDeclaration {
  /**
   * The Unix timestamp marking when the beneficial owner attestation was made.
   */
  date?: number;
  /**
   * The IP address from which the beneficial owner attestation was made.
   */
  ip?: string;
  /**
   * The user-agent string from the browser where the beneficial owner attestation was made.
   */
  userAgent?: string;
}

export const LegalEntityUboDeclarationSchema: TypedSchema<LegalEntityUboDeclaration> = typed<LegalEntityUboDeclaration>(object({
  date: optional(number()),
  ip: optional(string()),
  userAgent: optional(string()),
}));