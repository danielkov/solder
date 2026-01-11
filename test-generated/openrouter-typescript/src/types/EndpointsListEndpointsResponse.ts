import { TypedSchema, object, typed } from '@speakeasy-api/tonic';

import type { ListEndpointsResponse } from './ListEndpointsResponse';
import { ListEndpointsResponseSchema } from './ListEndpointsResponse';
export interface EndpointsListEndpointsResponse {
  /**
   * List of available endpoints for a model
   */
  data: ListEndpointsResponse;
}

export const EndpointsListEndpointsResponseSchema: TypedSchema<EndpointsListEndpointsResponse> = typed<EndpointsListEndpointsResponse>(object({
  data: ListEndpointsResponseSchema,
}));