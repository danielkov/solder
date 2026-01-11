import { TypedSchema, number, object, string, typed } from '@speakeasy-api/tonic';
/**
 * subscription_next_billing_param
 */
export interface PostCheckoutSessionsRequestSubscriptionsObjectNextBilling {
  amount: number;
  date: string;
}

export const PostCheckoutSessionsRequestSubscriptionsObjectNextBillingSchema: TypedSchema<PostCheckoutSessionsRequestSubscriptionsObjectNextBilling> = typed<PostCheckoutSessionsRequestSubscriptionsObjectNextBilling>(object({
  amount: number(),
  date: string(),
}));