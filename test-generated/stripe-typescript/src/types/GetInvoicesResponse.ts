import { TypedSchema, array, boolean, object, string, typed } from '@speakeasy-api/tonic';

import type { Invoice } from './Invoice';
import { InvoiceSchema } from './Invoice';
/**
 * InvoicesResourceList
 *
 * 
 */
export interface GetInvoicesResponse {
  data: Array<Invoice>;
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

export const GetInvoicesResponseSchema: TypedSchema<GetInvoicesResponse> = typed<GetInvoicesResponse>(object({
  data: array(InvoiceSchema),
  hasMore: boolean(),
  object: string(),
  url: string(),
}));