import { TypedSchema, object, string, typed } from '@speakeasy-api/tonic';
/**
 * AccountUnificationAccountControllerFees
 *
 * 
 */
export interface AccountUnificationAccountControllerFees {
  /**
   * A value indicating the responsible payer of a bundle of Stripe fees for pricing-control eligible products on this account. Learn more about [fee behavior on connected accounts](https://docs.stripe.com/connect/direct-charges-fee-payer-behavior).
   */
  payer: string;
}

export const AccountUnificationAccountControllerFeesSchema: TypedSchema<AccountUnificationAccountControllerFees> = typed<AccountUnificationAccountControllerFees>(object({
  payer: string(),
}));