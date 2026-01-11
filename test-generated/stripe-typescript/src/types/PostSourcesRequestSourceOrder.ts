import { TypedSchema, array, object, optional, typed } from '@speakeasy-api/tonic';

import type { PostSourcesRequestItemsItem } from './PostSourcesRequestItemsItem';
import { PostSourcesRequestItemsItemSchema } from './PostSourcesRequestItemsItem';
import type { PostSourcesRequestShipping } from './PostSourcesRequestShipping';
import { PostSourcesRequestShippingSchema } from './PostSourcesRequestShipping';
/**
 * shallow_order_specs
 *
 * Information about the items and shipping associated with the source. Required for transactional credit (for example Klarna) sources before you can charge it.
 */
export interface PostSourcesRequestSourceOrder {
  items?: Array<PostSourcesRequestItemsItem>;
  /**
   * order_shipping
   */
  shipping?: PostSourcesRequestShipping;
}

export const PostSourcesRequestSourceOrderSchema: TypedSchema<PostSourcesRequestSourceOrder> = typed<PostSourcesRequestSourceOrder>(object({
  get items() { return optional(array(PostSourcesRequestItemsItemSchema)) },
  get shipping() { return optional(PostSourcesRequestShippingSchema) },
}));