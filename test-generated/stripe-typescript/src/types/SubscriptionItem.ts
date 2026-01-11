import { TypedSchema, array, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { DiscountsItemOrRef } from './DiscountsItemOrRef';
import { DiscountsItemOrRefSchema } from './DiscountsItemOrRef';
import type { MetadataProperty } from './MetadataProperty';
import { MetadataPropertySchema } from './MetadataProperty';
import type { Price } from './Price';
import { PriceSchema } from './Price';
import type { SubscriptionItemBillingThresholds } from './SubscriptionItemBillingThresholds';
import { SubscriptionItemBillingThresholdsSchema } from './SubscriptionItemBillingThresholds';
import type { TaxRate } from './TaxRate';
import { TaxRateSchema } from './TaxRate';
/**
 * SubscriptionItem
 *
 * Subscription items allow you to create customer subscriptions with more than
one plan, making it easy to represent complex billing relationships.
 */
export interface SubscriptionItem {
  /**
   * Define thresholds at which an invoice will be sent, and the related subscription advanced to a new billing period
   */
  billingThresholds?: SubscriptionItemBillingThresholds;
  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;
  /**
   * The end time of this subscription item's current billing period.
   */
  currentPeriodEnd: number;
  /**
   * The start time of this subscription item's current billing period.
   */
  currentPeriodStart: number;
  /**
   * The discounts applied to the subscription item. Subscription item discounts are applied before subscription discounts. Use `expand[]=discounts` to expand each discount.
   */
  discounts: Array<DiscountsItemOrRef>;
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
   */
  metadata: MetadataProperty;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: string;
  /**
   * Price
   *
   * Prices define the unit cost, currency, and (optional) billing cycle for both recurring and one-time purchases of products.
[Products](https://stripe.com/docs/api#products) help you track inventory or provisioning, and prices help you track payment terms. Different physical goods or levels of service should be represented by products, and pricing options should be represented by prices. This approach lets you change prices without having to change your provisioning scheme.

For example, you might have a single "gold" product that has prices for $10/month, $100/year, and €9 once.

Related guides: [Set up a subscription](https://stripe.com/docs/billing/subscriptions/set-up-subscription), [create an invoice](https://stripe.com/docs/billing/invoices/create), and more about [products and prices](https://stripe.com/docs/products-prices/overview).
   */
  price: Price;
  /**
   * The [quantity](https://stripe.com/docs/subscriptions/quantities) of the plan to which the customer should be subscribed.
   */
  quantity?: number;
  /**
   * The `subscription` this `subscription_item` belongs to.
   */
  subscription: string;
  /**
   * The tax rates which apply to this `subscription_item`. When set, the `default_tax_rates` on the subscription do not apply to this `subscription_item`.
   */
  taxRates?: Array<TaxRate>;
}

export const SubscriptionItemSchema: TypedSchema<SubscriptionItem> = typed<SubscriptionItem>(object({
  get billingThresholds() { return optional(SubscriptionItemBillingThresholdsSchema) },
  created: number(),
  currentPeriodEnd: number(),
  currentPeriodStart: number(),
  discounts: array(DiscountsItemOrRefSchema),
  id: string(),
  metadata: MetadataPropertySchema,
  object: string(),
  price: PriceSchema,
  quantity: optional(number()),
  subscription: string(),
  get taxRates() { return optional(array(TaxRateSchema)) },
}));