import { TypedSchema, array, number, object, optional, typed } from '@speakeasy-api/tonic';

import type { DiscountsResourceStackableDiscount } from './DiscountsResourceStackableDiscount';
import { DiscountsResourceStackableDiscountSchema } from './DiscountsResourceStackableDiscount';
import type { MetadataProperty } from './MetadataProperty';
import { MetadataPropertySchema } from './MetadataProperty';
import type { PriceUnion } from './PriceUnion';
import { PriceUnionSchema } from './PriceUnion';
import type { SubscriptionItemBillingThresholds } from './SubscriptionItemBillingThresholds';
import { SubscriptionItemBillingThresholdsSchema } from './SubscriptionItemBillingThresholds';
import type { TaxRate } from './TaxRate';
import { TaxRateSchema } from './TaxRate';
/**
 * SubscriptionScheduleConfigurationItem
 *
 * A phase item describes the price and quantity of a phase.
 */
export interface SubscriptionScheduleConfigurationItem {
  /**
   * Define thresholds at which an invoice will be sent, and the related subscription advanced to a new billing period
   */
  billingThresholds?: SubscriptionItemBillingThresholds;
  /**
   * The discounts applied to the subscription item. Subscription item discounts are applied before subscription discounts. Use `expand[]=discounts` to expand each discount.
   */
  discounts: Array<DiscountsResourceStackableDiscount>;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an item. Metadata on this item will update the underlying subscription item's `metadata` when the phase is entered.
   */
  metadata?: MetadataProperty;
  /**
   * ID of the price to which the customer should be subscribed.
   */
  price: PriceUnion;
  /**
   * Quantity of the plan to which the customer should be subscribed.
   */
  quantity?: number;
  /**
   * The tax rates which apply to this `phase_item`. When set, the `default_tax_rates` on the phase do not apply to this `phase_item`.
   */
  taxRates?: Array<TaxRate>;
}

export const SubscriptionScheduleConfigurationItemSchema: TypedSchema<SubscriptionScheduleConfigurationItem> = typed<SubscriptionScheduleConfigurationItem>(object({
  get billingThresholds() { return optional(SubscriptionItemBillingThresholdsSchema) },
  discounts: array(DiscountsResourceStackableDiscountSchema),
  get metadata() { return optional(MetadataPropertySchema) },
  price: PriceUnionSchema,
  quantity: optional(number()),
  get taxRates() { return optional(array(TaxRateSchema)) },
}));