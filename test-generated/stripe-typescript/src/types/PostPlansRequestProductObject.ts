import { TypedSchema, boolean, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostAccountsRequestMetadataObject } from './PostAccountsRequestMetadataObject';
import { PostAccountsRequestMetadataObjectSchema } from './PostAccountsRequestMetadataObject';
/**
 * inline_product_params
 *
 * The product whose pricing the created plan will represent. This can either be the ID of an existing product, or a dictionary containing fields used to create a [service product](https://stripe.com/docs/api#product_object-type).
 */
export interface PostPlansRequestProductObject {
  active?: boolean;
  id?: string;
  metadata?: PostAccountsRequestMetadataObject;
  name: string;
  statementDescriptor?: string;
  taxCode?: string;
  unitLabel?: string;
}

export const PostPlansRequestProductObjectSchema: TypedSchema<PostPlansRequestProductObject> = typed<PostPlansRequestProductObject>(object({
  active: optional(boolean()),
  id: optional(string()),
  get metadata() { return optional(PostAccountsRequestMetadataObjectSchema) },
  name: string(),
  statementDescriptor: optional(string()),
  taxCode: optional(string()),
  unitLabel: optional(string()),
}));