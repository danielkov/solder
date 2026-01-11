import { TypedSchema, boolean, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { CheckoutSessionOrRef } from './CheckoutSessionOrRef';
import { CheckoutSessionOrRefSchema } from './CheckoutSessionOrRef';
import type { CreditNoteOrRef } from './CreditNoteOrRef';
import { CreditNoteOrRefSchema } from './CreditNoteOrRef';
import type { CustomerOrRef } from './CustomerOrRef';
import { CustomerOrRefSchema } from './CustomerOrRef';
import type { InvoiceOrRef } from './InvoiceOrRef';
import { InvoiceOrRefSchema } from './InvoiceOrRef';
import type { MetadataProperty } from './MetadataProperty';
import { MetadataPropertySchema } from './MetadataProperty';
/**
 * CustomerBalanceTransaction
 *
 * Each customer has a [Balance](https://stripe.com/docs/api/customers/object#customer_object-balance) value,
which denotes a debit or credit that's automatically applied to their next invoice upon finalization.
You may modify the value directly by using the [update customer API](https://stripe.com/docs/api/customers/update),
or by creating a Customer Balance Transaction, which increments or decrements the customer's `balance` by the specified `amount`.

Related guide: [Customer balance](https://stripe.com/docs/billing/customer/balance)
 */
export interface CustomerBalanceTransaction {
  /**
   * The amount of the transaction. A negative value is a credit for the customer's balance, and a positive value is a debit to the customer's `balance`.
   */
  amount: number;
  /**
   * The ID of the checkout session (if any) that created the transaction.
   */
  checkoutSession?: CheckoutSessionOrRef;
  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;
  /**
   * The ID of the credit note (if any) related to the transaction.
   */
  creditNote?: CreditNoteOrRef;
  /**
   * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
   */
  currency: string;
  /**
   * The ID of the customer the transaction belongs to.
   */
  customer: CustomerOrRef;
  /**
   * An arbitrary string attached to the object. Often useful for displaying to users.
   */
  description?: string;
  /**
   * The customer's `balance` after the transaction was applied. A negative value decreases the amount due on the customer's next invoice. A positive value increases the amount due on the customer's next invoice.
   */
  endingBalance: number;
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * The ID of the invoice (if any) related to the transaction.
   */
  invoice?: InvoiceOrRef;
  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
   */
  metadata?: MetadataProperty;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: string;
  /**
   * Transaction type: `adjustment`, `applied_to_invoice`, `credit_note`, `initial`, `invoice_overpaid`, `invoice_too_large`, `invoice_too_small`, `unspent_receiver_credit`, `unapplied_from_invoice`, `checkout_session_subscription_payment`, or `checkout_session_subscription_payment_canceled`. See the [Customer Balance page](https://stripe.com/docs/billing/customer/balance#types) to learn more about transaction types.
   */
  type: string;
}

export const CustomerBalanceTransactionSchema: TypedSchema<CustomerBalanceTransaction> = typed<CustomerBalanceTransaction>(object({
  amount: number(),
  get checkoutSession() { return optional(CheckoutSessionOrRefSchema) },
  created: number(),
  get creditNote() { return optional(CreditNoteOrRefSchema) },
  currency: string(),
  customer: CustomerOrRefSchema,
  description: optional(string()),
  endingBalance: number(),
  id: string(),
  get invoice() { return optional(InvoiceOrRefSchema) },
  livemode: boolean(),
  get metadata() { return optional(MetadataPropertySchema) },
  object: string(),
  type: string(),
}));