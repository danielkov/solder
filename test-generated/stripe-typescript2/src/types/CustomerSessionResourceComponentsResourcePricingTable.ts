import { boolean, object, typed } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';
/**
 * CustomerSessionResourceComponentsResourcePricingTable
 * 
 * This hash contains whether the pricing table is enabled.
 */
export interface CustomerSessionResourceComponentsResourcePricingTable {
  /**
   * Whether the pricing table is enabled.
   */
  enabled: boolean;
}

export const CustomerSessionResourceComponentsResourcePricingTableSchema: TypedSchema<CustomerSessionResourceComponentsResourcePricingTable> = typed<CustomerSessionResourceComponentsResourcePricingTable>(object({ enabled: boolean() }));
