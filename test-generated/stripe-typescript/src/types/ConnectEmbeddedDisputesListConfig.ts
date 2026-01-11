import { TypedSchema, boolean, object, typed } from '@speakeasy-api/tonic';

import type { ConnectEmbeddedDisputesListFeatures } from './ConnectEmbeddedDisputesListFeatures';
import { ConnectEmbeddedDisputesListFeaturesSchema } from './ConnectEmbeddedDisputesListFeatures';
/**
 * ConnectEmbeddedDisputesListConfig
 *
 * 
 */
export interface ConnectEmbeddedDisputesListConfig {
  /**
   * Whether the embedded component is enabled.
   */
  enabled: boolean;
  /**
   * ConnectEmbeddedDisputesListFeatures
   *
   * 
   */
  features: ConnectEmbeddedDisputesListFeatures;
}

export const ConnectEmbeddedDisputesListConfigSchema: TypedSchema<ConnectEmbeddedDisputesListConfig> = typed<ConnectEmbeddedDisputesListConfig>(object({
  enabled: boolean(),
  features: ConnectEmbeddedDisputesListFeaturesSchema,
}));