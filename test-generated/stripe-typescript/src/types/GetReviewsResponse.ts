import { TypedSchema, array, boolean, object, string, typed } from '@speakeasy-api/tonic';

import type { Review } from './Review';
import { ReviewSchema } from './Review';
/**
 * RadarReviewList
 *
 * 
 */
export interface GetReviewsResponse {
  data: Array<Review>;
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

export const GetReviewsResponseSchema: TypedSchema<GetReviewsResponse> = typed<GetReviewsResponse>(object({
  data: array(ReviewSchema),
  hasMore: boolean(),
  object: string(),
  url: string(),
}));