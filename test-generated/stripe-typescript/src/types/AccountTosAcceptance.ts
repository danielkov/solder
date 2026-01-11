import { TypedSchema, number, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * AccountTOSAcceptance
 *
 * 
 */
export interface AccountTosAcceptance {
  /**
   * The Unix timestamp marking when the account representative accepted their service agreement
   */
  date?: number;
  /**
   * The IP address from which the account representative accepted their service agreement
   */
  ip?: string;
  /**
   * The user's service agreement type
   */
  serviceAgreement?: string;
  /**
   * The user agent of the browser from which the account representative accepted their service agreement
   */
  userAgent?: string;
}

export const AccountTosAcceptanceSchema: TypedSchema<AccountTosAcceptance> = typed<AccountTosAcceptance>(object({
  date: optional(number()),
  ip: optional(string()),
  serviceAgreement: optional(string()),
  userAgent: optional(string()),
}));