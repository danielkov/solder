import { TypedSchema, array, boolean, object, string, typed } from '@speakeasy-api/tonic';

import type { ScheduledQueryRun } from './ScheduledQueryRun';
import { ScheduledQueryRunSchema } from './ScheduledQueryRun';
/**
 * SigmaScheduledQueryRunList
 *
 * 
 */
export interface GetSigmaScheduledQueryRunsResponse {
  data: Array<ScheduledQueryRun>;
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

export const GetSigmaScheduledQueryRunsResponseSchema: TypedSchema<GetSigmaScheduledQueryRunsResponse> = typed<GetSigmaScheduledQueryRunsResponse>(object({
  data: array(ScheduledQueryRunSchema),
  hasMore: boolean(),
  object: string(),
  url: string(),
}));