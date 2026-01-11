import { TypedSchema, array, boolean, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { DefaultPostAccountsRequestMetadata } from './DefaultPostAccountsRequestMetadata';
import { DefaultPostAccountsRequestMetadataSchema } from './DefaultPostAccountsRequestMetadata';
import type { PostInvoiceitemsRequestDiscounts } from './PostInvoiceitemsRequestDiscounts';
import { PostInvoiceitemsRequestDiscountsSchema } from './PostInvoiceitemsRequestDiscounts';
import type { PostInvoiceitemsRequestPeriod } from './PostInvoiceitemsRequestPeriod';
import { PostInvoiceitemsRequestPeriodSchema } from './PostInvoiceitemsRequestPeriod';
import type { PostInvoiceitemsRequestPriceData } from './PostInvoiceitemsRequestPriceData';
import { PostInvoiceitemsRequestPriceDataSchema } from './PostInvoiceitemsRequestPriceData';
import type { PostInvoiceitemsRequestPricing } from './PostInvoiceitemsRequestPricing';
import { PostInvoiceitemsRequestPricingSchema } from './PostInvoiceitemsRequestPricing';
import type { PostInvoiceitemsRequestTaxCode } from './PostInvoiceitemsRequestTaxCode';
import { PostInvoiceitemsRequestTaxCodeSchema } from './PostInvoiceitemsRequestTaxCode';
export interface PostInvoiceitemsRequest {
  /**
   * The integer amount in cents (or local equivalent) of the charge to be applied to the upcoming invoice. Passing in a negative `amount` will reduce the `amount_due` on the invoice.
   */
  amount?: number;
  /**
   * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
   */
  currency?: string;
  /**
   * The ID of the customer who will be billed when this invoice item is billed.
   */
  customer: string;
  /**
   * An arbitrary string which you can attach to the invoice item. The description is displayed in the invoice for easy tracking.
   */
  description?: string;
  /**
   * Controls whether discounts apply to this invoice item. Defaults to false for prorations or negative invoice items, and true for all other invoice items.
   */
  discountable?: boolean;
  /**
   * The coupons and promotion codes to redeem into discounts for the invoice item or invoice line item.
   */
  discounts?: PostInvoiceitemsRequestDiscounts;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
  /**
   * The ID of an existing invoice to add this invoice item to. For subscription invoices, when left blank, the invoice item will be added to the next upcoming scheduled invoice. For standalone invoices, the invoice item won't be automatically added unless you pass `pending_invoice_item_behavior: 'include'` when creating the invoice. This is useful when adding invoice items in response to an invoice.created webhook. You can only add invoice items to draft invoices and there is a maximum of 250 items per invoice.
   */
  invoice?: string;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: DefaultPostAccountsRequestMetadata;
  /**
   * period
   *
   * The period associated with this invoice item. When set to different values, the period will be rendered on the invoice. If you have [Stripe Revenue Recognition](https://stripe.com/docs/revenue-recognition) enabled, the period will be used to recognize and defer revenue. See the [Revenue Recognition documentation](https://stripe.com/docs/revenue-recognition/methodology/subscriptions-and-invoicing) for details.
   */
  period?: PostInvoiceitemsRequestPeriod;
  /**
   * one_time_price_data
   *
   * Data used to generate a new [Price](https://stripe.com/docs/api/prices) object inline.
   */
  priceData?: PostInvoiceitemsRequestPriceData;
  /**
   * pricing_param
   *
   * The pricing information for the invoice item.
   */
  pricing?: PostInvoiceitemsRequestPricing;
  /**
   * Non-negative integer. The quantity of units for the invoice item.
   */
  quantity?: number;
  /**
   * The ID of a subscription to add this invoice item to. When left blank, the invoice item is added to the next upcoming scheduled invoice. When set, scheduled invoices for subscriptions other than the specified subscription will ignore the invoice item. Use this when you want to express that an invoice item has been accrued within the context of a particular subscription.
   */
  subscription?: string;
  /**
   * Only required if a [default tax behavior](https://stripe.com/docs/tax/products-prices-tax-categories-tax-behavior#setting-a-default-tax-behavior-(recommended)) was not provided in the Stripe Tax settings. Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
   */
  taxBehavior?: string;
  /**
   * A [tax code](https://stripe.com/docs/tax/tax-categories) ID.
   */
  taxCode?: PostInvoiceitemsRequestTaxCode;
  /**
   * The tax rates which apply to the invoice item. When set, the `default_tax_rates` on the invoice do not apply to this invoice item.
   */
  taxRates?: Array<string>;
  /**
   * The decimal unit amount in cents (or local equivalent) of the charge to be applied to the upcoming invoice. This `unit_amount_decimal` will be multiplied by the quantity to get the full amount. Passing in a negative `unit_amount_decimal` will reduce the `amount_due` on the invoice. Accepts at most 12 decimal places.
   */
  unitAmountDecimal?: string;
}

export const PostInvoiceitemsRequestSchema: TypedSchema<PostInvoiceitemsRequest> = typed<PostInvoiceitemsRequest>(object({
  amount: optional(number()),
  currency: optional(string()),
  customer: string(),
  description: optional(string()),
  discountable: optional(boolean()),
  get discounts() { return optional(PostInvoiceitemsRequestDiscountsSchema) },
  expand: optional(array(string())),
  invoice: optional(string()),
  get metadata() { return optional(DefaultPostAccountsRequestMetadataSchema) },
  get period() { return optional(PostInvoiceitemsRequestPeriodSchema) },
  get priceData() { return optional(PostInvoiceitemsRequestPriceDataSchema) },
  get pricing() { return optional(PostInvoiceitemsRequestPricingSchema) },
  quantity: optional(number()),
  subscription: optional(string()),
  taxBehavior: optional(string()),
  get taxCode() { return optional(PostInvoiceitemsRequestTaxCodeSchema) },
  taxRates: optional(array(string())),
  unitAmountDecimal: optional(string()),
}));