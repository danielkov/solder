import { TypedSchema, array, boolean, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { BillingBillResourceInvoicingLinesParentsInvoiceLineItemParent } from './BillingBillResourceInvoicingLinesParentsInvoiceLineItemParent';
import { BillingBillResourceInvoicingLinesParentsInvoiceLineItemParentSchema } from './BillingBillResourceInvoicingLinesParentsInvoiceLineItemParent';
import type { BillingBillResourceInvoicingPricingPricing } from './BillingBillResourceInvoicingPricingPricing';
import { BillingBillResourceInvoicingPricingPricingSchema } from './BillingBillResourceInvoicingPricingPricing';
import type { BillingBillResourceInvoicingTaxesTax } from './BillingBillResourceInvoicingTaxesTax';
import { BillingBillResourceInvoicingTaxesTaxSchema } from './BillingBillResourceInvoicingTaxesTax';
import type { DiscountsItemOrRef } from './DiscountsItemOrRef';
import { DiscountsItemOrRefSchema } from './DiscountsItemOrRef';
import type { DiscountsResourceDiscountAmount } from './DiscountsResourceDiscountAmount';
import { DiscountsResourceDiscountAmountSchema } from './DiscountsResourceDiscountAmount';
import type { InvoiceLineItemPeriod } from './InvoiceLineItemPeriod';
import { InvoiceLineItemPeriodSchema } from './InvoiceLineItemPeriod';
import type { InvoicesResourcePretaxCreditAmount } from './InvoicesResourcePretaxCreditAmount';
import { InvoicesResourcePretaxCreditAmountSchema } from './InvoicesResourcePretaxCreditAmount';
import type { MetadataProperty } from './MetadataProperty';
import { MetadataPropertySchema } from './MetadataProperty';
import type { SubscriptionOrRef } from './SubscriptionOrRef';
import { SubscriptionOrRefSchema } from './SubscriptionOrRef';
/**
 * InvoiceLineItem
 *
 * Invoice Line Items represent the individual lines within an [invoice](https://stripe.com/docs/api/invoices) and only exist within the context of an invoice.

Each line item is backed by either an [invoice item](https://stripe.com/docs/api/invoiceitems) or a [subscription item](https://stripe.com/docs/api/subscription_items).
 */
export interface LineItem {
  /**
   * The amount, in cents (or local equivalent).
   */
  amount: number;
  /**
   * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
   */
  currency: string;
  /**
   * An arbitrary string attached to the object. Often useful for displaying to users.
   */
  description?: string;
  /**
   * The amount of discount calculated per discount for this line item.
   */
  discountAmounts?: Array<DiscountsResourceDiscountAmount>;
  /**
   * If true, discounts will apply to this line item. Always false for prorations.
   */
  discountable: boolean;
  /**
   * The discounts applied to the invoice line item. Line item discounts are applied before invoice discounts. Use `expand[]=discounts` to expand each discount.
   */
  discounts: Array<DiscountsItemOrRef>;
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * The ID of the invoice that contains this line item.
   */
  invoice?: string;
  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Note that for line items with `type=subscription`, `metadata` reflects the current metadata from the subscription associated with the line item, unless the invoice line was directly updated with different metadata after creation.
   */
  metadata: MetadataProperty;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: string;
  /**
   * The parent that generated this line item.
   */
  parent?: BillingBillResourceInvoicingLinesParentsInvoiceLineItemParent;
  /**
   * InvoiceLineItemPeriod
   *
   * 
   */
  period: InvoiceLineItemPeriod;
  /**
   * Contains pretax credit amounts (ex: discount, credit grants, etc) that apply to this line item.
   */
  pretaxCreditAmounts?: Array<InvoicesResourcePretaxCreditAmount>;
  /**
   * The pricing information of the line item.
   */
  pricing?: BillingBillResourceInvoicingPricingPricing;
  /**
   * The quantity of the subscription, if the line item is a subscription or a proration.
   */
  quantity?: number;
  subscription?: SubscriptionOrRef;
  /**
   * The tax information of the line item.
   */
  taxes?: Array<BillingBillResourceInvoicingTaxesTax>;
}

export const LineItemSchema: TypedSchema<LineItem> = typed<LineItem>(object({
  amount: number(),
  currency: string(),
  description: optional(string()),
  get discountAmounts() { return optional(array(DiscountsResourceDiscountAmountSchema)) },
  discountable: boolean(),
  discounts: array(DiscountsItemOrRefSchema),
  id: string(),
  invoice: optional(string()),
  livemode: boolean(),
  metadata: MetadataPropertySchema,
  object: string(),
  get parent() { return optional(BillingBillResourceInvoicingLinesParentsInvoiceLineItemParentSchema) },
  period: InvoiceLineItemPeriodSchema,
  get pretaxCreditAmounts() { return optional(array(InvoicesResourcePretaxCreditAmountSchema)) },
  get pricing() { return optional(BillingBillResourceInvoicingPricingPricingSchema) },
  quantity: optional(number()),
  get subscription() { return optional(SubscriptionOrRefSchema) },
  get taxes() { return optional(array(BillingBillResourceInvoicingTaxesTaxSchema)) },
}));