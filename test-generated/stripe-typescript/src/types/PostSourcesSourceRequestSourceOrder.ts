import { TypedSchema, array, object, optional, typed } from '@speakeasy-api/tonic';

import type { PostSourcesRequestItemsItem } from './PostSourcesRequestItemsItem';
import { PostSourcesRequestItemsItemSchema } from './PostSourcesRequestItemsItem';
import type { PostSourcesRequestShipping } from './PostSourcesRequestShipping';
import { PostSourcesRequestShippingSchema } from './PostSourcesRequestShipping';
/**
 * order_params
 *
 * Information about the items and shipping associated with the source. Required for transactional credit (for example Klarna) sources before you can charge it.
 */
export interface PostSourcesSourceRequestSourceOrder {
  items?: Array<PostSourcesRequestItemsItem>;
  /**
   * order_shipping
   */
  shipping?: PostSourcesRequestShipping;
}

export const PostSourcesSourceRequestSourceOrderSchema: TypedSchema<PostSourcesSourceRequestSourceOrder> = typed<PostSourcesSourceRequestSourceOrder>(object({
  get items() { return optional(array(PostSourcesRequestItemsItemSchema)) },
  get shipping() { return optional(PostSourcesRequestShippingSchema) },
}));