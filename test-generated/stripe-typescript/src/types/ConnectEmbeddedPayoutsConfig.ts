import { TypedSchema, boolean, object, typed } from '@speakeasy-api/tonic';

import type { ConnectEmbeddedPayoutsFeatures } from './ConnectEmbeddedPayoutsFeatures';
import { ConnectEmbeddedPayoutsFeaturesSchema } from './ConnectEmbeddedPayoutsFeatures';
/**
 * ConnectEmbeddedPayoutsConfig
 *
 * 
 */
export interface ConnectEmbeddedPayoutsConfig {
  /**
   * Whether the embedded component is enabled.
   */
  enabled: boolean;
  /**
   * ConnectEmbeddedPayoutsFeatures
   *
   * 
   */
  features: ConnectEmbeddedPayoutsFeatures;
}

export const ConnectEmbeddedPayoutsConfigSchema: TypedSchema<ConnectEmbeddedPayoutsConfig> = typed<ConnectEmbeddedPayoutsConfig>(object({
  enabled: boolean(),
  features: ConnectEmbeddedPayoutsFeaturesSchema,
}));