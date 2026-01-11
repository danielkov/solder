import { TypedSchema, boolean, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { MetadataProperty } from './MetadataProperty';
import { MetadataPropertySchema } from './MetadataProperty';
import type { OutboundTransfersPaymentMethodDetails } from './OutboundTransfersPaymentMethodDetails';
import { OutboundTransfersPaymentMethodDetailsSchema } from './OutboundTransfersPaymentMethodDetails';
import type { TransactionOrRef2 } from './TransactionOrRef2';
import { TransactionOrRef2Schema } from './TransactionOrRef2';
import type { TreasuryOutboundTransfersResourceOutboundTransferResourceTrackingDetails } from './TreasuryOutboundTransfersResourceOutboundTransferResourceTrackingDetails';
import { TreasuryOutboundTransfersResourceOutboundTransferResourceTrackingDetailsSchema } from './TreasuryOutboundTransfersResourceOutboundTransferResourceTrackingDetails';
import type { TreasuryOutboundTransfersResourceReturnedDetails } from './TreasuryOutboundTransfersResourceReturnedDetails';
import { TreasuryOutboundTransfersResourceReturnedDetailsSchema } from './TreasuryOutboundTransfersResourceReturnedDetails';
import type { TreasuryOutboundTransfersResourceStatusTransitions } from './TreasuryOutboundTransfersResourceStatusTransitions';
import { TreasuryOutboundTransfersResourceStatusTransitionsSchema } from './TreasuryOutboundTransfersResourceStatusTransitions';
/**
 * TreasuryOutboundTransfersResourceOutboundTransfer
 *
 * Use [OutboundTransfers](https://docs.stripe.com/docs/treasury/moving-money/financial-accounts/out-of/outbound-transfers) to transfer funds from a [FinancialAccount](https://stripe.com/docs/api#financial_accounts) to a PaymentMethod belonging to the same entity. To send funds to a different party, use [OutboundPayments](https://stripe.com/docs/api#outbound_payments) instead. You can send funds over ACH rails or through a domestic wire transfer to a user's own external bank account.

Simulate OutboundTransfer state changes with the `/v1/test_helpers/treasury/outbound_transfers` endpoints. These methods can only be called on test mode objects.

Related guide: [Moving money with Treasury using OutboundTransfer objects](https://docs.stripe.com/docs/treasury/moving-money/financial-accounts/out-of/outbound-transfers)
 */
export interface TreasuryOutboundTransfer {
  /**
   * Amount (in cents) transferred.
   */
  amount: number;
  /**
   * Returns `true` if the object can be canceled, and `false` otherwise.
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
   * The PaymentMethod used as the payment instrument for an OutboundTransfer.
   */
  destinationPaymentMethod?: string;
  /**
   * OutboundTransfersPaymentMethodDetails
   *
   * 
   */
  destinationPaymentMethodDetails: OutboundTransfersPaymentMethodDetails;
  /**
   * The date when funds are expected to arrive in the destination account.
   */
  expectedArrivalDate: number;
  /**
   * The FinancialAccount that funds were pulled from.
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
   * Details about a returned OutboundTransfer. Only set when the status is `returned`.
   */
  returnedDetails?: TreasuryOutboundTransfersResourceReturnedDetails;
  /**
   * Information about the OutboundTransfer to be sent to the recipient account.
   */
  statementDescriptor: string;
  /**
   * Current status of the OutboundTransfer: `processing`, `failed`, `canceled`, `posted`, `returned`. An OutboundTransfer is `processing` if it has been created and is pending. The status changes to `posted` once the OutboundTransfer has been "confirmed" and funds have left the account, or to `failed` or `canceled`. If an OutboundTransfer fails to arrive at its destination, its status will change to `returned`.
   */
  status: string;
  /**
   * TreasuryOutboundTransfersResourceStatusTransitions
   *
   * 
   */
  statusTransitions: TreasuryOutboundTransfersResourceStatusTransitions;
  /**
   * Details about network-specific tracking information if available.
   */
  trackingDetails?: TreasuryOutboundTransfersResourceOutboundTransferResourceTrackingDetails;
  /**
   * The Transaction associated with this object.
   */
  transaction: TransactionOrRef2;
}

export const TreasuryOutboundTransferSchema: TypedSchema<TreasuryOutboundTransfer> = typed<TreasuryOutboundTransfer>(object({
  amount: number(),
  cancelable: boolean(),
  created: number(),
  currency: string(),
  description: optional(string()),
  destinationPaymentMethod: optional(string()),
  destinationPaymentMethodDetails: OutboundTransfersPaymentMethodDetailsSchema,
  expectedArrivalDate: number(),
  financialAccount: string(),
  hostedRegulatoryReceiptUrl: optional(string()),
  id: string(),
  livemode: boolean(),
  metadata: MetadataPropertySchema,
  object: string(),
  get returnedDetails() { return optional(TreasuryOutboundTransfersResourceReturnedDetailsSchema) },
  statementDescriptor: string(),
  status: string(),
  statusTransitions: TreasuryOutboundTransfersResourceStatusTransitionsSchema,
  get trackingDetails() { return optional(TreasuryOutboundTransfersResourceOutboundTransferResourceTrackingDetailsSchema) },
  transaction: TransactionOrRef2Schema,
}));