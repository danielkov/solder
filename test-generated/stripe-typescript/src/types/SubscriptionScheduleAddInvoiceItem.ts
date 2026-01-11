import { TypedSchema, array, number, object, optional, typed } from '@speakeasy-api/tonic';

import type { DiscountsResourceStackableDiscount } from './DiscountsResourceStackableDiscount';
import { DiscountsResourceStackableDiscountSchema } from './DiscountsResourceStackableDiscount';
import type { MetadataProperty } from './MetadataProperty';
import { MetadataPropertySchema } from './MetadataProperty';
import type { PriceUnion } from './PriceUnion';
import { PriceUnionSchema } from './PriceUnion';
import type { SubscriptionScheduleAddInvoiceItemPeriod } from './SubscriptionScheduleAddInvoiceItemPeriod';
import { SubscriptionScheduleAddInvoiceItemPeriodSchema } from './SubscriptionScheduleAddInvoiceItemPeriod';
import type { TaxRate } from './TaxRate';
import { TaxRateSchema } from './TaxRate';
/**
 * SubscriptionScheduleAddInvoiceItem
 *
 * An Add Invoice Item describes the prices and quantities that will be added as pending invoice items when entering a phase.
 */
export interface SubscriptionScheduleAddInvoiceItem {
  /**
   * The stackable discounts that will be applied to the item.
   */
  discounts: Array<DiscountsResourceStackableDiscount>;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
   */
  metadata?: MetadataProperty;
  /**
   * SubscriptionScheduleAddInvoiceItemPeriod
   *
   * 
   */
  period: SubscriptionScheduleAddInvoiceItemPeriod;
  /**
   * ID of the price used to generate the invoice item.
   */
  price: PriceUnion;
  /**
   * The quantity of the invoice item.
   */
  quantity?: number;
  /**
   * The tax rates which apply to the item. When set, the `default_tax_rates` do not apply to this item.
   */
  taxRates?: Array<TaxRate>;
}

export const SubscriptionScheduleAddInvoiceItemSchema: TypedSchema<SubscriptionScheduleAddInvoiceItem> = typed<SubscriptionScheduleAddInvoiceItem>(object({
  discounts: array(DiscountsResourceStackableDiscountSchema),
  get metadata() { return optional(MetadataPropertySchema) },
  period: SubscriptionScheduleAddInvoiceItemPeriodSchema,
  price: PriceUnionSchema,
  quantity: optional(number()),
  get taxRates() { return optional(array(TaxRateSchema)) },
}));