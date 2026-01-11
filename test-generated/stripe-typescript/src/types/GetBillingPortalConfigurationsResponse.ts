import { TypedSchema, array, boolean, object, string, typed } from '@speakeasy-api/tonic';

import type { BillingPortalConfiguration } from './BillingPortalConfiguration';
import { BillingPortalConfigurationSchema } from './BillingPortalConfiguration';
/**
 * PortalPublicResourceConfigurationList
 *
 * 
 */
export interface GetBillingPortalConfigurationsResponse {
  data: Array<BillingPortalConfiguration>;
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

export const GetBillingPortalConfigurationsResponseSchema: TypedSchema<GetBillingPortalConfigurationsResponse> = typed<GetBillingPortalConfigurationsResponse>(object({
  data: array(BillingPortalConfigurationSchema),
  hasMore: boolean(),
  object: string(),
  url: string(),
}));