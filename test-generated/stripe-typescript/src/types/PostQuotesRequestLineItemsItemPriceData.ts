import { TypedSchema, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostCheckoutSessionsRequestLineItemsItemRecurring } from './PostCheckoutSessionsRequestLineItemsItemRecurring';
import { PostCheckoutSessionsRequestLineItemsItemRecurringSchema } from './PostCheckoutSessionsRequestLineItemsItemRecurring';
/**
 * price_data
 */
export interface PostQuotesRequestLineItemsItemPriceData {
  currency: string;
  product: string;
  /**
   * recurring_adhoc
   */
  recurring?: PostCheckoutSessionsRequestLineItemsItemRecurring;
  taxBehavior?: string;
  unitAmount?: number;
  unitAmountDecimal?: string;
}

export const PostQuotesRequestLineItemsItemPriceDataSchema: TypedSchema<PostQuotesRequestLineItemsItemPriceData> = typed<PostQuotesRequestLineItemsItemPriceData>(object({
  currency: string(),
  product: string(),
  get recurring() { return optional(PostCheckoutSessionsRequestLineItemsItemRecurringSchema) },
  taxBehavior: optional(string()),
  unitAmount: optional(number()),
  unitAmountDecimal: optional(string()),
}));