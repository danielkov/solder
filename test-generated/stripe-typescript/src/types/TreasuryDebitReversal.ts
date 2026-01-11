import { TypedSchema, boolean, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { MetadataProperty } from './MetadataProperty';
import { MetadataPropertySchema } from './MetadataProperty';
import type { TransactionOrRef2 } from './TransactionOrRef2';
import { TransactionOrRef2Schema } from './TransactionOrRef2';
import type { TreasuryReceivedDebitsResourceDebitReversalLinkedFlows } from './TreasuryReceivedDebitsResourceDebitReversalLinkedFlows';
import { TreasuryReceivedDebitsResourceDebitReversalLinkedFlowsSchema } from './TreasuryReceivedDebitsResourceDebitReversalLinkedFlows';
import type { TreasuryReceivedDebitsResourceStatusTransitions } from './TreasuryReceivedDebitsResourceStatusTransitions';
import { TreasuryReceivedDebitsResourceStatusTransitionsSchema } from './TreasuryReceivedDebitsResourceStatusTransitions';
/**
 * TreasuryReceivedDebitsResourceDebitReversal
 *
 * You can reverse some [ReceivedDebits](https://stripe.com/docs/api#received_debits) depending on their network and source flow. Reversing a ReceivedDebit leads to the creation of a new object known as a DebitReversal.
 */
export interface TreasuryDebitReversal {
  /**
   * Amount (in cents) transferred.
   */
  amount: number;
  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;
  /**
   * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
   */
  currency: string;
  /**
   * The FinancialAccount to reverse funds from.
   */
  financialAccount?: string;
  /**
   * A [hosted transaction receipt](https://stripe.com/docs/treasury/moving-money/regulatory-receipts) URL that is provided when money movement is considered regulated under Stripe's money transmission licenses.
   */
  hostedRegulatoryReceiptUrl?: string;
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * Other flows linked to a DebitReversal.
   */
  linkedFlows?: TreasuryReceivedDebitsResourceDebitReversalLinkedFlows;
  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
   */
  metadata: MetadataProperty;
  /**
   * The rails used to reverse the funds.
   */
  network: string;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: string;
  /**
   * The ReceivedDebit being reversed.
   */
  receivedDebit: string;
  /**
   * Status of the DebitReversal
   */
  status: string;
  /**
   * TreasuryReceivedDebitsResourceStatusTransitions
   *
   * 
   */
  statusTransitions: TreasuryReceivedDebitsResourceStatusTransitions;
  /**
   * The Transaction associated with this object.
   */
  transaction?: TransactionOrRef2;
}

export const TreasuryDebitReversalSchema: TypedSchema<TreasuryDebitReversal> = typed<TreasuryDebitReversal>(object({
  amount: number(),
  created: number(),
  currency: string(),
  financialAccount: optional(string()),
  hostedRegulatoryReceiptUrl: optional(string()),
  id: string(),
  get linkedFlows() { return optional(TreasuryReceivedDebitsResourceDebitReversalLinkedFlowsSchema) },
  livemode: boolean(),
  metadata: MetadataPropertySchema,
  network: string(),
  object: string(),
  receivedDebit: string(),
  status: string(),
  statusTransitions: TreasuryReceivedDebitsResourceStatusTransitionsSchema,
  get transaction() { return optional(TransactionOrRef2Schema) },
}));