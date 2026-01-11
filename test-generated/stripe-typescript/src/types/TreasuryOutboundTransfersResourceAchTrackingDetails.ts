import { TypedSchema, object, string, typed } from '@speakeasy-api/tonic';
/**
 * TreasuryOutboundTransfersResourceACHTrackingDetails
 *
 * 
 */
export interface TreasuryOutboundTransfersResourceAchTrackingDetails {
  /**
   * ACH trace ID of the OutboundTransfer for transfers sent over the `ach` network.
   */
  traceId: string;
}

export const TreasuryOutboundTransfersResourceAchTrackingDetailsSchema: TypedSchema<TreasuryOutboundTransfersResourceAchTrackingDetails> = typed<TreasuryOutboundTransfersResourceAchTrackingDetails>(object({
  traceId: string(),
}));