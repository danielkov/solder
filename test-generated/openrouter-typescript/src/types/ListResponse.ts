import { TypedSchema, array, object, typed } from '@speakeasy-api/tonic';

import type { ListResponseDataItem } from './ListResponseDataItem';
import { ListResponseDataItemSchema } from './ListResponseDataItem';
export interface ListResponse {
  /**
   * List of API keys
   */
  data: Array<ListResponseDataItem>;
}

export const ListResponseSchema: TypedSchema<ListResponse> = typed<ListResponse>(object({
  data: array(ListResponseDataItemSchema),
}));