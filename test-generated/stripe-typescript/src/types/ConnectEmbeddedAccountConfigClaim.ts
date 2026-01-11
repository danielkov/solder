import { TypedSchema, boolean, object, typed } from '@speakeasy-api/tonic';

import type { ConnectEmbeddedAccountFeaturesClaim } from './ConnectEmbeddedAccountFeaturesClaim';
import { ConnectEmbeddedAccountFeaturesClaimSchema } from './ConnectEmbeddedAccountFeaturesClaim';
/**
 * ConnectEmbeddedAccountConfigClaim
 *
 * 
 */
export interface ConnectEmbeddedAccountConfigClaim {
  /**
   * Whether the embedded component is enabled.
   */
  enabled: boolean;
  /**
   * ConnectEmbeddedAccountFeaturesClaim
   *
   * 
   */
  features: ConnectEmbeddedAccountFeaturesClaim;
}

export const ConnectEmbeddedAccountConfigClaimSchema: TypedSchema<ConnectEmbeddedAccountConfigClaim> = typed<ConnectEmbeddedAccountConfigClaim>(object({
  enabled: boolean(),
  features: ConnectEmbeddedAccountFeaturesClaimSchema,
}));