import { TypedSchema, number, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * AccountTermsOfService
 *
 * 
 */
export interface AccountTermsOfService {
  /**
   * The Unix timestamp marking when the account representative accepted the service agreement.
   */
  date?: number;
  /**
   * The IP address from which the account representative accepted the service agreement.
   */
  ip?: string;
  /**
   * The user agent of the browser from which the account representative accepted the service agreement.
   */
  userAgent?: string;
}

export const AccountTermsOfServiceSchema: TypedSchema<AccountTermsOfService> = typed<AccountTermsOfService>(object({
  date: optional(number()),
  ip: optional(string()),
  userAgent: optional(string()),
}));