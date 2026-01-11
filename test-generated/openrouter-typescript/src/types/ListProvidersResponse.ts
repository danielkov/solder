import { TypedSchema, array, object, typed } from '@speakeasy-api/tonic';

import type { ListProvidersResponseDataItem } from './ListProvidersResponseDataItem';
import { ListProvidersResponseDataItemSchema } from './ListProvidersResponseDataItem';
export interface ListProvidersResponse {
  data: Array<ListProvidersResponseDataItem>;
}

export const ListProvidersResponseSchema: TypedSchema<ListProvidersResponse> = typed<ListProvidersResponse>(object({
  data: array(ListProvidersResponseDataItemSchema),
}));