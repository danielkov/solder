import { TypedSchema, array, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostAccountsRequestAnnualRevenue } from './PostAccountsRequestAnnualRevenue';
import { PostAccountsRequestAnnualRevenueSchema } from './PostAccountsRequestAnnualRevenue';
import type { PostAccountsRequestMonthlyEstimatedRevenue } from './PostAccountsRequestMonthlyEstimatedRevenue';
import { PostAccountsRequestMonthlyEstimatedRevenueSchema } from './PostAccountsRequestMonthlyEstimatedRevenue';
import type { PostAccountsRequestSupportAddress } from './PostAccountsRequestSupportAddress';
import { PostAccountsRequestSupportAddressSchema } from './PostAccountsRequestSupportAddress';
import type { PostAccountsRequestSupportUrl } from './PostAccountsRequestSupportUrl';
import { PostAccountsRequestSupportUrlSchema } from './PostAccountsRequestSupportUrl';
/**
 * business_profile_specs
 *
 * Business information about the account.
 */
export interface PostAccountsRequestBusinessProfile {
  /**
   * annual_revenue_specs
   */
  annualRevenue?: PostAccountsRequestAnnualRevenue;
  estimatedWorkerCount?: number;
  mcc?: string;
  minorityOwnedBusinessDesignation?: Array<string>;
  /**
   * monthly_estimated_revenue_specs
   */
  monthlyEstimatedRevenue?: PostAccountsRequestMonthlyEstimatedRevenue;
  name?: string;
  productDescription?: string;
  /**
   * address_specs
   */
  supportAddress?: PostAccountsRequestSupportAddress;
  supportEmail?: string;
  supportPhone?: string;
  supportUrl?: PostAccountsRequestSupportUrl;
  url?: string;
}

export const PostAccountsRequestBusinessProfileSchema: TypedSchema<PostAccountsRequestBusinessProfile> = typed<PostAccountsRequestBusinessProfile>(object({
  get annualRevenue() { return optional(PostAccountsRequestAnnualRevenueSchema) },
  estimatedWorkerCount: optional(number()),
  mcc: optional(string()),
  minorityOwnedBusinessDesignation: optional(array(string())),
  get monthlyEstimatedRevenue() { return optional(PostAccountsRequestMonthlyEstimatedRevenueSchema) },
  name: optional(string()),
  productDescription: optional(string()),
  get supportAddress() { return optional(PostAccountsRequestSupportAddressSchema) },
  supportEmail: optional(string()),
  supportPhone: optional(string()),
  get supportUrl() { return optional(PostAccountsRequestSupportUrlSchema) },
  url: optional(string()),
}));