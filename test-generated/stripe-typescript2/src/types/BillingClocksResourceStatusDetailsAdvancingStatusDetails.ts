import { number, object, typed } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';
/**
 * BillingClocksResourceStatusDetailsAdvancingStatusDetails
 * 
 * 
 */
export interface BillingClocksResourceStatusDetailsAdvancingStatusDetails {
  /**
   * The `frozen_time` that the Test Clock is advancing towards.
   */
  targetFrozenTime: number;
}

export const BillingClocksResourceStatusDetailsAdvancingStatusDetailsSchema: TypedSchema<BillingClocksResourceStatusDetailsAdvancingStatusDetails> = typed<BillingClocksResourceStatusDetailsAdvancingStatusDetails>(object({ targetFrozenTime: number() }));
