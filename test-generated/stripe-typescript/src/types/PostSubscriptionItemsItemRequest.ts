import { TypedSchema, array, boolean, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { DefaultPostAccountsRequestMetadata } from './DefaultPostAccountsRequestMetadata';
import { DefaultPostAccountsRequestMetadataSchema } from './DefaultPostAccountsRequestMetadata';
import type { PostSubscriptionItemsItemRequestPriceData } from './PostSubscriptionItemsItemRequestPriceData';
import { PostSubscriptionItemsItemRequestPriceDataSchema } from './PostSubscriptionItemsItemRequestPriceData';
import type { PostSubscriptionItemsRequestBillingThresholds } from './PostSubscriptionItemsRequestBillingThresholds';
import { PostSubscriptionItemsRequestBillingThresholdsSchema } from './PostSubscriptionItemsRequestBillingThresholds';
import type { PostSubscriptionItemsRequestDiscounts } from './PostSubscriptionItemsRequestDiscounts';
import { PostSubscriptionItemsRequestDiscountsSchema } from './PostSubscriptionItemsRequestDiscounts';
import type { PostSubscriptionItemsRequestTaxRates } from './PostSubscriptionItemsRequestTaxRates';
import { PostSubscriptionItemsRequestTaxRatesSchema } from './PostSubscriptionItemsRequestTaxRates';
export interface PostSubscriptionItemsItemRequest {
  /**
   * Define thresholds at which an invoice will be sent, and the subscription advanced to a new billing period. Pass an empty string to remove previously-defined thresholds.
   */
  billingThresholds?: PostSubscriptionItemsRequestBillingThresholds;
  /**
   * The coupons to redeem into discounts for the subscription item.
   */
  discounts?: PostSubscriptionItemsRequestDiscounts;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: DefaultPostAccountsRequestMetadata;
  /**
   * Indicates if a customer is on or off-session while an invoice payment is attempted. Defaults to `false` (on-session).
   */
  offSession?: boolean;
  /**
   * Use `allow_incomplete` to transition the subscription to `status=past_due` if a payment is required but cannot be paid. This allows you to manage scenarios where additional user actions are needed to pay a subscription's invoice. For example, SCA regulation may require 3DS authentication to complete payment. See the [SCA Migration Guide](https://stripe.com/docs/billing/migration/strong-customer-authentication) for Billing to learn more. This is the default behavior.

Use `default_incomplete` to transition the subscription to `status=past_due` when payment is required and await explicit confirmation of the invoice's payment intent. This allows simpler management of scenarios where additional user actions are needed to pay a subscription’s invoice. Such as failed payments, [SCA regulation](https://stripe.com/docs/billing/migration/strong-customer-authentication), or collecting a mandate for a bank debit payment method.

Use `pending_if_incomplete` to update the subscription using [pending updates](https://stripe.com/docs/billing/subscriptions/pending-updates). When you use `pending_if_incomplete` you can only pass the parameters [supported by pending updates](https://stripe.com/docs/billing/pending-updates-reference#supported-attributes).

Use `error_if_incomplete` if you want Stripe to return an HTTP 402 status code if a subscription's invoice cannot be paid. For example, if a payment method requires 3DS authentication due to SCA regulation and further user action is needed, this parameter does not update the subscription and returns an error instead. This was the default behavior for API versions prior to 2019-03-14. See the [changelog](https://docs.stripe.com/changelog/2019-03-14) to learn more.
   */
  paymentBehavior?: string;
  /**
   * The ID of the price object. One of `price` or `price_data` is required. When changing a subscription item's price, `quantity` is set to 1 unless a `quantity` parameter is provided.
   */
  price?: string;
  /**
   * recurring_price_data
   *
   * Data used to generate a new [Price](https://stripe.com/docs/api/prices) object inline. One of `price` or `price_data` is required.
   */
  priceData?: PostSubscriptionItemsItemRequestPriceData;
  /**
   * Determines how to handle [prorations](https://stripe.com/docs/billing/subscriptions/prorations) when the billing cycle changes (e.g., when switching plans, resetting `billing_cycle_anchor=now`, or starting a trial), or if an item's `quantity` changes. The default value is `create_prorations`.
   */
  prorationBehavior?: string;
  /**
   * If set, the proration will be calculated as though the subscription was updated at the given time. This can be used to apply the same proration that was previewed with the [upcoming invoice](https://stripe.com/docs/api#retrieve_customer_invoice) endpoint.
   */
  prorationDate?: number;
  /**
   * The quantity you'd like to apply to the subscription item you're creating.
   */
  quantity?: number;
  /**
   * A list of [Tax Rate](https://stripe.com/docs/api/tax_rates) ids. These Tax Rates will override the [`default_tax_rates`](https://stripe.com/docs/api/subscriptions/create#create_subscription-default_tax_rates) on the Subscription. When updating, pass an empty string to remove previously-defined tax rates.
   */
  taxRates?: PostSubscriptionItemsRequestTaxRates;
}

export const PostSubscriptionItemsItemRequestSchema: TypedSchema<PostSubscriptionItemsItemRequest> = typed<PostSubscriptionItemsItemRequest>(object({
  get billingThresholds() { return optional(PostSubscriptionItemsRequestBillingThresholdsSchema) },
  get discounts() { return optional(PostSubscriptionItemsRequestDiscountsSchema) },
  expand: optional(array(string())),
  get metadata() { return optional(DefaultPostAccountsRequestMetadataSchema) },
  offSession: optional(boolean()),
  paymentBehavior: optional(string()),
  price: optional(string()),
  get priceData() { return optional(PostSubscriptionItemsItemRequestPriceDataSchema) },
  prorationBehavior: optional(string()),
  prorationDate: optional(number()),
  quantity: optional(number()),
  get taxRates() { return optional(PostSubscriptionItemsRequestTaxRatesSchema) },
}));