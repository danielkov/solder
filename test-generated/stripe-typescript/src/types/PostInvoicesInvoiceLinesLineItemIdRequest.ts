import { TypedSchema, array, boolean, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostInvoiceitemsRequestPeriod } from './PostInvoiceitemsRequestPeriod';
import { PostInvoiceitemsRequestPeriodSchema } from './PostInvoiceitemsRequestPeriod';
import type { PostInvoiceitemsRequestPricing } from './PostInvoiceitemsRequestPricing';
import { PostInvoiceitemsRequestPricingSchema } from './PostInvoiceitemsRequestPricing';
import type { PostInvoicesInvoiceLinesLineItemIdRequestDiscounts } from './PostInvoicesInvoiceLinesLineItemIdRequestDiscounts';
import { PostInvoicesInvoiceLinesLineItemIdRequestDiscountsSchema } from './PostInvoicesInvoiceLinesLineItemIdRequestDiscounts';
import type { PostInvoicesInvoiceLinesLineItemIdRequestMetadata } from './PostInvoicesInvoiceLinesLineItemIdRequestMetadata';
import { PostInvoicesInvoiceLinesLineItemIdRequestMetadataSchema } from './PostInvoicesInvoiceLinesLineItemIdRequestMetadata';
import type { PostInvoicesInvoiceLinesLineItemIdRequestPriceData } from './PostInvoicesInvoiceLinesLineItemIdRequestPriceData';
import { PostInvoicesInvoiceLinesLineItemIdRequestPriceDataSchema } from './PostInvoicesInvoiceLinesLineItemIdRequestPriceData';
import type { PostInvoicesInvoiceLinesLineItemIdRequestTaxAmounts } from './PostInvoicesInvoiceLinesLineItemIdRequestTaxAmounts';
import { PostInvoicesInvoiceLinesLineItemIdRequestTaxAmountsSchema } from './PostInvoicesInvoiceLinesLineItemIdRequestTaxAmounts';
import type { PostInvoicesInvoiceLinesLineItemIdRequestTaxRates } from './PostInvoicesInvoiceLinesLineItemIdRequestTaxRates';
import { PostInvoicesInvoiceLinesLineItemIdRequestTaxRatesSchema } from './PostInvoicesInvoiceLinesLineItemIdRequestTaxRates';
export interface PostInvoicesInvoiceLinesLineItemIdRequest {
  /**
   * The integer amount in cents (or local equivalent) of the charge to be applied to the upcoming invoice. If you want to apply a credit to the customer's account, pass a negative amount.
   */
  amount?: number;
  /**
   * An arbitrary string which you can attach to the invoice item. The description is displayed in the invoice for easy tracking.
   */
  description?: string;
  /**
   * Controls whether discounts apply to this line item. Defaults to false for prorations or negative line items, and true for all other line items. Cannot be set to true for prorations.
   */
  discountable?: boolean;
  /**
   * The coupons, promotion codes & existing discounts which apply to the line item. Item discounts are applied before invoice discounts. Pass an empty string to remove previously-defined discounts.
   */
  discounts?: PostInvoicesInvoiceLinesLineItemIdRequestDiscounts;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`. For [type=subscription](https://stripe.com/docs/api/invoices/line_item#invoice_line_item_object-type) line items, the incoming metadata specified on the request is directly used to set this value, in contrast to [type=invoiceitem](api/invoices/line_item#invoice_line_item_object-type) line items, where any existing metadata on the invoice line is merged with the incoming data.
   */
  metadata?: PostInvoicesInvoiceLinesLineItemIdRequestMetadata;
  /**
   * period
   *
   * The period associated with this invoice item. When set to different values, the period will be rendered on the invoice. If you have [Stripe Revenue Recognition](https://stripe.com/docs/revenue-recognition) enabled, the period will be used to recognize and defer revenue. See the [Revenue Recognition documentation](https://stripe.com/docs/revenue-recognition/methodology/subscriptions-and-invoicing) for details.
   */
  period?: PostInvoiceitemsRequestPeriod;
  /**
   * one_time_price_data_with_product_data
   *
   * Data used to generate a new [Price](https://stripe.com/docs/api/prices) object inline.
   */
  priceData?: PostInvoicesInvoiceLinesLineItemIdRequestPriceData;
  /**
   * pricing_param
   *
   * The pricing information for the invoice item.
   */
  pricing?: PostInvoiceitemsRequestPricing;
  /**
   * Non-negative integer. The quantity of units for the line item.
   */
  quantity?: number;
  /**
   * A list of up to 10 tax amounts for this line item. This can be useful if you calculate taxes on your own or use a third-party to calculate them. You cannot set tax amounts if any line item has [tax_rates](https://stripe.com/docs/api/invoices/line_item#invoice_line_item_object-tax_rates) or if the invoice has [default_tax_rates](https://stripe.com/docs/api/invoices/object#invoice_object-default_tax_rates) or uses [automatic tax](https://stripe.com/docs/tax/invoicing). Pass an empty string to remove previously defined tax amounts.
   */
  taxAmounts?: PostInvoicesInvoiceLinesLineItemIdRequestTaxAmounts;
  /**
   * The tax rates which apply to the line item. When set, the `default_tax_rates` on the invoice do not apply to this line item. Pass an empty string to remove previously-defined tax rates.
   */
  taxRates?: PostInvoicesInvoiceLinesLineItemIdRequestTaxRates;
}

export const PostInvoicesInvoiceLinesLineItemIdRequestSchema: TypedSchema<PostInvoicesInvoiceLinesLineItemIdRequest> = typed<PostInvoicesInvoiceLinesLineItemIdRequest>(object({
  amount: optional(number()),
  description: optional(string()),
  discountable: optional(boolean()),
  get discounts() { return optional(PostInvoicesInvoiceLinesLineItemIdRequestDiscountsSchema) },
  expand: optional(array(string())),
  get metadata() { return optional(PostInvoicesInvoiceLinesLineItemIdRequestMetadataSchema) },
  get period() { return optional(PostInvoiceitemsRequestPeriodSchema) },
  get priceData() { return optional(PostInvoicesInvoiceLinesLineItemIdRequestPriceDataSchema) },
  get pricing() { return optional(PostInvoiceitemsRequestPricingSchema) },
  quantity: optional(number()),
  get taxAmounts() { return optional(PostInvoicesInvoiceLinesLineItemIdRequestTaxAmountsSchema) },
  get taxRates() { return optional(PostInvoicesInvoiceLinesLineItemIdRequestTaxRatesSchema) },
}));