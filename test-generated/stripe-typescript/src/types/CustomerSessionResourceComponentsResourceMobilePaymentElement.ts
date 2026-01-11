import { TypedSchema, boolean, object, optional, typed } from '@speakeasy-api/tonic';

import type { CustomerSessionResourceComponentsResourceMobilePaymentElementResourceFeatures } from './CustomerSessionResourceComponentsResourceMobilePaymentElementResourceFeatures';
import { CustomerSessionResourceComponentsResourceMobilePaymentElementResourceFeaturesSchema } from './CustomerSessionResourceComponentsResourceMobilePaymentElementResourceFeatures';
/**
 * CustomerSessionResourceComponentsResourceMobilePaymentElement
 *
 * This hash contains whether the mobile payment element is enabled and the features it supports.
 */
export interface CustomerSessionResourceComponentsResourceMobilePaymentElement {
  /**
   * Whether the mobile payment element is enabled.
   */
  enabled: boolean;
  /**
   * This hash defines whether the mobile payment element supports certain features.
   */
  features?: CustomerSessionResourceComponentsResourceMobilePaymentElementResourceFeatures;
}

export const CustomerSessionResourceComponentsResourceMobilePaymentElementSchema: TypedSchema<CustomerSessionResourceComponentsResourceMobilePaymentElement> = typed<CustomerSessionResourceComponentsResourceMobilePaymentElement>(object({
  enabled: boolean(),
  get features() { return optional(CustomerSessionResourceComponentsResourceMobilePaymentElementResourceFeaturesSchema) },
}));