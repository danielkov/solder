import { TypedSchema, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostCheckoutSessionsRequestLineItemsItemRecurring } from './PostCheckoutSessionsRequestLineItemsItemRecurring';
import { PostCheckoutSessionsRequestLineItemsItemRecurringSchema } from './PostCheckoutSessionsRequestLineItemsItemRecurring';
/**
 * recurring_price_data
 */
export interface PostCustomersCustomerSubscriptionsRequestItemsItemPriceData {
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

export const PostCustomersCustomerSubscriptionsRequestItemsItemPriceDataSchema: TypedSchema<PostCustomersCustomerSubscriptionsRequestItemsItemPriceData> = typed<PostCustomersCustomerSubscriptionsRequestItemsItemPriceData>(object({
  currency: string(),
  product: string(),
  recurring: PostCheckoutSessionsRequestLineItemsItemRecurringSchema,
  taxBehavior: optional(string()),
  unitAmount: optional(number()),
  unitAmountDecimal: optional(string()),
}));