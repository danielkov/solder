import { TypedSchema, boolean, object, optional, typed } from '@speakeasy-api/tonic';

import type { CustomerSessionResourceComponentsResourcePaymentElementResourceFeatures } from './CustomerSessionResourceComponentsResourcePaymentElementResourceFeatures';
import { CustomerSessionResourceComponentsResourcePaymentElementResourceFeaturesSchema } from './CustomerSessionResourceComponentsResourcePaymentElementResourceFeatures';
/**
 * CustomerSessionResourceComponentsResourcePaymentElement
 *
 * This hash contains whether the Payment Element is enabled and the features it supports.
 */
export interface CustomerSessionResourceComponentsResourcePaymentElement {
  /**
   * Whether the Payment Element is enabled.
   */
  enabled: boolean;
  /**
   * This hash defines whether the Payment Element supports certain features.
   */
  features?: CustomerSessionResourceComponentsResourcePaymentElementResourceFeatures;
}

export const CustomerSessionResourceComponentsResourcePaymentElementSchema: TypedSchema<CustomerSessionResourceComponentsResourcePaymentElement> = typed<CustomerSessionResourceComponentsResourcePaymentElement>(object({
  enabled: boolean(),
  get features() { return optional(CustomerSessionResourceComponentsResourcePaymentElementResourceFeaturesSchema) },
}));