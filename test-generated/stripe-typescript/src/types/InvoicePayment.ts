import { TypedSchema, boolean, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { InvoiceUnion } from './InvoiceUnion';
import { InvoiceUnionSchema } from './InvoiceUnion';
import type { InvoicesPaymentsInvoicePaymentAssociatedPayment } from './InvoicesPaymentsInvoicePaymentAssociatedPayment';
import { InvoicesPaymentsInvoicePaymentAssociatedPaymentSchema } from './InvoicesPaymentsInvoicePaymentAssociatedPayment';
import type { InvoicesPaymentsInvoicePaymentStatusTransitions } from './InvoicesPaymentsInvoicePaymentStatusTransitions';
import { InvoicesPaymentsInvoicePaymentStatusTransitionsSchema } from './InvoicesPaymentsInvoicePaymentStatusTransitions';
/**
 * InvoicesInvoicePayment
 *
 * Invoice Payments represent payments made against invoices. Invoice Payments can
be accessed in two ways:
1. By expanding the `payments` field on the [Invoice](https://stripe.com/docs/api#invoice) resource.
2. By using the Invoice Payment retrieve and list endpoints.

Invoice Payments include the mapping between payment objects, such as Payment Intent, and Invoices.
This resource and its endpoints allows you to easily track if a payment is associated with a specific invoice and
monitor the allocation details of the payments.
 */
export interface InvoicePayment {
  /**
   * Amount that was actually paid for this invoice, in cents (or local equivalent). This field is null until the payment is `paid`. This amount can be less than the `amount_requested` if the PaymentIntent’s `amount_received` is not sufficient to pay all of the invoices that it is attached to.
   */
  amountPaid?: number;
  /**
   * Amount intended to be paid toward this invoice, in cents (or local equivalent)
   */
  amountRequested: number;
  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;
  /**
   * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
   */
  currency: string;
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * The invoice that was paid.
   */
  invoice: InvoiceUnion;
  /**
   * Stripe automatically creates a default InvoicePayment when the invoice is finalized, and keeps it synchronized with the invoice’s `amount_remaining`. The PaymentIntent associated with the default payment can’t be edited or canceled directly.
   */
  isDefault: boolean;
  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: string;
  /**
   * InvoicesPaymentsInvoicePaymentAssociatedPayment
   *
   * 
   */
  payment: InvoicesPaymentsInvoicePaymentAssociatedPayment;
  /**
   * The status of the payment, one of `open`, `paid`, or `canceled`.
   */
  status: string;
  /**
   * InvoicesPaymentsInvoicePaymentStatusTransitions
   *
   * 
   */
  statusTransitions: InvoicesPaymentsInvoicePaymentStatusTransitions;
}

export const InvoicePaymentSchema: TypedSchema<InvoicePayment> = typed<InvoicePayment>(object({
  amountPaid: optional(number()),
  amountRequested: number(),
  created: number(),
  currency: string(),
  id: string(),
  invoice: InvoiceUnionSchema,
  isDefault: boolean(),
  livemode: boolean(),
  object: string(),
  payment: InvoicesPaymentsInvoicePaymentAssociatedPaymentSchema,
  status: string(),
  statusTransitions: InvoicesPaymentsInvoicePaymentStatusTransitionsSchema,
}));