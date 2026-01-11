import { TypedSchema, boolean, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { SourceTransactionAchCreditTransferData } from './SourceTransactionAchCreditTransferData';
import { SourceTransactionAchCreditTransferDataSchema } from './SourceTransactionAchCreditTransferData';
import type { SourceTransactionChfCreditTransferData } from './SourceTransactionChfCreditTransferData';
import { SourceTransactionChfCreditTransferDataSchema } from './SourceTransactionChfCreditTransferData';
import type { SourceTransactionGbpCreditTransferData } from './SourceTransactionGbpCreditTransferData';
import { SourceTransactionGbpCreditTransferDataSchema } from './SourceTransactionGbpCreditTransferData';
import type { SourceTransactionPaperCheckData } from './SourceTransactionPaperCheckData';
import { SourceTransactionPaperCheckDataSchema } from './SourceTransactionPaperCheckData';
import type { SourceTransactionSepaCreditTransferData } from './SourceTransactionSepaCreditTransferData';
import { SourceTransactionSepaCreditTransferDataSchema } from './SourceTransactionSepaCreditTransferData';
/**
 * SourceTransaction
 *
 * Some payment methods have no required amount that a customer must send.
Customers can be instructed to send any amount, and it can be made up of
multiple transactions. As such, sources can have multiple associated
transactions.
 */
export interface SourceTransaction {
  /**
   * SourceTransactionAchCreditTransferData
   *
   * 
   */
  achCreditTransfer?: SourceTransactionAchCreditTransferData;
  /**
   * A positive integer in the smallest currency unit (that is, 100 cents for $1.00, or 1 for ¥1, Japanese Yen being a zero-decimal currency) representing the amount your customer has pushed to the receiver.
   */
  amount: number;
  /**
   * SourceTransactionChfCreditTransferData
   *
   * 
   */
  chfCreditTransfer?: SourceTransactionChfCreditTransferData;
  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;
  /**
   * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
   */
  currency: string;
  /**
   * SourceTransactionGbpCreditTransferData
   *
   * 
   */
  gbpCreditTransfer?: SourceTransactionGbpCreditTransferData;
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: string;
  /**
   * SourceTransactionPaperCheckData
   *
   * 
   */
  paperCheck?: SourceTransactionPaperCheckData;
  /**
   * SourceTransactionSepaCreditTransferData
   *
   * 
   */
  sepaCreditTransfer?: SourceTransactionSepaCreditTransferData;
  /**
   * The ID of the source this transaction is attached to.
   */
  source: string;
  /**
   * The status of the transaction, one of `succeeded`, `pending`, or `failed`.
   */
  status: string;
  /**
   * The type of source this transaction is attached to.
   */
  type: string;
}

export const SourceTransactionSchema: TypedSchema<SourceTransaction> = typed<SourceTransaction>(object({
  get achCreditTransfer() { return optional(SourceTransactionAchCreditTransferDataSchema) },
  amount: number(),
  get chfCreditTransfer() { return optional(SourceTransactionChfCreditTransferDataSchema) },
  created: number(),
  currency: string(),
  get gbpCreditTransfer() { return optional(SourceTransactionGbpCreditTransferDataSchema) },
  id: string(),
  livemode: boolean(),
  object: string(),
  get paperCheck() { return optional(SourceTransactionPaperCheckDataSchema) },
  get sepaCreditTransfer() { return optional(SourceTransactionSepaCreditTransferDataSchema) },
  source: string(),
  status: string(),
  type: string(),
}));