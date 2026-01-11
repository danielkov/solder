import { TypedSchema, boolean, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostAccountsRequestMetadataObject } from './PostAccountsRequestMetadataObject';
import { PostAccountsRequestMetadataObjectSchema } from './PostAccountsRequestMetadataObject';
/**
 * inline_product_params
 *
 * These fields can be used to create a new product that this price will belong to.
 */
export interface PostPricesRequestProductData {
  active?: boolean;
  id?: string;
  metadata?: PostAccountsRequestMetadataObject;
  name: string;
  statementDescriptor?: string;
  taxCode?: string;
  unitLabel?: string;
}

export const PostPricesRequestProductDataSchema: TypedSchema<PostPricesRequestProductData> = typed<PostPricesRequestProductData>(object({
  active: optional(boolean()),
  id: optional(string()),
  get metadata() { return optional(PostAccountsRequestMetadataObjectSchema) },
  name: string(),
  statementDescriptor: optional(string()),
  taxCode: optional(string()),
  unitLabel: optional(string()),
}));