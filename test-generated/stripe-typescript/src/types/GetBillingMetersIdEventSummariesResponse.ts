import { TypedSchema, array, boolean, object, string, typed } from '@speakeasy-api/tonic';

import type { BillingMeterEventSummary } from './BillingMeterEventSummary';
import { BillingMeterEventSummarySchema } from './BillingMeterEventSummary';
/**
 * BillingMeterResourceBillingMeterEventSummaryList
 *
 * 
 */
export interface GetBillingMetersIdEventSummariesResponse {
  data: Array<BillingMeterEventSummary>;
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

export const GetBillingMetersIdEventSummariesResponseSchema: TypedSchema<GetBillingMetersIdEventSummariesResponse> = typed<GetBillingMetersIdEventSummariesResponse>(object({
  data: array(BillingMeterEventSummarySchema),
  hasMore: boolean(),
  object: string(),
  url: string(),
}));