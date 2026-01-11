import { TypedSchema, boolean, object, typed } from '@speakeasy-api/tonic';
/**
 * ConnectEmbeddedPaymentDisputesFeatures
 *
 * 
 */
export interface ConnectEmbeddedPaymentDisputesFeatures {
  /**
   * Whether connected accounts can manage destination charges that are created on behalf of them. This is `false` by default.
   */
  destinationOnBehalfOfChargeManagement: boolean;
  /**
   * Whether responding to disputes is enabled, including submitting evidence and accepting disputes. This is `true` by default.
   */
  disputeManagement: boolean;
  /**
   * Whether sending refunds is enabled. This is `true` by default.
   */
  refundManagement: boolean;
}

export const ConnectEmbeddedPaymentDisputesFeaturesSchema: TypedSchema<ConnectEmbeddedPaymentDisputesFeatures> = typed<ConnectEmbeddedPaymentDisputesFeatures>(object({
  destinationOnBehalfOfChargeManagement: boolean(),
  disputeManagement: boolean(),
  refundManagement: boolean(),
}));