import { TypedSchema, array, boolean, object, string, typed } from '@speakeasy-api/tonic';

import type { LineItem } from './LineItem';
import { LineItemSchema } from './LineItem';
/**
 * InvoiceLinesList
 *
 * The individual line items that make up the invoice. `lines` is sorted as follows: (1) pending invoice items (including prorations) in reverse chronological order, (2) subscription items in reverse chronological order, and (3) invoice items added after invoice creation in chronological order.
 */
export interface LinesProperty2 {
  /**
   * Details about each object.
   */
  data: Array<LineItem>;
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

export const LinesProperty2Schema: TypedSchema<LinesProperty2> = typed<LinesProperty2>(object({
  data: array(LineItemSchema),
  hasMore: boolean(),
  object: string(),
  url: string(),
}));