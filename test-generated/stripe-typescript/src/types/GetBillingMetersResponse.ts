import { TypedSchema, array, boolean, object, string, typed } from '@speakeasy-api/tonic';

import type { BillingMeter } from './BillingMeter';
import { BillingMeterSchema } from './BillingMeter';
/**
 * BillingMeterResourceBillingMeterList
 *
 * 
 */
export interface GetBillingMetersResponse {
  data: Array<BillingMeter>;
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

export const GetBillingMetersResponseSchema: TypedSchema<GetBillingMetersResponse> = typed<GetBillingMetersResponse>(object({
  data: array(BillingMeterSchema),
  hasMore: boolean(),
  object: string(),
  url: string(),
}));