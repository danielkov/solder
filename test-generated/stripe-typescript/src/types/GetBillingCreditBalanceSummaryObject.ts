import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { GetBillingCreditBalanceSummaryObjectApplicabilityScope } from './GetBillingCreditBalanceSummaryObjectApplicabilityScope';
import { GetBillingCreditBalanceSummaryObjectApplicabilityScopeSchema } from './GetBillingCreditBalanceSummaryObjectApplicabilityScope';
/**
 * balance_summary_filter_param
 */
export interface GetBillingCreditBalanceSummaryObject {
  /**
   * scope_param
   */
  applicabilityScope?: GetBillingCreditBalanceSummaryObjectApplicabilityScope;
  creditGrant?: string;
  type: string;
}

export const GetBillingCreditBalanceSummaryObjectSchema: TypedSchema<GetBillingCreditBalanceSummaryObject> = typed<GetBillingCreditBalanceSummaryObject>(object({
  get applicabilityScope() { return optional(GetBillingCreditBalanceSummaryObjectApplicabilityScopeSchema) },
  creditGrant: optional(string()),
  type: string(),
}));