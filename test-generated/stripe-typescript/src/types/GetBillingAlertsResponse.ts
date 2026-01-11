import { TypedSchema, array, boolean, object, string, typed } from '@speakeasy-api/tonic';

import type { BillingAlert } from './BillingAlert';
import { BillingAlertSchema } from './BillingAlert';
/**
 * ThresholdsResourceAlertList
 *
 * 
 */
export interface GetBillingAlertsResponse {
  data: Array<BillingAlert>;
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

export const GetBillingAlertsResponseSchema: TypedSchema<GetBillingAlertsResponse> = typed<GetBillingAlertsResponse>(object({
  data: array(BillingAlertSchema),
  hasMore: boolean(),
  object: string(),
  url: string(),
}));