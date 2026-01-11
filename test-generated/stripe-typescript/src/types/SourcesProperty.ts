import { TypedSchema, array, boolean, object, string, typed } from '@speakeasy-api/tonic';

import type { DataItemUnion2 } from './DataItemUnion2';
import { DataItemUnion2Schema } from './DataItemUnion2';
/**
 * ApmsSourcesSourceList
 *
 * The customer's payment sources, if any.
 */
export interface SourcesProperty {
  /**
   * Details about each object.
   */
  data: Array<DataItemUnion2>;
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

export const SourcesPropertySchema: TypedSchema<SourcesProperty> = typed<SourcesProperty>(object({
  data: array(DataItemUnion2Schema),
  hasMore: boolean(),
  object: string(),
  url: string(),
}));