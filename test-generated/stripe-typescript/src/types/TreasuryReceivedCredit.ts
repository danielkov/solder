import { TypedSchema, boolean, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { TransactionOrRef2 } from './TransactionOrRef2';
import { TransactionOrRef2Schema } from './TransactionOrRef2';
import type { TreasuryReceivedCreditsResourceLinkedFlows } from './TreasuryReceivedCreditsResourceLinkedFlows';
import { TreasuryReceivedCreditsResourceLinkedFlowsSchema } from './TreasuryReceivedCreditsResourceLinkedFlows';
import type { TreasuryReceivedCreditsResourceReversalDetails } from './TreasuryReceivedCreditsResourceReversalDetails';
import { TreasuryReceivedCreditsResourceReversalDetailsSchema } from './TreasuryReceivedCreditsResourceReversalDetails';
import type { TreasurySharedResourceInitiatingPaymentMethodDetailsInitiatingPaymentMethodDetails } from './TreasurySharedResourceInitiatingPaymentMethodDetailsInitiatingPaymentMethodDetails';
import { TreasurySharedResourceInitiatingPaymentMethodDetailsInitiatingPaymentMethodDetailsSchema } from './TreasurySharedResourceInitiatingPaymentMethodDetailsInitiatingPaymentMethodDetails';
/**
 * TreasuryReceivedCreditsResourceReceivedCredit
 *
 * ReceivedCredits represent funds sent to a [FinancialAccount](https://stripe.com/docs/api#financial_accounts) (for example, via ACH or wire). These money movements are not initiated from the FinancialAccount.
 */
export interface TreasuryReceivedCredit {
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
   * Reason for the failure. A ReceivedCredit might fail because the receiving FinancialAccount is closed or frozen.
   */
  failureCode?: string;
  /**
   * The FinancialAccount that received the funds.
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
  initiatingPaymentMethodDetails: TreasurySharedResourceInitiatingPaymentMethodDetailsInitiatingPaymentMethodDetails;
  /**
   * TreasuryReceivedCreditsResourceLinkedFlows
   *
   * 
   */
  linkedFlows: TreasuryReceivedCreditsResourceLinkedFlows;
  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
  /**
   * The rails used to send the funds.
   */
  network: string;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: string;
  /**
   * Details describing when a ReceivedCredit may be reversed.
   */
  reversalDetails?: TreasuryReceivedCreditsResourceReversalDetails;
  /**
   * Status of the ReceivedCredit. ReceivedCredits are created either `succeeded` (approved) or `failed` (declined). If a ReceivedCredit is declined, the failure reason can be found in the `failure_code` field.
   */
  status: string;
  /**
   * The Transaction associated with this object.
   */
  transaction?: TransactionOrRef2;
}

export const TreasuryReceivedCreditSchema: TypedSchema<TreasuryReceivedCredit> = typed<TreasuryReceivedCredit>(object({
  amount: number(),
  created: number(),
  currency: string(),
  description: string(),
  failureCode: optional(string()),
  financialAccount: optional(string()),
  hostedRegulatoryReceiptUrl: optional(string()),
  id: string(),
  initiatingPaymentMethodDetails: TreasurySharedResourceInitiatingPaymentMethodDetailsInitiatingPaymentMethodDetailsSchema,
  linkedFlows: TreasuryReceivedCreditsResourceLinkedFlowsSchema,
  livemode: boolean(),
  network: string(),
  object: string(),
  get reversalDetails() { return optional(TreasuryReceivedCreditsResourceReversalDetailsSchema) },
  status: string(),
  get transaction() { return optional(TransactionOrRef2Schema) },
}));