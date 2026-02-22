import { array, object, typed } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';

import type { ActivityItem } from './ActivityItem';
import { ActivityItemSchema } from './ActivityItem';
export interface GetUserActivityResponse {
  /**
   * List of activity items
   */
  data: Array<ActivityItem>;
}

export const GetUserActivityResponseSchema: TypedSchema<GetUserActivityResponse> = typed<GetUserActivityResponse>(object({ data: array(ActivityItemSchema) }));
