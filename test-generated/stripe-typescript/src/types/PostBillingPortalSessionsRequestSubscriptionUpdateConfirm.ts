import { TypedSchema, array, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostBillingPortalSessionsRequestDiscountsItem } from './PostBillingPortalSessionsRequestDiscountsItem';
import { PostBillingPortalSessionsRequestDiscountsItemSchema } from './PostBillingPortalSessionsRequestDiscountsItem';
import type { PostBillingPortalSessionsRequestItemsItem } from './PostBillingPortalSessionsRequestItemsItem';
import { PostBillingPortalSessionsRequestItemsItemSchema } from './PostBillingPortalSessionsRequestItemsItem';
/**
 * flow_data_subscription_update_confirm_param
 */
export interface PostBillingPortalSessionsRequestSubscriptionUpdateConfirm {
  discounts?: Array<PostBillingPortalSessionsRequestDiscountsItem>;
  items: Array<PostBillingPortalSessionsRequestItemsItem>;
  subscription: string;
}

export const PostBillingPortalSessionsRequestSubscriptionUpdateConfirmSchema: TypedSchema<PostBillingPortalSessionsRequestSubscriptionUpdateConfirm> = typed<PostBillingPortalSessionsRequestSubscriptionUpdateConfirm>(object({
  get discounts() { return optional(array(PostBillingPortalSessionsRequestDiscountsItemSchema)) },
  items: array(PostBillingPortalSessionsRequestItemsItemSchema),
  subscription: string(),
}));