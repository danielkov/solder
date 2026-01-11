import { TypedSchema, array, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostBillingCreditGrantsRequestAmount } from './PostBillingCreditGrantsRequestAmount';
import { PostBillingCreditGrantsRequestAmountSchema } from './PostBillingCreditGrantsRequestAmount';
import type { PostBillingCreditGrantsRequestApplicabilityConfig } from './PostBillingCreditGrantsRequestApplicabilityConfig';
import { PostBillingCreditGrantsRequestApplicabilityConfigSchema } from './PostBillingCreditGrantsRequestApplicabilityConfig';
import type { PostBillingCreditGrantsRequestMetadata } from './PostBillingCreditGrantsRequestMetadata';
import { PostBillingCreditGrantsRequestMetadataSchema } from './PostBillingCreditGrantsRequestMetadata';
export interface PostBillingCreditGrantsRequest {
  /**
   * amount_param
   *
   * Amount of this credit grant.
   */
  amount: PostBillingCreditGrantsRequestAmount;
  /**
   * applicability_config_param
   *
   * Configuration specifying what this credit grant applies to. We currently only support `metered` prices that have a [Billing Meter](https://docs.stripe.com/api/billing/meter) attached to them.
   */
  applicabilityConfig: PostBillingCreditGrantsRequestApplicabilityConfig;
  /**
   * The category of this credit grant. It defaults to `paid` if not specified.
   */
  category?: string;
  /**
   * ID of the customer to receive the billing credits.
   */
  customer: string;
  /**
   * The time when the billing credits become effective-when they're eligible for use. It defaults to the current timestamp if not specified.
   */
  effectiveAt?: number;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
  /**
   * The time when the billing credits expire. If not specified, the billing credits don't expire.
   */
  expiresAt?: number;
  /**
   * Set of key-value pairs that you can attach to an object. You can use this to store additional information about the object (for example, cost basis) in a structured format.
   */
  metadata?: PostBillingCreditGrantsRequestMetadata;
  /**
   * A descriptive name shown in the Dashboard.
   */
  name?: string;
  /**
   * The desired priority for applying this credit grant. If not specified, it will be set to the default value of 50. The highest priority is 0 and the lowest is 100.
   */
  priority?: number;
}

export const PostBillingCreditGrantsRequestSchema: TypedSchema<PostBillingCreditGrantsRequest> = typed<PostBillingCreditGrantsRequest>(object({
  amount: PostBillingCreditGrantsRequestAmountSchema,
  applicabilityConfig: PostBillingCreditGrantsRequestApplicabilityConfigSchema,
  category: optional(string()),
  customer: string(),
  effectiveAt: optional(number()),
  expand: optional(array(string())),
  expiresAt: optional(number()),
  get metadata() { return optional(PostBillingCreditGrantsRequestMetadataSchema) },
  name: optional(string()),
  priority: optional(number()),
}));