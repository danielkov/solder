import { TypedSchema, number, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * recurring
 *
 * The recurring components of a price such as `interval` and `usage_type`.
 */
export interface PostPricesRequestRecurring {
  interval: string;
  intervalCount?: number;
  meter?: string;
  usageType?: string;
}

export const PostPricesRequestRecurringSchema: TypedSchema<PostPricesRequestRecurring> = typed<PostPricesRequestRecurring>(object({
  interval: string(),
  intervalCount: optional(number()),
  meter: optional(string()),
  usageType: optional(string()),
}));