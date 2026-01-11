import { TypedSchema, array, object, typed } from '@speakeasy-api/tonic';

import type { PublicEndpoint } from './PublicEndpoint';
import { PublicEndpointSchema } from './PublicEndpoint';
export interface ListEndpointsZdrResponse {
  data: Array<PublicEndpoint>;
}

export const ListEndpointsZdrResponseSchema: TypedSchema<ListEndpointsZdrResponse> = typed<ListEndpointsZdrResponse>(object({
  data: array(PublicEndpointSchema),
}));