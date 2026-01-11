import { TypedSchema, boolean, object, typed } from '@speakeasy-api/tonic';

import type { ConnectEmbeddedFinancialAccountTransactionsFeatures } from './ConnectEmbeddedFinancialAccountTransactionsFeatures';
import { ConnectEmbeddedFinancialAccountTransactionsFeaturesSchema } from './ConnectEmbeddedFinancialAccountTransactionsFeatures';
/**
 * ConnectEmbeddedFinancialAccountTransactionsConfigClaim
 *
 * 
 */
export interface ConnectEmbeddedFinancialAccountTransactionsConfigClaim {
  /**
   * Whether the embedded component is enabled.
   */
  enabled: boolean;
  /**
   * ConnectEmbeddedFinancialAccountTransactionsFeatures
   *
   * 
   */
  features: ConnectEmbeddedFinancialAccountTransactionsFeatures;
}

export const ConnectEmbeddedFinancialAccountTransactionsConfigClaimSchema: TypedSchema<ConnectEmbeddedFinancialAccountTransactionsConfigClaim> = typed<ConnectEmbeddedFinancialAccountTransactionsConfigClaim>(object({
  enabled: boolean(),
  features: ConnectEmbeddedFinancialAccountTransactionsFeaturesSchema,
}));