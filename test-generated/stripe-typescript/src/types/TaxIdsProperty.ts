import { TypedSchema, array, boolean, object, string, typed } from '@speakeasy-api/tonic';

import type { TaxId } from './TaxId';
import { TaxIdSchema } from './TaxId';
/**
 * TaxIDsList
 *
 * The customer's tax IDs.
 */
export interface TaxIdsProperty {
  /**
   * Details about each object.
   */
  data: Array<TaxId>;
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

export const TaxIdsPropertySchema: TypedSchema<TaxIdsProperty> = typed<TaxIdsProperty>(object({
  data: array(TaxIdSchema),
  hasMore: boolean(),
  object: string(),
  url: string(),
}));