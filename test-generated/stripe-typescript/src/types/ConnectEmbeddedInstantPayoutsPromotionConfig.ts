import { TypedSchema, boolean, object, typed } from '@speakeasy-api/tonic';

import type { ConnectEmbeddedInstantPayoutsPromotionFeatures } from './ConnectEmbeddedInstantPayoutsPromotionFeatures';
import { ConnectEmbeddedInstantPayoutsPromotionFeaturesSchema } from './ConnectEmbeddedInstantPayoutsPromotionFeatures';
/**
 * ConnectEmbeddedInstantPayoutsPromotionConfig
 *
 * 
 */
export interface ConnectEmbeddedInstantPayoutsPromotionConfig {
  /**
   * Whether the embedded component is enabled.
   */
  enabled: boolean;
  /**
   * ConnectEmbeddedInstantPayoutsPromotionFeatures
   *
   * 
   */
  features: ConnectEmbeddedInstantPayoutsPromotionFeatures;
}

export const ConnectEmbeddedInstantPayoutsPromotionConfigSchema: TypedSchema<ConnectEmbeddedInstantPayoutsPromotionConfig> = typed<ConnectEmbeddedInstantPayoutsPromotionConfig>(object({
  enabled: boolean(),
  features: ConnectEmbeddedInstantPayoutsPromotionFeaturesSchema,
}));