import { TypedSchema, object, typed } from '@speakeasy-api/tonic';

import type { BillingCreditGrantsResourceScope } from './BillingCreditGrantsResourceScope';
import { BillingCreditGrantsResourceScopeSchema } from './BillingCreditGrantsResourceScope';
/**
 * BillingCreditGrantsResourceApplicabilityConfig
 *
 * 
 */
export interface BillingCreditGrantsResourceApplicabilityConfig {
  /**
   * BillingCreditGrantsResourceScope
   *
   * 
   */
  scope: BillingCreditGrantsResourceScope;
}

export const BillingCreditGrantsResourceApplicabilityConfigSchema: TypedSchema<BillingCreditGrantsResourceApplicabilityConfig> = typed<BillingCreditGrantsResourceApplicabilityConfig>(object({
  scope: BillingCreditGrantsResourceScopeSchema,
}));