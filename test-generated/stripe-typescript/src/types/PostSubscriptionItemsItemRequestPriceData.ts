import { TypedSchema, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostCheckoutSessionsRequestLineItemsItemRecurring } from './PostCheckoutSessionsRequestLineItemsItemRecurring';
import { PostCheckoutSessionsRequestLineItemsItemRecurringSchema } from './PostCheckoutSessionsRequestLineItemsItemRecurring';
/**
 * recurring_price_data
 *
 * Data used to generate a new [Price](https://stripe.com/docs/api/prices) object inline. One of `price` or `price_data` is required.
 */
export interface PostSubscriptionItemsItemRequestPriceData {
  currency: string;
  product: string;
  /**
   * recurring_adhoc
   */
  recurring: PostCheckoutSessionsRequestLineItemsItemRecurring;
  taxBehavior?: string;
  unitAmount?: number;
  unitAmountDecimal?: string;
}

export const PostSubscriptionItemsItemRequestPriceDataSchema: TypedSchema<PostSubscriptionItemsItemRequestPriceData> = typed<PostSubscriptionItemsItemRequestPriceData>(object({
  currency: string(),
  product: string(),
  recurring: PostCheckoutSessionsRequestLineItemsItemRecurringSchema,
  taxBehavior: optional(string()),
  unitAmount: optional(number()),
  unitAmountDecimal: optional(string()),
}));