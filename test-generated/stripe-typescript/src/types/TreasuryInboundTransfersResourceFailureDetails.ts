import { TypedSchema, object, string, typed } from '@speakeasy-api/tonic';
/**
 * TreasuryInboundTransfersResourceFailureDetails
 *
 * 
 */
export interface TreasuryInboundTransfersResourceFailureDetails {
  /**
   * Reason for the failure.
   */
  code: string;
}

export const TreasuryInboundTransfersResourceFailureDetailsSchema: TypedSchema<TreasuryInboundTransfersResourceFailureDetails> = typed<TreasuryInboundTransfersResourceFailureDetails>(object({
  code: string(),
}));