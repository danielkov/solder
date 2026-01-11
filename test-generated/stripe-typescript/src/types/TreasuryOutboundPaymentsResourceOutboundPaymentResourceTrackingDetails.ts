import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { TreasuryOutboundPaymentsResourceAchTrackingDetails } from './TreasuryOutboundPaymentsResourceAchTrackingDetails';
import { TreasuryOutboundPaymentsResourceAchTrackingDetailsSchema } from './TreasuryOutboundPaymentsResourceAchTrackingDetails';
import type { TreasuryOutboundPaymentsResourceUsDomesticWireTrackingDetails } from './TreasuryOutboundPaymentsResourceUsDomesticWireTrackingDetails';
import { TreasuryOutboundPaymentsResourceUsDomesticWireTrackingDetailsSchema } from './TreasuryOutboundPaymentsResourceUsDomesticWireTrackingDetails';
/**
 * TreasuryOutboundPaymentsResourceOutboundPaymentResourceTrackingDetails
 *
 * 
 */
export interface TreasuryOutboundPaymentsResourceOutboundPaymentResourceTrackingDetails {
  /**
   * TreasuryOutboundPaymentsResourceACHTrackingDetails
   *
   * 
   */
  ach?: TreasuryOutboundPaymentsResourceAchTrackingDetails;
  /**
   * The US bank account network used to send funds.
   */
  type: string;
  /**
   * TreasuryOutboundPaymentsResourceUSDomesticWireTrackingDetails
   *
   * 
   */
  usDomesticWire?: TreasuryOutboundPaymentsResourceUsDomesticWireTrackingDetails;
}

export const TreasuryOutboundPaymentsResourceOutboundPaymentResourceTrackingDetailsSchema: TypedSchema<TreasuryOutboundPaymentsResourceOutboundPaymentResourceTrackingDetails> = typed<TreasuryOutboundPaymentsResourceOutboundPaymentResourceTrackingDetails>(object({
  get ach() { return optional(TreasuryOutboundPaymentsResourceAchTrackingDetailsSchema) },
  type: string(),
  get usDomesticWire() { return optional(TreasuryOutboundPaymentsResourceUsDomesticWireTrackingDetailsSchema) },
}));