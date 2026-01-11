import { TypedSchema, array, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { GetBillingCreditBalanceSummaryObjectPricesItem } from './GetBillingCreditBalanceSummaryObjectPricesItem';
import { GetBillingCreditBalanceSummaryObjectPricesItemSchema } from './GetBillingCreditBalanceSummaryObjectPricesItem';
/**
 * scope_param
 */
export interface GetBillingCreditBalanceSummaryObjectApplicabilityScope {
  priceType?: string;
  prices?: Array<GetBillingCreditBalanceSummaryObjectPricesItem>;
}

export const GetBillingCreditBalanceSummaryObjectApplicabilityScopeSchema: TypedSchema<GetBillingCreditBalanceSummaryObjectApplicabilityScope> = typed<GetBillingCreditBalanceSummaryObjectApplicabilityScope>(object({
  priceType: optional(string()),
  get prices() { return optional(array(GetBillingCreditBalanceSummaryObjectPricesItemSchema)) },
}));