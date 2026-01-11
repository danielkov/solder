import { TypedSchema, number, object, optional, typed } from '@speakeasy-api/tonic';
/**
 * TreasuryOutboundTransfersResourceStatusTransitions
 *
 * 
 */
export interface TreasuryOutboundTransfersResourceStatusTransitions {
  /**
   * Timestamp describing when an OutboundTransfer changed status to `canceled`
   */
  canceledAt?: number;
  /**
   * Timestamp describing when an OutboundTransfer changed status to `failed`
   */
  failedAt?: number;
  /**
   * Timestamp describing when an OutboundTransfer changed status to `posted`
   */
  postedAt?: number;
  /**
   * Timestamp describing when an OutboundTransfer changed status to `returned`
   */
  returnedAt?: number;
}

export const TreasuryOutboundTransfersResourceStatusTransitionsSchema: TypedSchema<TreasuryOutboundTransfersResourceStatusTransitions> = typed<TreasuryOutboundTransfersResourceStatusTransitions>(object({
  canceledAt: optional(number()),
  failedAt: optional(number()),
  postedAt: optional(number()),
  returnedAt: optional(number()),
}));