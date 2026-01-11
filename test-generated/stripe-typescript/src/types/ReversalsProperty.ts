import { TypedSchema, array, boolean, object, string, typed } from '@speakeasy-api/tonic';

import type { TransferReversal } from './TransferReversal';
import { TransferReversalSchema } from './TransferReversal';
/**
 * TransferReversalList
 *
 * A list of reversals that have been applied to the transfer.
 */
export interface ReversalsProperty {
  /**
   * Details about each object.
   */
  data: Array<TransferReversal>;
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

export const ReversalsPropertySchema: TypedSchema<ReversalsProperty> = typed<ReversalsProperty>(object({
  data: array(TransferReversalSchema),
  hasMore: boolean(),
  object: string(),
  url: string(),
}));