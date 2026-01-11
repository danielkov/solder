import { TypedSchema, array, boolean, object, string, typed } from '@speakeasy-api/tonic';

import type { RadarValueList } from './RadarValueList';
import { RadarValueListSchema } from './RadarValueList';
/**
 * RadarListListList
 *
 * 
 */
export interface GetRadarValueListsResponse {
  data: Array<RadarValueList>;
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

export const GetRadarValueListsResponseSchema: TypedSchema<GetRadarValueListsResponse> = typed<GetRadarValueListsResponse>(object({
  data: array(RadarValueListSchema),
  hasMore: boolean(),
  object: string(),
  url: string(),
}));