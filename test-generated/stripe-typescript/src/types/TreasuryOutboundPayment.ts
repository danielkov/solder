import { TypedSchema, boolean, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { MetadataProperty } from './MetadataProperty';
import { MetadataPropertySchema } from './MetadataProperty';
import type { OutboundPaymentsPaymentMethodDetails } from './OutboundPaymentsPaymentMethodDetails';
import { OutboundPaymentsPaymentMethodDetailsSchema } from './OutboundPaymentsPaymentMethodDetails';
import type { TransactionOrRef2 } from './TransactionOrRef2';
import { TransactionOrRef2Schema } from './TransactionOrRef2';
import type { TreasuryOutboundPaymentsResourceOutboundPaymentResourceEndUserDetails } from './TreasuryOutboundPaymentsResourceOutboundPaymentResourceEndUserDetails';
import { TreasuryOutboundPaymentsResourceOutboundPaymentResourceEndUserDetailsSchema } from './TreasuryOutboundPaymentsResourceOutboundPaymentResourceEndUserDetails';
import type { TreasuryOutboundPaymentsResourceOutboundPaymentResourceStatusTransitions } from './TreasuryOutboundPaymentsResourceOutboundPaymentResourceStatusTransitions';
import { TreasuryOutboundPaymentsResourceOutboundPaymentResourceStatusTransitionsSchema } from './TreasuryOutboundPaymentsResourceOutboundPaymentResourceStatusTransitions';
import type { TreasuryOutboundPaymentsResourceOutboundPaymentResourceTrackingDetails } from './TreasuryOutboundPaymentsResourceOutboundPaymentResourceTrackingDetails';
import { TreasuryOutboundPaymentsResourceOutboundPaymentResourceTrackingDetailsSchema } from './TreasuryOutboundPaymentsResourceOutboundPaymentResourceTrackingDetails';
import type { TreasuryOutboundPaymentsResourceReturnedStatus } from './TreasuryOutboundPaymentsResourceReturnedStatus';
import { TreasuryOutboundPaymentsResourceReturnedStatusSchema } from './TreasuryOutboundPaymentsResourceReturnedStatus';
/**
 * TreasuryOutboundPaymentsResourceOutboundPayment
 *
 * Use [OutboundPayments](https://docs.stripe.com/docs/treasury/moving-money/financial-accounts/out-of/outbound-payments) to send funds to another party's external bank account or [FinancialAccount](https://stripe.com/docs/api#financial_accounts). To send money to an account belonging to the same user, use an [OutboundTransfer](https://stripe.com/docs/api#outbound_transfers).

Simulate OutboundPayment state changes with the `/v1/test_helpers/treasury/outbound_payments` endpoints. These methods can only be called on test mode objects.

Related guide: [Moving money with Treasury using OutboundPayment objects](https://docs.stripe.com/docs/treasury/moving-money/financial-accounts/out-of/outbound-payments)
 */
export interface TreasuryOutboundPayment {
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
   * ID of the [customer](https://stripe.com/docs/api/customers) to whom an OutboundPayment is sent.
   */
  customer?: string;
  /**
   * An arbitrary string attached to the object. Often useful for displaying to users.
   */
  description?: string;
  /**
   * The PaymentMethod via which an OutboundPayment is sent. This field can be empty if the OutboundPayment was created using `destination_payment_method_data`.
   */
  destinationPaymentMethod?: string;
  /**
   * Details about the PaymentMethod for an OutboundPayment.
   */
  destinationPaymentMethodDetails?: OutboundPaymentsPaymentMethodDetails;
  /**
   * Details about the end user.
   */
  endUserDetails?: TreasuryOutboundPaymentsResourceOutboundPaymentResourceEndUserDetails;
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
   * Details about a returned OutboundPayment. Only set when the status is `returned`.
   */
  returnedDetails?: TreasuryOutboundPaymentsResourceReturnedStatus;
  /**
   * The description that appears on the receiving end for an OutboundPayment (for example, bank statement for external bank transfer).
   */
  statementDescriptor: string;
  /**
   * Current status of the OutboundPayment: `processing`, `failed`, `posted`, `returned`, `canceled`. An OutboundPayment is `processing` if it has been created and is pending. The status changes to `posted` once the OutboundPayment has been "confirmed" and funds have left the account, or to `failed` or `canceled`. If an OutboundPayment fails to arrive at its destination, its status will change to `returned`.
   */
  status: string;
  /**
   * TreasuryOutboundPaymentsResourceOutboundPaymentResourceStatusTransitions
   *
   * 
   */
  statusTransitions: TreasuryOutboundPaymentsResourceOutboundPaymentResourceStatusTransitions;
  /**
   * Details about network-specific tracking information if available.
   */
  trackingDetails?: TreasuryOutboundPaymentsResourceOutboundPaymentResourceTrackingDetails;
  /**
   * The Transaction associated with this object.
   */
  transaction: TransactionOrRef2;
}

export const TreasuryOutboundPaymentSchema: TypedSchema<TreasuryOutboundPayment> = typed<TreasuryOutboundPayment>(object({
  amount: number(),
  cancelable: boolean(),
  created: number(),
  currency: string(),
  customer: optional(string()),
  description: optional(string()),
  destinationPaymentMethod: optional(string()),
  get destinationPaymentMethodDetails() { return optional(OutboundPaymentsPaymentMethodDetailsSchema) },
  get endUserDetails() { return optional(TreasuryOutboundPaymentsResourceOutboundPaymentResourceEndUserDetailsSchema) },
  expectedArrivalDate: number(),
  financialAccount: string(),
  hostedRegulatoryReceiptUrl: optional(string()),
  id: string(),
  livemode: boolean(),
  metadata: MetadataPropertySchema,
  object: string(),
  get returnedDetails() { return optional(TreasuryOutboundPaymentsResourceReturnedStatusSchema) },
  statementDescriptor: string(),
  status: string(),
  statusTransitions: TreasuryOutboundPaymentsResourceOutboundPaymentResourceStatusTransitionsSchema,
  get trackingDetails() { return optional(TreasuryOutboundPaymentsResourceOutboundPaymentResourceTrackingDetailsSchema) },
  transaction: TransactionOrRef2Schema,
}));