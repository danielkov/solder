import { TypedSchema, array, number, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * spending_limits_param
 */
export interface PostIssuingCardholdersRequestSpendingLimitsItem {
  amount: number;
  categories?: Array<string>;
  interval: string;
}

export const PostIssuingCardholdersRequestSpendingLimitsItemSchema: TypedSchema<PostIssuingCardholdersRequestSpendingLimitsItem> = typed<PostIssuingCardholdersRequestSpendingLimitsItem>(object({
  amount: number(),
  categories: optional(array(string())),
  interval: string(),
}));