import { TypedSchema, object, string, typed } from '@speakeasy-api/tonic';
/**
 * AccountUnificationAccountControllerLosses
 *
 * 
 */
export interface AccountUnificationAccountControllerLosses {
  /**
   * A value indicating who is liable when this account can't pay back negative balances from payments.
   */
  payments: string;
}

export const AccountUnificationAccountControllerLossesSchema: TypedSchema<AccountUnificationAccountControllerLosses> = typed<AccountUnificationAccountControllerLosses>(object({
  payments: string(),
}));