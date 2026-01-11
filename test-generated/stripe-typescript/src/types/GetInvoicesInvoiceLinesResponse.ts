import { TypedSchema, array, boolean, object, string, typed } from '@speakeasy-api/tonic';

import type { LineItem } from './LineItem';
import { LineItemSchema } from './LineItem';
/**
 * InvoiceLinesList
 *
 * 
 */
export interface GetInvoicesInvoiceLinesResponse {
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

export const GetInvoicesInvoiceLinesResponseSchema: TypedSchema<GetInvoicesInvoiceLinesResponse> = typed<GetInvoicesInvoiceLinesResponse>(object({
  data: array(LineItemSchema),
  hasMore: boolean(),
  object: string(),
  url: string(),
}));