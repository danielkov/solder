import { TypedSchema, array, boolean, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { Invoice } from './Invoice';
import { InvoiceSchema } from './Invoice';
/**
 * SearchResult
 *
 * 
 */
export interface GetInvoicesSearchResponse {
  data: Array<Invoice>;
  hasMore: boolean;
  nextPage?: string;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: string;
  /**
   * The total number of objects that match the query, only accurate up to 10,000.
   */
  totalCount?: number;
  url: string;
}

export const GetInvoicesSearchResponseSchema: TypedSchema<GetInvoicesSearchResponse> = typed<GetInvoicesSearchResponse>(object({
  data: array(InvoiceSchema),
  hasMore: boolean(),
  nextPage: optional(string()),
  object: string(),
  totalCount: optional(number()),
  url: string(),
}));