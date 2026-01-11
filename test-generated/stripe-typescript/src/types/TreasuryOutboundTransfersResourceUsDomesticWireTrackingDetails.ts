import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * TreasuryOutboundTransfersResourceUSDomesticWireTrackingDetails
 *
 * 
 */
export interface TreasuryOutboundTransfersResourceUsDomesticWireTrackingDetails {
  /**
   * CHIPS System Sequence Number (SSN) of the OutboundTransfer for transfers sent over the `us_domestic_wire` network.
   */
  chips?: string;
  /**
   * IMAD of the OutboundTransfer for transfers sent over the `us_domestic_wire` network.
   */
  imad?: string;
  /**
   * OMAD of the OutboundTransfer for transfers sent over the `us_domestic_wire` network.
   */
  omad?: string;
}

export const TreasuryOutboundTransfersResourceUsDomesticWireTrackingDetailsSchema: TypedSchema<TreasuryOutboundTransfersResourceUsDomesticWireTrackingDetails> = typed<TreasuryOutboundTransfersResourceUsDomesticWireTrackingDetails>(object({
  chips: optional(string()),
  imad: optional(string()),
  omad: optional(string()),
}));