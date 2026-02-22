import { boolean, object, typed } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';
/**
 * ConnectEmbeddedFinancialAccountTransactionsFeatures
 * 
 * 
 */
export interface ConnectEmbeddedFinancialAccountTransactionsFeatures {
  /**
   * Whether to allow card spend dispute management features.
   */
  cardSpendDisputeManagement: boolean;
}

export const ConnectEmbeddedFinancialAccountTransactionsFeaturesSchema: TypedSchema<ConnectEmbeddedFinancialAccountTransactionsFeatures> = typed<ConnectEmbeddedFinancialAccountTransactionsFeatures>(object({ cardSpendDisputeManagement: boolean() }));
