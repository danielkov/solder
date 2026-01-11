import { TypedSchema, object, string, typed } from '@speakeasy-api/tonic';

import type { TransactionOrRef2 } from './TransactionOrRef2';
import { TransactionOrRef2Schema } from './TransactionOrRef2';
/**
 * TreasuryOutboundTransfersResourceReturnedDetails
 *
 * 
 */
export interface TreasuryOutboundTransfersResourceReturnedDetails {
  /**
   * Reason for the return.
   */
  code: string;
  /**
   * The Transaction associated with this object.
   */
  transaction: TransactionOrRef2;
}

export const TreasuryOutboundTransfersResourceReturnedDetailsSchema: TypedSchema<TreasuryOutboundTransfersResourceReturnedDetails> = typed<TreasuryOutboundTransfersResourceReturnedDetails>(object({
  code: string(),
  transaction: TransactionOrRef2Schema,
}));