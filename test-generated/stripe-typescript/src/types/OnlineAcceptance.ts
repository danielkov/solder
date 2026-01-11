import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * online_acceptance
 *
 * 
 */
export interface OnlineAcceptance {
  /**
   * The customer accepts the mandate from this IP address.
   */
  ipAddress?: string;
  /**
   * The customer accepts the mandate using the user agent of the browser.
   */
  userAgent?: string;
}

export const OnlineAcceptanceSchema: TypedSchema<OnlineAcceptance> = typed<OnlineAcceptance>(object({
  ipAddress: optional(string()),
  userAgent: optional(string()),
}));