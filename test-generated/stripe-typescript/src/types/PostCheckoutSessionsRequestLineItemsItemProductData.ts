import { TypedSchema, array, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostAccountsRequestMetadataObject } from './PostAccountsRequestMetadataObject';
import { PostAccountsRequestMetadataObjectSchema } from './PostAccountsRequestMetadataObject';
/**
 * product_data
 */
export interface PostCheckoutSessionsRequestLineItemsItemProductData {
  description?: string;
  images?: Array<string>;
  metadata?: PostAccountsRequestMetadataObject;
  name: string;
  taxCode?: string;
  unitLabel?: string;
}

export const PostCheckoutSessionsRequestLineItemsItemProductDataSchema: TypedSchema<PostCheckoutSessionsRequestLineItemsItemProductData> = typed<PostCheckoutSessionsRequestLineItemsItemProductData>(object({
  description: optional(string()),
  images: optional(array(string())),
  get metadata() { return optional(PostAccountsRequestMetadataObjectSchema) },
  name: string(),
  taxCode: optional(string()),
  unitLabel: optional(string()),
}));