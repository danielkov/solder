import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { BillingClocksResourceStatusDetailsAdvancingStatusDetails } from './BillingClocksResourceStatusDetailsAdvancingStatusDetails';
import { BillingClocksResourceStatusDetailsAdvancingStatusDetailsSchema } from './BillingClocksResourceStatusDetailsAdvancingStatusDetails';
/**
 * BillingClocksResourceStatusDetailsStatusDetails
 *
 * 
 */
export interface BillingClocksResourceStatusDetailsStatusDetails {
  /**
   * BillingClocksResourceStatusDetailsAdvancingStatusDetails
   *
   * 
   */
  advancing?: BillingClocksResourceStatusDetailsAdvancingStatusDetails;
}

export const BillingClocksResourceStatusDetailsStatusDetailsSchema: TypedSchema<BillingClocksResourceStatusDetailsStatusDetails> = typed<BillingClocksResourceStatusDetailsStatusDetails>(object({
  get advancing() { return optional(BillingClocksResourceStatusDetailsAdvancingStatusDetailsSchema) },
}));