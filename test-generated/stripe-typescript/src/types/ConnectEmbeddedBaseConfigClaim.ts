import { TypedSchema, boolean, object, typed } from '@speakeasy-api/tonic';

import type { ConnectEmbeddedBaseFeatures } from './ConnectEmbeddedBaseFeatures';
import { ConnectEmbeddedBaseFeaturesSchema } from './ConnectEmbeddedBaseFeatures';
/**
 * ConnectEmbeddedBaseConfigClaim
 *
 * 
 */
export interface ConnectEmbeddedBaseConfigClaim {
  /**
   * Whether the embedded component is enabled.
   */
  enabled: boolean;
  /**
   * ConnectEmbeddedBaseFeatures
   *
   * 
   */
  features: ConnectEmbeddedBaseFeatures;
}

export const ConnectEmbeddedBaseConfigClaimSchema: TypedSchema<ConnectEmbeddedBaseConfigClaim> = typed<ConnectEmbeddedBaseConfigClaim>(object({
  enabled: boolean(),
  features: ConnectEmbeddedBaseFeaturesSchema,
}));