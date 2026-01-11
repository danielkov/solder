import { TypedSchema, boolean, object, optional, typed } from '@speakeasy-api/tonic';

import type { CustomerSessionResourceComponentsResourceCustomerSheetResourceFeatures } from './CustomerSessionResourceComponentsResourceCustomerSheetResourceFeatures';
import { CustomerSessionResourceComponentsResourceCustomerSheetResourceFeaturesSchema } from './CustomerSessionResourceComponentsResourceCustomerSheetResourceFeatures';
/**
 * CustomerSessionResourceComponentsResourceCustomerSheet
 *
 * This hash contains whether the customer sheet is enabled and the features it supports.
 */
export interface CustomerSessionResourceComponentsResourceCustomerSheet {
  /**
   * Whether the customer sheet is enabled.
   */
  enabled: boolean;
  /**
   * This hash defines whether the customer sheet supports certain features.
   */
  features?: CustomerSessionResourceComponentsResourceCustomerSheetResourceFeatures;
}

export const CustomerSessionResourceComponentsResourceCustomerSheetSchema: TypedSchema<CustomerSessionResourceComponentsResourceCustomerSheet> = typed<CustomerSessionResourceComponentsResourceCustomerSheet>(object({
  enabled: boolean(),
  get features() { return optional(CustomerSessionResourceComponentsResourceCustomerSheetResourceFeaturesSchema) },
}));