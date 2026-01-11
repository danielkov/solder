import { TypedSchema, boolean, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * TreasuryOutboundPaymentsResourceOutboundPaymentResourceEndUserDetails
 *
 * 
 */
export interface TreasuryOutboundPaymentsResourceOutboundPaymentResourceEndUserDetails {
  /**
   * IP address of the user initiating the OutboundPayment. Set if `present` is set to `true`. IP address collection is required for risk and compliance reasons. This will be used to help determine if the OutboundPayment is authorized or should be blocked.
   */
  ipAddress?: string;
  /**
   * `true` if the OutboundPayment creation request is being made on behalf of an end user by a platform. Otherwise, `false`.
   */
  present: boolean;
}

export const TreasuryOutboundPaymentsResourceOutboundPaymentResourceEndUserDetailsSchema: TypedSchema<TreasuryOutboundPaymentsResourceOutboundPaymentResourceEndUserDetails> = typed<TreasuryOutboundPaymentsResourceOutboundPaymentResourceEndUserDetails>(object({
  ipAddress: optional(string()),
  present: boolean(),
}));