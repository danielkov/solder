import { TypedSchema, boolean, object, typed } from '@speakeasy-api/tonic';

import type { ConnectEmbeddedPaymentDisputesFeatures } from './ConnectEmbeddedPaymentDisputesFeatures';
import { ConnectEmbeddedPaymentDisputesFeaturesSchema } from './ConnectEmbeddedPaymentDisputesFeatures';
/**
 * ConnectEmbeddedPaymentDisputesConfig
 *
 * 
 */
export interface ConnectEmbeddedPaymentDisputesConfig {
  /**
   * Whether the embedded component is enabled.
   */
  enabled: boolean;
  /**
   * ConnectEmbeddedPaymentDisputesFeatures
   *
   * 
   */
  features: ConnectEmbeddedPaymentDisputesFeatures;
}

export const ConnectEmbeddedPaymentDisputesConfigSchema: TypedSchema<ConnectEmbeddedPaymentDisputesConfig> = typed<ConnectEmbeddedPaymentDisputesConfig>(object({
  enabled: boolean(),
  features: ConnectEmbeddedPaymentDisputesFeaturesSchema,
}));