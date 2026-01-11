import { TypedSchema, boolean, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * three_d_secure_details_charge
 *
 * 
 */
export interface ThreeDSecureDetailsCharge {
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
   * The exemption requested via 3DS and accepted by the issuer at authentication time.
   */
  exemptionIndicator?: string;
  /**
   * Whether Stripe requested the value of `exemption_indicator` in the transaction. This will depend on
the outcome of Stripe's internal risk assessment.
   */
  exemptionIndicatorApplied?: boolean;
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

export const ThreeDSecureDetailsChargeSchema: TypedSchema<ThreeDSecureDetailsCharge> = typed<ThreeDSecureDetailsCharge>(object({
  authenticationFlow: optional(string()),
  electronicCommerceIndicator: optional(string()),
  exemptionIndicator: optional(string()),
  exemptionIndicatorApplied: optional(boolean()),
  result: optional(string()),
  resultReason: optional(string()),
  transactionId: optional(string()),
  version: optional(string()),
}));