import { TypedSchema, boolean, object, typed } from '@speakeasy-api/tonic';
/**
 * PaymentPagesCheckoutSessionAdaptivePricing
 *
 * 
 */
export interface PaymentPagesCheckoutSessionAdaptivePricing {
  /**
   * If enabled, Adaptive Pricing is available on [eligible sessions](https://docs.stripe.com/payments/currencies/localize-prices/adaptive-pricing?payment-ui=stripe-hosted#restrictions).
   */
  enabled: boolean;
}

export const PaymentPagesCheckoutSessionAdaptivePricingSchema: TypedSchema<PaymentPagesCheckoutSessionAdaptivePricing> = typed<PaymentPagesCheckoutSessionAdaptivePricing>(object({
  enabled: boolean(),
}));