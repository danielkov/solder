import { TypedSchema, array, boolean, object, string, typed } from '@speakeasy-api/tonic';

import type { RadarEarlyFraudWarning } from './RadarEarlyFraudWarning';
import { RadarEarlyFraudWarningSchema } from './RadarEarlyFraudWarning';
/**
 * RadarEarlyFraudWarningList
 *
 * 
 */
export interface GetRadarEarlyFraudWarningsResponse {
  data: Array<RadarEarlyFraudWarning>;
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

export const GetRadarEarlyFraudWarningsResponseSchema: TypedSchema<GetRadarEarlyFraudWarningsResponse> = typed<GetRadarEarlyFraudWarningsResponse>(object({
  data: array(RadarEarlyFraudWarningSchema),
  hasMore: boolean(),
  object: string(),
  url: string(),
}));