import { TypedSchema, array, boolean, object, string, typed } from '@speakeasy-api/tonic';

import type { Plan } from './Plan';
import { PlanSchema } from './Plan';
/**
 * PlanList
 *
 * 
 */
export interface GetPlansResponse {
  /**
   * Details about each object.
   */
  data: Array<Plan>;
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

export const GetPlansResponseSchema: TypedSchema<GetPlansResponse> = typed<GetPlansResponse>(object({
  data: array(PlanSchema),
  hasMore: boolean(),
  object: string(),
  url: string(),
}));