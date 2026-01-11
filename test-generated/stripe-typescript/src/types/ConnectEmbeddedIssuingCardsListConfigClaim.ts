import { TypedSchema, boolean, object, typed } from '@speakeasy-api/tonic';

import type { ConnectEmbeddedIssuingCardsListFeatures } from './ConnectEmbeddedIssuingCardsListFeatures';
import { ConnectEmbeddedIssuingCardsListFeaturesSchema } from './ConnectEmbeddedIssuingCardsListFeatures';
/**
 * ConnectEmbeddedIssuingCardsListConfigClaim
 *
 * 
 */
export interface ConnectEmbeddedIssuingCardsListConfigClaim {
  /**
   * Whether the embedded component is enabled.
   */
  enabled: boolean;
  /**
   * ConnectEmbeddedIssuingCardsListFeatures
   *
   * 
   */
  features: ConnectEmbeddedIssuingCardsListFeatures;
}

export const ConnectEmbeddedIssuingCardsListConfigClaimSchema: TypedSchema<ConnectEmbeddedIssuingCardsListConfigClaim> = typed<ConnectEmbeddedIssuingCardsListConfigClaim>(object({
  enabled: boolean(),
  features: ConnectEmbeddedIssuingCardsListFeaturesSchema,
}));