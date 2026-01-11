import { TypedSchema, number, object, optional, typed } from '@speakeasy-api/tonic';
/**
 * TreasuryOutboundPaymentsResourceOutboundPaymentResourceStatusTransitions
 *
 * 
 */
export interface TreasuryOutboundPaymentsResourceOutboundPaymentResourceStatusTransitions {
  /**
   * Timestamp describing when an OutboundPayment changed status to `canceled`.
   */
  canceledAt?: number;
  /**
   * Timestamp describing when an OutboundPayment changed status to `failed`.
   */
  failedAt?: number;
  /**
   * Timestamp describing when an OutboundPayment changed status to `posted`.
   */
  postedAt?: number;
  /**
   * Timestamp describing when an OutboundPayment changed status to `returned`.
   */
  returnedAt?: number;
}

export const TreasuryOutboundPaymentsResourceOutboundPaymentResourceStatusTransitionsSchema: TypedSchema<TreasuryOutboundPaymentsResourceOutboundPaymentResourceStatusTransitions> = typed<TreasuryOutboundPaymentsResourceOutboundPaymentResourceStatusTransitions>(object({
  canceledAt: optional(number()),
  failedAt: optional(number()),
  postedAt: optional(number()),
  returnedAt: optional(number()),
}));