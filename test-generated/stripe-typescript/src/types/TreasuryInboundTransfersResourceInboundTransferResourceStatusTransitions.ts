import { TypedSchema, number, object, optional, typed } from '@speakeasy-api/tonic';
/**
 * TreasuryInboundTransfersResourceInboundTransferResourceStatusTransitions
 *
 * 
 */
export interface TreasuryInboundTransfersResourceInboundTransferResourceStatusTransitions {
  /**
   * Timestamp describing when an InboundTransfer changed status to `canceled`.
   */
  canceledAt?: number;
  /**
   * Timestamp describing when an InboundTransfer changed status to `failed`.
   */
  failedAt?: number;
  /**
   * Timestamp describing when an InboundTransfer changed status to `succeeded`.
   */
  succeededAt?: number;
}

export const TreasuryInboundTransfersResourceInboundTransferResourceStatusTransitionsSchema: TypedSchema<TreasuryInboundTransfersResourceInboundTransferResourceStatusTransitions> = typed<TreasuryInboundTransfersResourceInboundTransferResourceStatusTransitions>(object({
  canceledAt: optional(number()),
  failedAt: optional(number()),
  succeededAt: optional(number()),
}));