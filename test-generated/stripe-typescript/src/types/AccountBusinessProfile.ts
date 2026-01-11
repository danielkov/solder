import { TypedSchema, array, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { AccountAnnualRevenue } from './AccountAnnualRevenue';
import { AccountAnnualRevenueSchema } from './AccountAnnualRevenue';
import type { AccountMonthlyEstimatedRevenue } from './AccountMonthlyEstimatedRevenue';
import { AccountMonthlyEstimatedRevenueSchema } from './AccountMonthlyEstimatedRevenue';
import type { Address } from './Address';
import { AddressSchema } from './Address';
/**
 * AccountBusinessProfile
 *
 * 
 */
export interface AccountBusinessProfile {
  /**
   * The applicant's gross annual revenue for its preceding fiscal year.
   */
  annualRevenue?: AccountAnnualRevenue;
  /**
   * An estimated upper bound of employees, contractors, vendors, etc. currently working for the business.
   */
  estimatedWorkerCount?: number;
  /**
   * [The merchant category code for the account](/connect/setting-mcc). MCCs are used to classify businesses based on the goods or services they provide.
   */
  mcc?: string;
  /**
   * Whether the business is a minority-owned, women-owned, and/or LGBTQI+ -owned business.
   */
  minorityOwnedBusinessDesignation?: Array<string>;
  /**
   * AccountMonthlyEstimatedRevenue
   *
   * 
   */
  monthlyEstimatedRevenue?: AccountMonthlyEstimatedRevenue;
  /**
   * The customer-facing business name.
   */
  name?: string;
  /**
   * Internal-only description of the product sold or service provided by the business. It's used by Stripe for risk and underwriting purposes.
   */
  productDescription?: string;
  /**
   * A publicly available mailing address for sending support issues to.
   */
  supportAddress?: Address;
  /**
   * A publicly available email address for sending support issues to.
   */
  supportEmail?: string;
  /**
   * A publicly available phone number to call with support issues.
   */
  supportPhone?: string;
  /**
   * A publicly available website for handling support issues.
   */
  supportUrl?: string;
  /**
   * The business's publicly available website.
   */
  url?: string;
}

export const AccountBusinessProfileSchema: TypedSchema<AccountBusinessProfile> = typed<AccountBusinessProfile>(object({
  get annualRevenue() { return optional(AccountAnnualRevenueSchema) },
  estimatedWorkerCount: optional(number()),
  mcc: optional(string()),
  minorityOwnedBusinessDesignation: optional(array(string())),
  get monthlyEstimatedRevenue() { return optional(AccountMonthlyEstimatedRevenueSchema) },
  name: optional(string()),
  productDescription: optional(string()),
  get supportAddress() { return optional(AddressSchema) },
  supportEmail: optional(string()),
  supportPhone: optional(string()),
  supportUrl: optional(string()),
  url: optional(string()),
}));