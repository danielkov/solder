import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * owner_params
 *
 * The account or customer the tax ID belongs to. Defaults to `owner[type]=self`.
 */
export interface PostTaxIdsRequestOwner {
  account?: string;
  customer?: string;
  type: string;
}

export const PostTaxIdsRequestOwnerSchema: TypedSchema<PostTaxIdsRequestOwner> = typed<PostTaxIdsRequestOwner>(object({
  account: optional(string()),
  customer: optional(string()),
  type: string(),
}));