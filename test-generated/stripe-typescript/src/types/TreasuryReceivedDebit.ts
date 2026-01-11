import { TypedSchema, boolean, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { TransactionOrRef2 } from './TransactionOrRef2';
import { TransactionOrRef2Schema } from './TransactionOrRef2';
import type { TreasuryReceivedDebitsResourceLinkedFlows } from './TreasuryReceivedDebitsResourceLinkedFlows';
import { TreasuryReceivedDebitsResourceLinkedFlowsSchema } from './TreasuryReceivedDebitsResourceLinkedFlows';
import type { TreasuryReceivedDebitsResourceReversalDetails } from './TreasuryReceivedDebitsResourceReversalDetails';
import { TreasuryReceivedDebitsResourceReversalDetailsSchema } from './TreasuryReceivedDebitsResourceReversalDetails';
import type { TreasurySharedResourceInitiatingPaymentMethodDetailsInitiatingPaymentMethodDetails } from './TreasurySharedResourceInitiatingPaymentMethodDetailsInitiatingPaymentMethodDetails';
import { TreasurySharedResourceInitiatingPaymentMethodDetailsInitiatingPaymentMethodDetailsSchema } from './TreasurySharedResourceInitiatingPaymentMethodDetailsInitiatingPaymentMethodDetails';
/**
 * TreasuryReceivedDebitsResourceReceivedDebit
 *
 * ReceivedDebits represent funds pulled from a [FinancialAccount](https://stripe.com/docs/api#financial_accounts). These are not initiated from the FinancialAccount.
 */
export interface TreasuryReceivedDebit {
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
   * An arbitrary string attached to the object. Often useful for displaying to users.
   */
  description: string;
  /**
   * Reason for the failure. A ReceivedDebit might fail because the FinancialAccount doesn't have sufficient funds, is closed, or is frozen.
   */
  failureCode?: string;
  /**
   * The FinancialAccount that funds were pulled from.
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
   * TreasurySharedResourceInitiatingPaymentMethodDetailsInitiatingPaymentMethodDetails
   *
   * 
   */
  initiatingPaymentMethodDetails?: TreasurySharedResourceInitiatingPaymentMethodDetailsInitiatingPaymentMethodDetails;
  /**
   * TreasuryReceivedDebitsResourceLinkedFlows
   *
   * 
   */
  linkedFlows: TreasuryReceivedDebitsResourceLinkedFlows;
  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
  /**
   * The network used for the ReceivedDebit.
   */
  network: string;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: string;
  /**
   * Details describing when a ReceivedDebit might be reversed.
   */
  reversalDetails?: TreasuryReceivedDebitsResourceReversalDetails;
  /**
   * Status of the ReceivedDebit. ReceivedDebits are created with a status of either `succeeded` (approved) or `failed` (declined). The failure reason can be found under the `failure_code`.
   */
  status: string;
  /**
   * The Transaction associated with this object.
   */
  transaction?: TransactionOrRef2;
}

export const TreasuryReceivedDebitSchema: TypedSchema<TreasuryReceivedDebit> = typed<TreasuryReceivedDebit>(object({
  amount: number(),
  created: number(),
  currency: string(),
  description: string(),
  failureCode: optional(string()),
  financialAccount: optional(string()),
  hostedRegulatoryReceiptUrl: optional(string()),
  id: string(),
  get initiatingPaymentMethodDetails() { return optional(TreasurySharedResourceInitiatingPaymentMethodDetailsInitiatingPaymentMethodDetailsSchema) },
  linkedFlows: TreasuryReceivedDebitsResourceLinkedFlowsSchema,
  livemode: boolean(),
  network: string(),
  object: string(),
  get reversalDetails() { return optional(TreasuryReceivedDebitsResourceReversalDetailsSchema) },
  status: string(),
  get transaction() { return optional(TransactionOrRef2Schema) },
}));