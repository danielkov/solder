import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostTestHelpersTreasuryOutboundPaymentsIdRequestAch } from './PostTestHelpersTreasuryOutboundPaymentsIdRequestAch';
import { PostTestHelpersTreasuryOutboundPaymentsIdRequestAchSchema } from './PostTestHelpersTreasuryOutboundPaymentsIdRequestAch';
import type { PostTestHelpersTreasuryOutboundPaymentsIdRequestUsDomesticWire } from './PostTestHelpersTreasuryOutboundPaymentsIdRequestUsDomesticWire';
import { PostTestHelpersTreasuryOutboundPaymentsIdRequestUsDomesticWireSchema } from './PostTestHelpersTreasuryOutboundPaymentsIdRequestUsDomesticWire';
/**
 * tracking_details_params
 *
 * Details about network-specific tracking information.
 */
export interface PostTestHelpersTreasuryOutboundPaymentsIdRequestTrackingDetails {
  /**
   * ach_tracking_details_params
   */
  ach?: PostTestHelpersTreasuryOutboundPaymentsIdRequestAch;
  type: string;
  /**
   * us_domestic_wire_tracking_details_params
   */
  usDomesticWire?: PostTestHelpersTreasuryOutboundPaymentsIdRequestUsDomesticWire;
}

export const PostTestHelpersTreasuryOutboundPaymentsIdRequestTrackingDetailsSchema: TypedSchema<PostTestHelpersTreasuryOutboundPaymentsIdRequestTrackingDetails> = typed<PostTestHelpersTreasuryOutboundPaymentsIdRequestTrackingDetails>(object({
  get ach() { return optional(PostTestHelpersTreasuryOutboundPaymentsIdRequestAchSchema) },
  type: string(),
  get usDomesticWire() { return optional(PostTestHelpersTreasuryOutboundPaymentsIdRequestUsDomesticWireSchema) },
}));