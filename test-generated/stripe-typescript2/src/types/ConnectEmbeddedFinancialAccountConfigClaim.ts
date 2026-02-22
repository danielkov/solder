import { boolean, object, typed } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';

import type { ConnectEmbeddedFinancialAccountFeatures } from './ConnectEmbeddedFinancialAccountFeatures';
import { ConnectEmbeddedFinancialAccountFeaturesSchema } from './ConnectEmbeddedFinancialAccountFeatures';
/**
 * ConnectEmbeddedFinancialAccountConfigClaim
 * 
 * 
 */
export interface ConnectEmbeddedFinancialAccountConfigClaim {
  /**
   * Whether the embedded component is enabled.
   */
  enabled: boolean;
  /**
   * ConnectEmbeddedFinancialAccountFeatures
   * 
   * 
   */
  features: ConnectEmbeddedFinancialAccountFeatures;
}

export const ConnectEmbeddedFinancialAccountConfigClaimSchema: TypedSchema<ConnectEmbeddedFinancialAccountConfigClaim> = typed<ConnectEmbeddedFinancialAccountConfigClaim>(object({
  enabled: boolean(),
  features: ConnectEmbeddedFinancialAccountFeaturesSchema,
}));
