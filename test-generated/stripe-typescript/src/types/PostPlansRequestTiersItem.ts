import { TypedSchema, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostPlansRequestTiersItemUpTo } from './PostPlansRequestTiersItemUpTo';
import { PostPlansRequestTiersItemUpToSchema } from './PostPlansRequestTiersItemUpTo';
/**
 * tier
 */
export interface PostPlansRequestTiersItem {
  flatAmount?: number;
  flatAmountDecimal?: string;
  unitAmount?: number;
  unitAmountDecimal?: string;
  upTo: PostPlansRequestTiersItemUpTo;
}

export const PostPlansRequestTiersItemSchema: TypedSchema<PostPlansRequestTiersItem> = typed<PostPlansRequestTiersItem>(object({
  flatAmount: optional(number()),
  flatAmountDecimal: optional(string()),
  unitAmount: optional(number()),
  unitAmountDecimal: optional(string()),
  upTo: PostPlansRequestTiersItemUpToSchema,
}));