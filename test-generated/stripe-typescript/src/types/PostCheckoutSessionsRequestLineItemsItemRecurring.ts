import { TypedSchema, number, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * recurring_adhoc
 */
export interface PostCheckoutSessionsRequestLineItemsItemRecurring {
  interval: string;
  intervalCount?: number;
}

export const PostCheckoutSessionsRequestLineItemsItemRecurringSchema: TypedSchema<PostCheckoutSessionsRequestLineItemsItemRecurring> = typed<PostCheckoutSessionsRequestLineItemsItemRecurring>(object({
  interval: string(),
  intervalCount: optional(number()),
}));