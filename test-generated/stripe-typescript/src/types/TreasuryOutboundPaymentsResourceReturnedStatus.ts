import { TypedSchema, object, string, typed } from '@speakeasy-api/tonic';

import type { TransactionOrRef2 } from './TransactionOrRef2';
import { TransactionOrRef2Schema } from './TransactionOrRef2';
/**
 * TreasuryOutboundPaymentsResourceReturnedStatus
 *
 * 
 */
export interface TreasuryOutboundPaymentsResourceReturnedStatus {
  /**
   * Reason for the return.
   */
  code: string;
  /**
   * The Transaction associated with this object.
   */
  transaction: TransactionOrRef2;
}

export const TreasuryOutboundPaymentsResourceReturnedStatusSchema: TypedSchema<TreasuryOutboundPaymentsResourceReturnedStatus> = typed<TreasuryOutboundPaymentsResourceReturnedStatus>(object({
  code: string(),
  transaction: TransactionOrRef2Schema,
}));