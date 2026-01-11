import { TypedSchema, object, typed } from '@speakeasy-api/tonic';

import type { GetBillingCreditBalanceSummaryObjectApplicabilityScope } from './GetBillingCreditBalanceSummaryObjectApplicabilityScope';
import { GetBillingCreditBalanceSummaryObjectApplicabilityScopeSchema } from './GetBillingCreditBalanceSummaryObjectApplicabilityScope';
/**
 * applicability_config_param
 *
 * Configuration specifying what this credit grant applies to. We currently only support `metered` prices that have a [Billing Meter](https://docs.stripe.com/api/billing/meter) attached to them.
 */
export interface PostBillingCreditGrantsRequestApplicabilityConfig {
  /**
   * scope_param
   */
  scope: GetBillingCreditBalanceSummaryObjectApplicabilityScope;
}

export const PostBillingCreditGrantsRequestApplicabilityConfigSchema: TypedSchema<PostBillingCreditGrantsRequestApplicabilityConfig> = typed<PostBillingCreditGrantsRequestApplicabilityConfig>(object({
  scope: GetBillingCreditBalanceSummaryObjectApplicabilityScopeSchema,
}));