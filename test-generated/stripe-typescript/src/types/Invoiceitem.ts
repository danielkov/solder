import { TypedSchema, array, boolean, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { BillingBillResourceInvoiceItemParentsInvoiceItemParent } from './BillingBillResourceInvoiceItemParentsInvoiceItemParent';
import { BillingBillResourceInvoiceItemParentsInvoiceItemParentSchema } from './BillingBillResourceInvoiceItemParentsInvoiceItemParent';
import type { BillingBillResourceInvoicingPricingPricing } from './BillingBillResourceInvoicingPricingPricing';
import { BillingBillResourceInvoicingPricingPricingSchema } from './BillingBillResourceInvoicingPricingPricing';
import type { CustomerUnion } from './CustomerUnion';
import { CustomerUnionSchema } from './CustomerUnion';
import type { DiscountsItemOrRef } from './DiscountsItemOrRef';
import { DiscountsItemOrRefSchema } from './DiscountsItemOrRef';
import type { InvoiceLineItemPeriod } from './InvoiceLineItemPeriod';
import { InvoiceLineItemPeriodSchema } from './InvoiceLineItemPeriod';
import type { InvoiceOrRef } from './InvoiceOrRef';
import { InvoiceOrRefSchema } from './InvoiceOrRef';
import type { MetadataProperty } from './MetadataProperty';
import { MetadataPropertySchema } from './MetadataProperty';
import type { ProrationDetails } from './ProrationDetails';
import { ProrationDetailsSchema } from './ProrationDetails';
import type { TaxRate } from './TaxRate';
import { TaxRateSchema } from './TaxRate';
import type { TestClockOrRef } from './TestClockOrRef';
import { TestClockOrRefSchema } from './TestClockOrRef';
/**
 * InvoiceItem
 *
 * Invoice Items represent the component lines of an [invoice](https://stripe.com/docs/api/invoices). When you create an invoice item with an `invoice` field, it is attached to the specified invoice and included as [an invoice line item](https://stripe.com/docs/api/invoices/line_item) within [invoice.lines](https://stripe.com/docs/api/invoices/object#invoice_object-lines).

Invoice Items can be created before you are ready to actually send the invoice. This can be particularly useful when combined
with a [subscription](https://stripe.com/docs/api/subscriptions). Sometimes you want to add a charge or credit to a customer, but actually charge
or credit the customer's card only at the end of a regular billing cycle. This is useful for combining several charges
(to minimize per-transaction fees), or for having Stripe tabulate your usage-based billing totals.

Related guides: [Integrate with the Invoicing API](https://stripe.com/docs/invoicing/integration), [Subscription Invoices](https://stripe.com/docs/billing/invoices/subscription#adding-upcoming-invoice-items).
 */
export interface Invoiceitem {
  /**
   * Amount (in the `currency` specified) of the invoice item. This should always be equal to `unit_amount * quantity`.
   */
  amount: number;
  /**
   * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
   */
  currency: string;
  /**
   * The ID of the customer who will be billed when this invoice item is billed.
   */
  customer: CustomerUnion;
  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  date: number;
  /**
   * An arbitrary string attached to the object. Often useful for displaying to users.
   */
  description?: string;
  /**
   * If true, discounts will apply to this invoice item. Always false for prorations.
   */
  discountable: boolean;
  /**
   * The discounts which apply to the invoice item. Item discounts are applied before invoice discounts. Use `expand[]=discounts` to expand each discount.
   */
  discounts?: Array<DiscountsItemOrRef>;
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * The ID of the invoice this invoice item belongs to.
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
   * The amount after discounts, but before credits and taxes. This field is `null` for `discountable=true` items.
   */
  netAmount?: number;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: string;
  /**
   * The parent that generated this invoice item.
   */
  parent?: BillingBillResourceInvoiceItemParentsInvoiceItemParent;
  /**
   * InvoiceLineItemPeriod
   *
   * 
   */
  period: InvoiceLineItemPeriod;
  /**
   * The pricing information of the invoice item.
   */
  pricing?: BillingBillResourceInvoicingPricingPricing;
  /**
   * Whether the invoice item was created automatically as a proration adjustment when the customer switched plans.
   */
  proration: boolean;
  /**
   * ProrationDetails
   *
   * 
   */
  prorationDetails?: ProrationDetails;
  /**
   * Quantity of units for the invoice item. If the invoice item is a proration, the quantity of the subscription that the proration was computed for.
   */
  quantity: number;
  /**
   * The tax rates which apply to the invoice item. When set, the `default_tax_rates` on the invoice do not apply to this invoice item.
   */
  taxRates?: Array<TaxRate>;
  /**
   * ID of the test clock this invoice item belongs to.
   */
  testClock?: TestClockOrRef;
}

export const InvoiceitemSchema: TypedSchema<Invoiceitem> = typed<Invoiceitem>(object({
  amount: number(),
  currency: string(),
  customer: CustomerUnionSchema,
  date: number(),
  description: optional(string()),
  discountable: boolean(),
  get discounts() { return optional(array(DiscountsItemOrRefSchema)) },
  id: string(),
  get invoice() { return optional(InvoiceOrRefSchema) },
  livemode: boolean(),
  get metadata() { return optional(MetadataPropertySchema) },
  netAmount: optional(number()),
  object: string(),
  get parent() { return optional(BillingBillResourceInvoiceItemParentsInvoiceItemParentSchema) },
  period: InvoiceLineItemPeriodSchema,
  get pricing() { return optional(BillingBillResourceInvoicingPricingPricingSchema) },
  proration: boolean(),
  get prorationDetails() { return optional(ProrationDetailsSchema) },
  quantity: number(),
  get taxRates() { return optional(array(TaxRateSchema)) },
  get testClock() { return optional(TestClockOrRefSchema) },
}));