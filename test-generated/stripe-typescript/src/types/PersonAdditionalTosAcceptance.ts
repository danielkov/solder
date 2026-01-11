import { TypedSchema, number, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * PersonAdditionalTOSAcceptance
 *
 * 
 */
export interface PersonAdditionalTosAcceptance {
  /**
   * The Unix timestamp marking when the legal guardian accepted the service agreement.
   */
  date?: number;
  /**
   * The IP address from which the legal guardian accepted the service agreement.
   */
  ip?: string;
  /**
   * The user agent of the browser from which the legal guardian accepted the service agreement.
   */
  userAgent?: string;
}

export const PersonAdditionalTosAcceptanceSchema: TypedSchema<PersonAdditionalTosAcceptance> = typed<PersonAdditionalTosAcceptance>(object({
  date: optional(number()),
  ip: optional(string()),
  userAgent: optional(string()),
}));