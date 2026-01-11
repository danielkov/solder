import { TypedSchema, boolean, object, typed } from '@speakeasy-api/tonic';
/**
 * AccountDeclineChargeOn
 *
 * 
 */
export interface AccountDeclineChargeOn {
  /**
   * Whether Stripe automatically declines charges with an incorrect ZIP or postal code. This setting only applies when a ZIP or postal code is provided and they fail bank verification.
   */
  avsFailure: boolean;
  /**
   * Whether Stripe automatically declines charges with an incorrect CVC. This setting only applies when a CVC is provided and it fails bank verification.
   */
  cvcFailure: boolean;
}

export const AccountDeclineChargeOnSchema: TypedSchema<AccountDeclineChargeOn> = typed<AccountDeclineChargeOn>(object({
  avsFailure: boolean(),
  cvcFailure: boolean(),
}));