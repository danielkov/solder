import { TypedSchema, boolean, object, optional, typed } from '@speakeasy-api/tonic';
/**
 * adaptive_pricing_params
 *
 * Settings for price localization with [Adaptive Pricing](https://docs.stripe.com/payments/checkout/adaptive-pricing).
 */
export interface PostCheckoutSessionsRequestAdaptivePricing {
  enabled?: boolean;
}

export const PostCheckoutSessionsRequestAdaptivePricingSchema: TypedSchema<PostCheckoutSessionsRequestAdaptivePricing> = typed<PostCheckoutSessionsRequestAdaptivePricing>(object({
  enabled: optional(boolean()),
}));