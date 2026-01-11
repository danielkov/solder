import { TypedSchema, number, object, string, typed } from '@speakeasy-api/tonic';
/**
 * monetary_amount_param
 */
export interface PostBillingCreditGrantsRequestMonetary {
  currency: string;
  value: number;
}

export const PostBillingCreditGrantsRequestMonetarySchema: TypedSchema<PostBillingCreditGrantsRequestMonetary> = typed<PostBillingCreditGrantsRequestMonetary>(object({
  currency: string(),
  value: number(),
}));