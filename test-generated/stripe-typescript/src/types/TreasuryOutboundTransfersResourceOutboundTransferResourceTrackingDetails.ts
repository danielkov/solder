import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { TreasuryOutboundTransfersResourceAchTrackingDetails } from './TreasuryOutboundTransfersResourceAchTrackingDetails';
import { TreasuryOutboundTransfersResourceAchTrackingDetailsSchema } from './TreasuryOutboundTransfersResourceAchTrackingDetails';
import type { TreasuryOutboundTransfersResourceUsDomesticWireTrackingDetails } from './TreasuryOutboundTransfersResourceUsDomesticWireTrackingDetails';
import { TreasuryOutboundTransfersResourceUsDomesticWireTrackingDetailsSchema } from './TreasuryOutboundTransfersResourceUsDomesticWireTrackingDetails';
/**
 * TreasuryOutboundTransfersResourceOutboundTransferResourceTrackingDetails
 *
 * 
 */
export interface TreasuryOutboundTransfersResourceOutboundTransferResourceTrackingDetails {
  /**
   * TreasuryOutboundTransfersResourceACHTrackingDetails
   *
   * 
   */
  ach?: TreasuryOutboundTransfersResourceAchTrackingDetails;
  /**
   * The US bank account network used to send funds.
   */
  type: string;
  /**
   * TreasuryOutboundTransfersResourceUSDomesticWireTrackingDetails
   *
   * 
   */
  usDomesticWire?: TreasuryOutboundTransfersResourceUsDomesticWireTrackingDetails;
}

export const TreasuryOutboundTransfersResourceOutboundTransferResourceTrackingDetailsSchema: TypedSchema<TreasuryOutboundTransfersResourceOutboundTransferResourceTrackingDetails> = typed<TreasuryOutboundTransfersResourceOutboundTransferResourceTrackingDetails>(object({
  get ach() { return optional(TreasuryOutboundTransfersResourceAchTrackingDetailsSchema) },
  type: string(),
  get usDomesticWire() { return optional(TreasuryOutboundTransfersResourceUsDomesticWireTrackingDetailsSchema) },
}));