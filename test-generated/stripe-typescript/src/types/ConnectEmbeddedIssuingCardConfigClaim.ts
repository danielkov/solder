import { TypedSchema, boolean, object, typed } from '@speakeasy-api/tonic';

import type { ConnectEmbeddedIssuingCardFeatures } from './ConnectEmbeddedIssuingCardFeatures';
import { ConnectEmbeddedIssuingCardFeaturesSchema } from './ConnectEmbeddedIssuingCardFeatures';
/**
 * ConnectEmbeddedIssuingCardConfigClaim
 *
 * 
 */
export interface ConnectEmbeddedIssuingCardConfigClaim {
  /**
   * Whether the embedded component is enabled.
   */
  enabled: boolean;
  /**
   * ConnectEmbeddedIssuingCardFeatures
   *
   * 
   */
  features: ConnectEmbeddedIssuingCardFeatures;
}

export const ConnectEmbeddedIssuingCardConfigClaimSchema: TypedSchema<ConnectEmbeddedIssuingCardConfigClaim> = typed<ConnectEmbeddedIssuingCardConfigClaim>(object({
  enabled: boolean(),
  features: ConnectEmbeddedIssuingCardFeaturesSchema,
}));