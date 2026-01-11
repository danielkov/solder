import { TypedSchema, array, boolean, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { BillingBillResourceInvoicingTaxesTax } from './BillingBillResourceInvoicingTaxesTax';
import { BillingBillResourceInvoicingTaxesTaxSchema } from './BillingBillResourceInvoicingTaxesTax';
import type { CreditNoteRefund } from './CreditNoteRefund';
import { CreditNoteRefundSchema } from './CreditNoteRefund';
import type { CreditNotesPretaxCreditAmount } from './CreditNotesPretaxCreditAmount';
import { CreditNotesPretaxCreditAmountSchema } from './CreditNotesPretaxCreditAmount';
import type { CustomerBalanceTransactionOrRef } from './CustomerBalanceTransactionOrRef';
import { CustomerBalanceTransactionOrRefSchema } from './CustomerBalanceTransactionOrRef';
import type { CustomerUnion } from './CustomerUnion';
import { CustomerUnionSchema } from './CustomerUnion';
import type { DiscountsResourceDiscountAmount } from './DiscountsResourceDiscountAmount';
import { DiscountsResourceDiscountAmountSchema } from './DiscountsResourceDiscountAmount';
import type { InvoiceOrRef } from './InvoiceOrRef';
import { InvoiceOrRefSchema } from './InvoiceOrRef';
import type { InvoicesResourceShippingCost } from './InvoicesResourceShippingCost';
import { InvoicesResourceShippingCostSchema } from './InvoicesResourceShippingCost';
import type { LinesProperty } from './LinesProperty';
import { LinesPropertySchema } from './LinesProperty';
import type { MetadataProperty } from './MetadataProperty';
import { MetadataPropertySchema } from './MetadataProperty';
/**
 * CreditNote
 *
 * Issue a credit note to adjust an invoice's amount after the invoice is finalized.

Related guide: [Credit notes](https://stripe.com/docs/billing/invoices/credit-notes)
 */
export interface CreditNote {
  /**
   * The integer amount in cents (or local equivalent) representing the total amount of the credit note, including tax.
   */
  amount: number;
  /**
   * This is the sum of all the shipping amounts.
   */
  amountShipping: number;
  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;
  /**
   * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
   */
  currency: string;
  /**
   * ID of the customer.
   */
  customer: CustomerUnion;
  /**
   * Customer balance transaction related to this credit note.
   */
  customerBalanceTransaction?: CustomerBalanceTransactionOrRef;
  /**
   * The integer amount in cents (or local equivalent) representing the total amount of discount that was credited.
   */
  discountAmount: number;
  /**
   * The aggregate amounts calculated per discount for all line items.
   */
  discountAmounts: Array<DiscountsResourceDiscountAmount>;
  /**
   * The date when this credit note is in effect. Same as `created` unless overwritten. When defined, this value replaces the system-generated 'Date of issue' printed on the credit note PDF.
   */
  effectiveAt?: number;
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * ID of the invoice.
   */
  invoice: InvoiceOrRef;
  /**
   * CreditNoteLinesList
   *
   * Line items that make up the credit note
   */
  lines: LinesProperty;
  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
  /**
   * Customer-facing text that appears on the credit note PDF.
   */
  memo?: string;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
   */
  metadata?: MetadataProperty;
  /**
   * A unique number that identifies this particular credit note and appears on the PDF of the credit note and its associated invoice.
   */
  number: string;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: string;
  /**
   * Amount that was credited outside of Stripe.
   */
  outOfBandAmount?: number;
  /**
   * The link to download the PDF of the credit note.
   */
  pdf: string;
  /**
   * The amount of the credit note that was refunded to the customer, credited to the customer's balance, credited outside of Stripe, or any combination thereof.
   */
  postPaymentAmount: number;
  /**
   * The amount of the credit note by which the invoice's `amount_remaining` and `amount_due` were reduced.
   */
  prePaymentAmount: number;
  /**
   * The pretax credit amounts (ex: discount, credit grants, etc) for all line items.
   */
  pretaxCreditAmounts: Array<CreditNotesPretaxCreditAmount>;
  /**
   * Reason for issuing this credit note, one of `duplicate`, `fraudulent`, `order_change`, or `product_unsatisfactory`
   */
  reason?: string;
  /**
   * Refunds related to this credit note.
   */
  refunds: Array<CreditNoteRefund>;
  /**
   * The details of the cost of shipping, including the ShippingRate applied to the invoice.
   */
  shippingCost?: InvoicesResourceShippingCost;
  /**
   * Status of this credit note, one of `issued` or `void`. Learn more about [voiding credit notes](https://stripe.com/docs/billing/invoices/credit-notes#voiding).
   */
  status: string;
  /**
   * The integer amount in cents (or local equivalent) representing the amount of the credit note, excluding exclusive tax and invoice level discounts.
   */
  subtotal: number;
  /**
   * The integer amount in cents (or local equivalent) representing the amount of the credit note, excluding all tax and invoice level discounts.
   */
  subtotalExcludingTax?: number;
  /**
   * The integer amount in cents (or local equivalent) representing the total amount of the credit note, including tax and all discount.
   */
  total: number;
  /**
   * The integer amount in cents (or local equivalent) representing the total amount of the credit note, excluding tax, but including discounts.
   */
  totalExcludingTax?: number;
  /**
   * The aggregate tax information for all line items.
   */
  totalTaxes?: Array<BillingBillResourceInvoicingTaxesTax>;
  /**
   * Type of this credit note, one of `pre_payment` or `post_payment`. A `pre_payment` credit note means it was issued when the invoice was open. A `post_payment` credit note means it was issued when the invoice was paid.
   */
  type: string;
  /**
   * The time that the credit note was voided.
   */
  voidedAt?: number;
}

export const CreditNoteSchema: TypedSchema<CreditNote> = typed<CreditNote>(object({
  amount: number(),
  amountShipping: number(),
  created: number(),
  currency: string(),
  customer: CustomerUnionSchema,
  get customerBalanceTransaction() { return optional(CustomerBalanceTransactionOrRefSchema) },
  discountAmount: number(),
  discountAmounts: array(DiscountsResourceDiscountAmountSchema),
  effectiveAt: optional(number()),
  id: string(),
  invoice: InvoiceOrRefSchema,
  lines: LinesPropertySchema,
  livemode: boolean(),
  memo: optional(string()),
  get metadata() { return optional(MetadataPropertySchema) },
  number: string(),
  object: string(),
  outOfBandAmount: optional(number()),
  pdf: string(),
  postPaymentAmount: number(),
  prePaymentAmount: number(),
  pretaxCreditAmounts: array(CreditNotesPretaxCreditAmountSchema),
  reason: optional(string()),
  refunds: array(CreditNoteRefundSchema),
  get shippingCost() { return optional(InvoicesResourceShippingCostSchema) },
  status: string(),
  subtotal: number(),
  subtotalExcludingTax: optional(number()),
  total: number(),
  totalExcludingTax: optional(number()),
  get totalTaxes() { return optional(array(BillingBillResourceInvoicingTaxesTaxSchema)) },
  type: string(),
  voidedAt: optional(number()),
}));