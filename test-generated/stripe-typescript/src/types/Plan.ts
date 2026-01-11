import { TypedSchema, array, boolean, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { MetadataProperty } from './MetadataProperty';
import { MetadataPropertySchema } from './MetadataProperty';
import type { PlanTier } from './PlanTier';
import { PlanTierSchema } from './PlanTier';
import type { ProductUnion } from './ProductUnion';
import { ProductUnionSchema } from './ProductUnion';
import type { TransformUsage } from './TransformUsage';
import { TransformUsageSchema } from './TransformUsage';
/**
 * Plan
 *
 * You can now model subscriptions more flexibly using the [Prices API](https://stripe.com/docs/api#prices). It replaces the Plans API and is backwards compatible to simplify your migration.

Plans define the base price, currency, and billing cycle for recurring purchases of products.
[Products](https://stripe.com/docs/api#products) help you track inventory or provisioning, and plans help you track pricing. Different physical goods or levels of service should be represented by products, and pricing options should be represented by plans. This approach lets you change prices without having to change your provisioning scheme.

For example, you might have a single "gold" product that has plans for $10/month, $100/year, €9/month, and €90/year.

Related guides: [Set up a subscription](https://stripe.com/docs/billing/subscriptions/set-up-subscription) and more about [products and prices](https://stripe.com/docs/products-prices/overview).
 */
export interface Plan {
  /**
   * Whether the plan can be used for new purchases.
   */
  active: boolean;
  /**
   * The unit amount in cents (or local equivalent) to be charged, represented as a whole integer if possible. Only set if `billing_scheme=per_unit`.
   */
  amount?: number;
  /**
   * The unit amount in cents (or local equivalent) to be charged, represented as a decimal string with at most 12 decimal places. Only set if `billing_scheme=per_unit`.
   */
  amountDecimal?: string;
  /**
   * Describes how to compute the price per period. Either `per_unit` or `tiered`. `per_unit` indicates that the fixed amount (specified in `amount`) will be charged per unit in `quantity` (for plans with `usage_type=licensed`), or per unit of total usage (for plans with `usage_type=metered`). `tiered` indicates that the unit pricing will be computed using a tiering strategy as defined using the `tiers` and `tiers_mode` attributes.
   */
  billingScheme: string;
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
   * The frequency at which a subscription is billed. One of `day`, `week`, `month` or `year`.
   */
  interval: string;
  /**
   * The number of intervals (specified in the `interval` attribute) between subscription billings. For example, `interval=month` and `interval_count=3` bills every 3 months.
   */
  intervalCount: number;
  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
   */
  metadata?: MetadataProperty;
  /**
   * The meter tracking the usage of a metered price
   */
  meter?: string;
  /**
   * A brief description of the plan, hidden from customers.
   */
  nickname?: string;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: string;
  /**
   * The product whose pricing this plan determines.
   */
  product?: ProductUnion;
  /**
   * Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.
   */
  tiers?: Array<PlanTier>;
  /**
   * Defines if the tiering price should be `graduated` or `volume` based. In `volume`-based tiering, the maximum quantity within a period determines the per unit price. In `graduated` tiering, pricing can change as the quantity grows.
   */
  tiersMode?: string;
  /**
   * Apply a transformation to the reported usage or set quantity before computing the amount billed. Cannot be combined with `tiers`.
   */
  transformUsage?: TransformUsage;
  /**
   * Default number of trial days when subscribing a customer to this plan using [`trial_from_plan=true`](https://stripe.com/docs/api#create_subscription-trial_from_plan).
   */
  trialPeriodDays?: number;
  /**
   * Configures how the quantity per period should be determined. Can be either `metered` or `licensed`. `licensed` automatically bills the `quantity` set when adding it to a subscription. `metered` aggregates the total usage based on usage records. Defaults to `licensed`.
   */
  usageType: string;
}

export const PlanSchema: TypedSchema<Plan> = typed<Plan>(object({
  active: boolean(),
  amount: optional(number()),
  amountDecimal: optional(string()),
  billingScheme: string(),
  created: number(),
  currency: string(),
  id: string(),
  interval: string(),
  intervalCount: number(),
  livemode: boolean(),
  get metadata() { return optional(MetadataPropertySchema) },
  meter: optional(string()),
  nickname: optional(string()),
  object: string(),
  get product() { return optional(ProductUnionSchema) },
  get tiers() { return optional(array(PlanTierSchema)) },
  tiersMode: optional(string()),
  get transformUsage() { return optional(TransformUsageSchema) },
  trialPeriodDays: optional(number()),
  usageType: string(),
}));