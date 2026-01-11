import { TypedSchema, boolean, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { InboundTransfers } from './InboundTransfers';
import { InboundTransfersSchema } from './InboundTransfers';
import type { MetadataProperty } from './MetadataProperty';
import { MetadataPropertySchema } from './MetadataProperty';
import type { TransactionOrRef2 } from './TransactionOrRef2';
import { TransactionOrRef2Schema } from './TransactionOrRef2';
import type { TreasuryInboundTransfersResourceFailureDetails } from './TreasuryInboundTransfersResourceFailureDetails';
import { TreasuryInboundTransfersResourceFailureDetailsSchema } from './TreasuryInboundTransfersResourceFailureDetails';
import type { TreasuryInboundTransfersResourceInboundTransferResourceLinkedFlows } from './TreasuryInboundTransfersResourceInboundTransferResourceLinkedFlows';
import { TreasuryInboundTransfersResourceInboundTransferResourceLinkedFlowsSchema } from './TreasuryInboundTransfersResourceInboundTransferResourceLinkedFlows';
import type { TreasuryInboundTransfersResourceInboundTransferResourceStatusTransitions } from './TreasuryInboundTransfersResourceInboundTransferResourceStatusTransitions';
import { TreasuryInboundTransfersResourceInboundTransferResourceStatusTransitionsSchema } from './TreasuryInboundTransfersResourceInboundTransferResourceStatusTransitions';
/**
 * TreasuryInboundTransfersResourceInboundTransfer
 *
 * Use [InboundTransfers](https://docs.stripe.com/docs/treasury/moving-money/financial-accounts/into/inbound-transfers) to add funds to your [FinancialAccount](https://stripe.com/docs/api#financial_accounts) via a PaymentMethod that is owned by you. The funds will be transferred via an ACH debit.

Related guide: [Moving money with Treasury using InboundTransfer objects](https://docs.stripe.com/docs/treasury/moving-money/financial-accounts/into/inbound-transfers)
 */
export interface TreasuryInboundTransfer {
  /**
   * Amount (in cents) transferred.
   */
  amount: number;
  /**
   * Returns `true` if the InboundTransfer is able to be canceled.
   */
  cancelable: boolean;
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
  description?: string;
  /**
   * Details about this InboundTransfer's failure. Only set when status is `failed`.
   */
  failureDetails?: TreasuryInboundTransfersResourceFailureDetails;
  /**
   * The FinancialAccount that received the funds.
   */
  financialAccount: string;
  /**
   * A [hosted transaction receipt](https://stripe.com/docs/treasury/moving-money/regulatory-receipts) URL that is provided when money movement is considered regulated under Stripe's money transmission licenses.
   */
  hostedRegulatoryReceiptUrl?: string;
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * TreasuryInboundTransfersResourceInboundTransferResourceLinkedFlows
   *
   * 
   */
  linkedFlows: TreasuryInboundTransfersResourceInboundTransferResourceLinkedFlows;
  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
   */
  metadata: MetadataProperty;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: string;
  /**
   * The origin payment method to be debited for an InboundTransfer.
   */
  originPaymentMethod?: string;
  /**
   * Details about the PaymentMethod for an InboundTransfer.
   */
  originPaymentMethodDetails?: InboundTransfers;
  /**
   * Returns `true` if the funds for an InboundTransfer were returned after the InboundTransfer went to the `succeeded` state.
   */
  returned?: boolean;
  /**
   * Statement descriptor shown when funds are debited from the source. Not all payment networks support `statement_descriptor`.
   */
  statementDescriptor: string;
  /**
   * Status of the InboundTransfer: `processing`, `succeeded`, `failed`, and `canceled`. An InboundTransfer is `processing` if it is created and pending. The status changes to `succeeded` once the funds have been "confirmed" and a `transaction` is created and posted. The status changes to `failed` if the transfer fails.
   */
  status: string;
  /**
   * TreasuryInboundTransfersResourceInboundTransferResourceStatusTransitions
   *
   * 
   */
  statusTransitions: TreasuryInboundTransfersResourceInboundTransferResourceStatusTransitions;
  /**
   * The Transaction associated with this object.
   */
  transaction?: TransactionOrRef2;
}

export const TreasuryInboundTransferSchema: TypedSchema<TreasuryInboundTransfer> = typed<TreasuryInboundTransfer>(object({
  amount: number(),
  cancelable: boolean(),
  created: number(),
  currency: string(),
  description: optional(string()),
  get failureDetails() { return optional(TreasuryInboundTransfersResourceFailureDetailsSchema) },
  financialAccount: string(),
  hostedRegulatoryReceiptUrl: optional(string()),
  id: string(),
  linkedFlows: TreasuryInboundTransfersResourceInboundTransferResourceLinkedFlowsSchema,
  livemode: boolean(),
  metadata: MetadataPropertySchema,
  object: string(),
  originPaymentMethod: optional(string()),
  get originPaymentMethodDetails() { return optional(InboundTransfersSchema) },
  returned: optional(boolean()),
  statementDescriptor: string(),
  status: string(),
  statusTransitions: TreasuryInboundTransfersResourceInboundTransferResourceStatusTransitionsSchema,
  get transaction() { return optional(TransactionOrRef2Schema) },
}));