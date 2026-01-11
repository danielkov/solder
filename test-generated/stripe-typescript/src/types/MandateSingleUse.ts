import { TypedSchema, number, object, string, typed } from '@speakeasy-api/tonic';
/**
 * mandate_single_use
 *
 * 
 */
export interface MandateSingleUse {
  /**
   * The amount of the payment on a single use mandate.
   */
  amount: number;
  /**
   * The currency of the payment on a single use mandate.
   */
  currency: string;
}

export const MandateSingleUseSchema: TypedSchema<MandateSingleUse> = typed<MandateSingleUse>(object({
  amount: number(),
  currency: string(),
}));