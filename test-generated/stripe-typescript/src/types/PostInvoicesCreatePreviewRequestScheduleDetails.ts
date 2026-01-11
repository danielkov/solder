import { TypedSchema, array, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostCheckoutSessionsRequestBillingMode } from './PostCheckoutSessionsRequestBillingMode';
import { PostCheckoutSessionsRequestBillingModeSchema } from './PostCheckoutSessionsRequestBillingMode';
import type { PostInvoicesCreatePreviewRequestPhasesItem } from './PostInvoicesCreatePreviewRequestPhasesItem';
import { PostInvoicesCreatePreviewRequestPhasesItemSchema } from './PostInvoicesCreatePreviewRequestPhasesItem';
/**
 * schedule_details_params
 *
 * The schedule creation or modification params to apply as a preview. Cannot be used with `subscription` or `subscription_` prefixed fields.
 */
export interface PostInvoicesCreatePreviewRequestScheduleDetails {
  /**
   * billing_mode
   */
  billingMode?: PostCheckoutSessionsRequestBillingMode;
  endBehavior?: string;
  phases?: Array<PostInvoicesCreatePreviewRequestPhasesItem>;
  prorationBehavior?: string;
}

export const PostInvoicesCreatePreviewRequestScheduleDetailsSchema: TypedSchema<PostInvoicesCreatePreviewRequestScheduleDetails> = typed<PostInvoicesCreatePreviewRequestScheduleDetails>(object({
  get billingMode() { return optional(PostCheckoutSessionsRequestBillingModeSchema) },
  endBehavior: optional(string()),
  get phases() { return optional(array(PostInvoicesCreatePreviewRequestPhasesItemSchema)) },
  prorationBehavior: optional(string()),
}));