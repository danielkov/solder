import { TypedSchema, array, boolean, object, string, typed } from '@speakeasy-api/tonic';

import type { RadarValueListItem } from './RadarValueListItem';
import { RadarValueListItemSchema } from './RadarValueListItem';
/**
 * RadarListListItemList
 *
 * List of items contained within this value list.
 */
export interface ListItemsProperty {
  /**
   * Details about each object.
   */
  data: Array<RadarValueListItem>;
  /**
   * True if this list has another page of items after this one that can be fetched.
   */
  hasMore: boolean;
  /**
   * String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
   */
  object: string;
  /**
   * The URL where this list can be accessed.
   */
  url: string;
}

export const ListItemsPropertySchema: TypedSchema<ListItemsProperty> = typed<ListItemsProperty>(object({
  data: array(RadarValueListItemSchema),
  hasMore: boolean(),
  object: string(),
  url: string(),
}));