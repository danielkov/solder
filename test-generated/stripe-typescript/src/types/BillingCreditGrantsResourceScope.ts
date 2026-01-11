import { TypedSchema, array, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { BillingCreditGrantsResourceApplicablePrice } from './BillingCreditGrantsResourceApplicablePrice';
import { BillingCreditGrantsResourceApplicablePriceSchema } from './BillingCreditGrantsResourceApplicablePrice';
/**
 * BillingCreditGrantsResourceScope
 *
 * 
 */
export interface BillingCreditGrantsResourceScope {
  /**
   * The price type that credit grants can apply to. We currently only support the `metered` price type. This refers to prices that have a [Billing Meter](https://docs.stripe.com/api/billing/meter) attached to them. Cannot be used in combination with `prices`.
   */
  priceType?: string;
  /**
   * The prices that credit grants can apply to. We currently only support `metered` prices. This refers to prices that have a [Billing Meter](https://docs.stripe.com/api/billing/meter) attached to them. Cannot be used in combination with `price_type`.
   */
  prices?: Array<BillingCreditGrantsResourceApplicablePrice>;
}

export const BillingCreditGrantsResourceScopeSchema: TypedSchema<BillingCreditGrantsResourceScope> = typed<BillingCreditGrantsResourceScope>(object({
  priceType: optional(string()),
  get prices() { return optional(array(BillingCreditGrantsResourceApplicablePriceSchema)) },
}));