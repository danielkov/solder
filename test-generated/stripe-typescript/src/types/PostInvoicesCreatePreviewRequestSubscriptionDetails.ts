import { TypedSchema, array, boolean, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostAccountsAccountRequestDefaultAccountTaxIds } from './PostAccountsAccountRequestDefaultAccountTaxIds';
import { PostAccountsAccountRequestDefaultAccountTaxIdsSchema } from './PostAccountsAccountRequestDefaultAccountTaxIds';
import type { PostCheckoutSessionsRequestBillingMode } from './PostCheckoutSessionsRequestBillingMode';
import { PostCheckoutSessionsRequestBillingModeSchema } from './PostCheckoutSessionsRequestBillingMode';
import type { PostCustomersCustomerSubscriptionsSubscriptionExposedIdRequestItemsItem } from './PostCustomersCustomerSubscriptionsSubscriptionExposedIdRequestItemsItem';
import { PostCustomersCustomerSubscriptionsSubscriptionExposedIdRequestItemsItemSchema } from './PostCustomersCustomerSubscriptionsSubscriptionExposedIdRequestItemsItem';
import type { PostInvoicesCreatePreviewRequestBillingCycleAnchor } from './PostInvoicesCreatePreviewRequestBillingCycleAnchor';
import { PostInvoicesCreatePreviewRequestBillingCycleAnchorSchema } from './PostInvoicesCreatePreviewRequestBillingCycleAnchor';
import type { PostInvoicesCreatePreviewRequestCancelAt } from './PostInvoicesCreatePreviewRequestCancelAt';
import { PostInvoicesCreatePreviewRequestCancelAtSchema } from './PostInvoicesCreatePreviewRequestCancelAt';
import type { PostInvoicesCreatePreviewRequestTrialEnd } from './PostInvoicesCreatePreviewRequestTrialEnd';
import { PostInvoicesCreatePreviewRequestTrialEndSchema } from './PostInvoicesCreatePreviewRequestTrialEnd';
/**
 * subscription_details_params
 *
 * The subscription creation or modification params to apply as a preview. Cannot be used with `schedule` or `schedule_details` fields.
 */
export interface PostInvoicesCreatePreviewRequestSubscriptionDetails {
  billingCycleAnchor?: PostInvoicesCreatePreviewRequestBillingCycleAnchor;
  /**
   * billing_mode
   */
  billingMode?: PostCheckoutSessionsRequestBillingMode;
  cancelAt?: PostInvoicesCreatePreviewRequestCancelAt;
  cancelAtPeriodEnd?: boolean;
  cancelNow?: boolean;
  defaultTaxRates?: PostAccountsAccountRequestDefaultAccountTaxIds;
  items?: Array<PostCustomersCustomerSubscriptionsSubscriptionExposedIdRequestItemsItem>;
  prorationBehavior?: string;
  prorationDate?: number;
  resumeAt?: string;
  startDate?: number;
  trialEnd?: PostInvoicesCreatePreviewRequestTrialEnd;
}

export const PostInvoicesCreatePreviewRequestSubscriptionDetailsSchema: TypedSchema<PostInvoicesCreatePreviewRequestSubscriptionDetails> = typed<PostInvoicesCreatePreviewRequestSubscriptionDetails>(object({
  get billingCycleAnchor() { return optional(PostInvoicesCreatePreviewRequestBillingCycleAnchorSchema) },
  get billingMode() { return optional(PostCheckoutSessionsRequestBillingModeSchema) },
  get cancelAt() { return optional(PostInvoicesCreatePreviewRequestCancelAtSchema) },
  cancelAtPeriodEnd: optional(boolean()),
  cancelNow: optional(boolean()),
  get defaultTaxRates() { return optional(PostAccountsAccountRequestDefaultAccountTaxIdsSchema) },
  get items() { return optional(array(PostCustomersCustomerSubscriptionsSubscriptionExposedIdRequestItemsItemSchema)) },
  prorationBehavior: optional(string()),
  prorationDate: optional(number()),
  resumeAt: optional(string()),
  startDate: optional(number()),
  get trialEnd() { return optional(PostInvoicesCreatePreviewRequestTrialEndSchema) },
}));