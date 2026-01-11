import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * TreasuryOutboundPaymentsResourceUSDomesticWireTrackingDetails
 *
 * 
 */
export interface TreasuryOutboundPaymentsResourceUsDomesticWireTrackingDetails {
  /**
   * CHIPS System Sequence Number (SSN) of the OutboundPayment for payments sent over the `us_domestic_wire` network.
   */
  chips?: string;
  /**
   * IMAD of the OutboundPayment for payments sent over the `us_domestic_wire` network.
   */
  imad?: string;
  /**
   * OMAD of the OutboundPayment for payments sent over the `us_domestic_wire` network.
   */
  omad?: string;
}

export const TreasuryOutboundPaymentsResourceUsDomesticWireTrackingDetailsSchema: TypedSchema<TreasuryOutboundPaymentsResourceUsDomesticWireTrackingDetails> = typed<TreasuryOutboundPaymentsResourceUsDomesticWireTrackingDetails>(object({
  chips: optional(string()),
  imad: optional(string()),
  omad: optional(string()),
}));