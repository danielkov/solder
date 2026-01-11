import { TypedSchema, object, string, typed } from '@speakeasy-api/tonic';
/**
 * AccountUnificationAccountControllerStripeDashboard
 *
 * 
 */
export interface AccountUnificationAccountControllerStripeDashboard {
  /**
   * A value indicating the Stripe dashboard this account has access to independent of the Connect application.
   */
  type: string;
}

export const AccountUnificationAccountControllerStripeDashboardSchema: TypedSchema<AccountUnificationAccountControllerStripeDashboard> = typed<AccountUnificationAccountControllerStripeDashboard>(object({
  type: string(),
}));