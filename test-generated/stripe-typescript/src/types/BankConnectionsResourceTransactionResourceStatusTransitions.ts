import { TypedSchema, number, object, optional, typed } from '@speakeasy-api/tonic';
/**
 * BankConnectionsResourceTransactionResourceStatusTransitions
 *
 * 
 */
export interface BankConnectionsResourceTransactionResourceStatusTransitions {
  /**
   * Time at which this transaction posted. Measured in seconds since the Unix epoch.
   */
  postedAt?: number;
  /**
   * Time at which this transaction was voided. Measured in seconds since the Unix epoch.
   */
  voidAt?: number;
}

export const BankConnectionsResourceTransactionResourceStatusTransitionsSchema: TypedSchema<BankConnectionsResourceTransactionResourceStatusTransitions> = typed<BankConnectionsResourceTransactionResourceStatusTransitions>(object({
  postedAt: optional(number()),
  voidAt: optional(number()),
}));