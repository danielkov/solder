import { TypedSchema, array, boolean, object, string, typed } from '@speakeasy-api/tonic';

import type { Refund } from './Refund';
import { RefundSchema } from './Refund';
/**
 * RefundList
 *
 * A list of refunds that have been applied to the charge.
 */
export interface RefundsProperty2 {
  /**
   * Details about each object.
   */
  data: Array<Refund>;
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

export const RefundsProperty2Schema: TypedSchema<RefundsProperty2> = typed<RefundsProperty2>(object({
  data: array(RefundSchema),
  hasMore: boolean(),
  object: string(),
  url: string(),
}));