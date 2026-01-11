import { TypedSchema, boolean, object, typed } from '@speakeasy-api/tonic';

import type { ConnectEmbeddedPaymentsFeatures } from './ConnectEmbeddedPaymentsFeatures';
import { ConnectEmbeddedPaymentsFeaturesSchema } from './ConnectEmbeddedPaymentsFeatures';
/**
 * ConnectEmbeddedPaymentsConfigClaim
 *
 * 
 */
export interface ConnectEmbeddedPaymentsConfigClaim {
  /**
   * Whether the embedded component is enabled.
   */
  enabled: boolean;
  /**
   * ConnectEmbeddedPaymentsFeatures
   *
   * 
   */
  features: ConnectEmbeddedPaymentsFeatures;
}

export const ConnectEmbeddedPaymentsConfigClaimSchema: TypedSchema<ConnectEmbeddedPaymentsConfigClaim> = typed<ConnectEmbeddedPaymentsConfigClaim>(object({
  enabled: boolean(),
  features: ConnectEmbeddedPaymentsFeaturesSchema,
}));