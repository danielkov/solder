import { TypedSchema, array, boolean, object, string, typed } from '@speakeasy-api/tonic';

import type { SourceTransaction } from './SourceTransaction';
import { SourceTransactionSchema } from './SourceTransaction';
/**
 * ApmsSourcesSourceTransactionList
 *
 * 
 */
export interface GetSourcesSourceSourceTransactionsResponse {
  data: Array<SourceTransaction>;
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

export const GetSourcesSourceSourceTransactionsResponseSchema: TypedSchema<GetSourcesSourceSourceTransactionsResponse> = typed<GetSourcesSourceSourceTransactionsResponse>(object({
  data: array(SourceTransactionSchema),
  hasMore: boolean(),
  object: string(),
  url: string(),
}));