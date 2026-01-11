import { TypedSchema, object, string, typed } from '@speakeasy-api/tonic';
/**
 * TreasuryOutboundPaymentsResourceACHTrackingDetails
 *
 * 
 */
export interface TreasuryOutboundPaymentsResourceAchTrackingDetails {
  /**
   * ACH trace ID of the OutboundPayment for payments sent over the `ach` network.
   */
  traceId: string;
}

export const TreasuryOutboundPaymentsResourceAchTrackingDetailsSchema: TypedSchema<TreasuryOutboundPaymentsResourceAchTrackingDetails> = typed<TreasuryOutboundPaymentsResourceAchTrackingDetails>(object({
  traceId: string(),
}));