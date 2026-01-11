import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * three_d_secure_details
 *
 * 
 */
export interface ThreeDSecureDetails {
  /**
   * For authenticated transactions: how the customer was authenticated by
the issuing bank.
   */
  authenticationFlow?: string;
  /**
   * The Electronic Commerce Indicator (ECI). A protocol-level field
indicating what degree of authentication was performed.
   */
  electronicCommerceIndicator?: string;
  /**
   * Indicates the outcome of 3D Secure authentication.
   */
  result?: string;
  /**
   * Additional information about why 3D Secure succeeded or failed based
on the `result`.
   */
  resultReason?: string;
  /**
   * The 3D Secure 1 XID or 3D Secure 2 Directory Server Transaction ID
(dsTransId) for this payment.
   */
  transactionId?: string;
  /**
   * The version of 3D Secure that was used.
   */
  version?: string;
}

export const ThreeDSecureDetailsSchema: TypedSchema<ThreeDSecureDetails> = typed<ThreeDSecureDetails>(object({
  authenticationFlow: optional(string()),
  electronicCommerceIndicator: optional(string()),
  result: optional(string()),
  resultReason: optional(string()),
  transactionId: optional(string()),
  version: optional(string()),
}));