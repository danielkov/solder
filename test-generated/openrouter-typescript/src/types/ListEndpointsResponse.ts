import { TypedSchema, array, number, object, string, typed } from '@speakeasy-api/tonic';

import type { ArchitectureUnion } from './ArchitectureUnion';
import { ArchitectureUnionSchema } from './ArchitectureUnion';
import type { PublicEndpoint } from './PublicEndpoint';
import { PublicEndpointSchema } from './PublicEndpoint';
/**
 * List of available endpoints for a model
 */
export interface ListEndpointsResponse {
  architecture: ArchitectureUnion;
  /**
   * Unix timestamp of when the model was created
   */
  created: number;
  /**
   * Description of the model
   */
  description: string;
  /**
   * List of available endpoints for this model
   */
  endpoints: Array<PublicEndpoint>;
  /**
   * Unique identifier for the model
   */
  id: string;
  /**
   * Display name of the model
   */
  name: string;
}

export const ListEndpointsResponseSchema: TypedSchema<ListEndpointsResponse> = typed<ListEndpointsResponse>(object({
  architecture: ArchitectureUnionSchema,
  created: number(),
  description: string(),
  endpoints: array(PublicEndpointSchema),
  id: string(),
  name: string(),
}));