import { TypedSchema, boolean, number, object, string, typed } from '@speakeasy-api/tonic';

import type { ListItemsProperty } from './ListItemsProperty';
import { ListItemsPropertySchema } from './ListItemsProperty';
import type { MetadataProperty } from './MetadataProperty';
import { MetadataPropertySchema } from './MetadataProperty';
/**
 * RadarListList
 *
 * Value lists allow you to group values together which can then be referenced in rules.

Related guide: [Default Stripe lists](https://stripe.com/docs/radar/lists#managing-list-items)
 */
export interface RadarValueList {
  /**
   * The name of the value list for use in rules.
   */
  alias: string;
  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;
  /**
   * The name or email address of the user who created this value list.
   */
  createdBy: string;
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * The type of items in the value list. One of `card_fingerprint`, `card_bin`, `email`, `ip_address`, `country`, `string`, `case_sensitive_string`, `customer_id`, `sepa_debit_fingerprint`, or `us_bank_account_fingerprint`.
   */
  itemType: string;
  /**
   * RadarListListItemList
   *
   * List of items contained within this value list.
   */
  listItems: ListItemsProperty;
  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
   */
  metadata: MetadataProperty;
  /**
   * The name of the value list.
   */
  name: string;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: string;
}

export const RadarValueListSchema: TypedSchema<RadarValueList> = typed<RadarValueList>(object({
  alias: string(),
  created: number(),
  createdBy: string(),
  id: string(),
  itemType: string(),
  listItems: ListItemsPropertySchema,
  livemode: boolean(),
  metadata: MetadataPropertySchema,
  name: string(),
  object: string(),
}));