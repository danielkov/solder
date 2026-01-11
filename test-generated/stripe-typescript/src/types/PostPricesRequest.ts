import { TypedSchema, array, boolean, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostAccountsAccountBankAccountsRequestMetadata } from './PostAccountsAccountBankAccountsRequestMetadata';
import { PostAccountsAccountBankAccountsRequestMetadataSchema } from './PostAccountsAccountBankAccountsRequestMetadata';
import type { PostPlansRequestTiersItem } from './PostPlansRequestTiersItem';
import { PostPlansRequestTiersItemSchema } from './PostPlansRequestTiersItem';
import type { PostPlansRequestTransformUsage } from './PostPlansRequestTransformUsage';
import { PostPlansRequestTransformUsageSchema } from './PostPlansRequestTransformUsage';
import type { PostPricesRequestCurrencyOptions } from './PostPricesRequestCurrencyOptions';
import { PostPricesRequestCurrencyOptionsSchema } from './PostPricesRequestCurrencyOptions';
import type { PostPricesRequestCustomUnitAmount } from './PostPricesRequestCustomUnitAmount';
import { PostPricesRequestCustomUnitAmountSchema } from './PostPricesRequestCustomUnitAmount';
import type { PostPricesRequestProductData } from './PostPricesRequestProductData';
import { PostPricesRequestProductDataSchema } from './PostPricesRequestProductData';
import type { PostPricesRequestRecurring } from './PostPricesRequestRecurring';
import { PostPricesRequestRecurringSchema } from './PostPricesRequestRecurring';
export interface PostPricesRequest {
  /**
   * Whether the price can be used for new purchases. Defaults to `true`.
   */
  active?: boolean;
  /**
   * Describes how to compute the price per period. Either `per_unit` or `tiered`. `per_unit` indicates that the fixed amount (specified in `unit_amount` or `unit_amount_decimal`) will be charged per unit in `quantity` (for prices with `usage_type=licensed`), or per unit of total usage (for prices with `usage_type=metered`). `tiered` indicates that the unit pricing will be computed using a tiering strategy as defined using the `tiers` and `tiers_mode` attributes.
   */
  billingScheme?: string;
  /**
   * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
   */
  currency: string;
  /**
   * Prices defined in each available currency option. Each key must be a three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html) and a [supported currency](https://stripe.com/docs/currencies).
   */
  currencyOptions?: PostPricesRequestCurrencyOptions;
  /**
   * custom_unit_amount
   *
   * When set, provides configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links.
   */
  customUnitAmount?: PostPricesRequestCustomUnitAmount;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
  /**
   * A lookup key used to retrieve prices dynamically from a static string. This may be up to 200 characters.
   */
  lookupKey?: string;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: PostAccountsAccountBankAccountsRequestMetadata;
  /**
   * A brief description of the price, hidden from customers.
   */
  nickname?: string;
  /**
   * The ID of the [Product](https://docs.stripe.com/api/products) that this [Price](https://docs.stripe.com/api/prices) will belong to.
   */
  product?: string;
  /**
   * inline_product_params
   *
   * These fields can be used to create a new product that this price will belong to.
   */
  productData?: PostPricesRequestProductData;
  /**
   * recurring
   *
   * The recurring components of a price such as `interval` and `usage_type`.
   */
  recurring?: PostPricesRequestRecurring;
  /**
   * Only required if a [default tax behavior](https://stripe.com/docs/tax/products-prices-tax-categories-tax-behavior#setting-a-default-tax-behavior-(recommended)) was not provided in the Stripe Tax settings. Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
   */
  taxBehavior?: string;
  /**
   * Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.
   */
  tiers?: Array<PostPlansRequestTiersItem>;
  /**
   * Defines if the tiering price should be `graduated` or `volume` based. In `volume`-based tiering, the maximum quantity within a period determines the per unit price, in `graduated` tiering pricing can successively change as the quantity grows.
   */
  tiersMode?: string;
  /**
   * If set to true, will atomically remove the lookup key from the existing price, and assign it to this price.
   */
  transferLookupKey?: boolean;
  /**
   * transform_usage_param
   *
   * Apply a transformation to the reported usage or set quantity before computing the billed price. Cannot be combined with `tiers`.
   */
  transformQuantity?: PostPlansRequestTransformUsage;
  /**
   * A positive integer in cents (or local equivalent) (or 0 for a free price) representing how much to charge. One of `unit_amount`, `unit_amount_decimal`, or `custom_unit_amount` is required, unless `billing_scheme=tiered`.
   */
  unitAmount?: number;
  /**
   * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
   */
  unitAmountDecimal?: string;
}

export const PostPricesRequestSchema: TypedSchema<PostPricesRequest> = typed<PostPricesRequest>(object({
  active: optional(boolean()),
  billingScheme: optional(string()),
  currency: string(),
  get currencyOptions() { return optional(PostPricesRequestCurrencyOptionsSchema) },
  get customUnitAmount() { return optional(PostPricesRequestCustomUnitAmountSchema) },
  expand: optional(array(string())),
  lookupKey: optional(string()),
  get metadata() { return optional(PostAccountsAccountBankAccountsRequestMetadataSchema) },
  nickname: optional(string()),
  product: optional(string()),
  get productData() { return optional(PostPricesRequestProductDataSchema) },
  get recurring() { return optional(PostPricesRequestRecurringSchema) },
  taxBehavior: optional(string()),
  get tiers() { return optional(array(PostPlansRequestTiersItemSchema)) },
  tiersMode: optional(string()),
  transferLookupKey: optional(boolean()),
  get transformQuantity() { return optional(PostPlansRequestTransformUsageSchema) },
  unitAmount: optional(number()),
  unitAmountDecimal: optional(string()),
}));