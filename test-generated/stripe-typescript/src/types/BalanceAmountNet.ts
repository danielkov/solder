import { TypedSchema, array, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { BalanceAmountBySourceType } from './BalanceAmountBySourceType';
import { BalanceAmountBySourceTypeSchema } from './BalanceAmountBySourceType';
import type { BalanceNetAvailable } from './BalanceNetAvailable';
import { BalanceNetAvailableSchema } from './BalanceNetAvailable';
/**
 * BalanceAmountNet
 *
 * 
 */
export interface BalanceAmountNet {
  /**
   * Balance amount.
   */
  amount: number;
  /**
   * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
   */
  currency: string;
  /**
   * Breakdown of balance by destination.
   */
  netAvailable?: Array<BalanceNetAvailable>;
  /**
   * BalanceAmountBySourceType
   *
   * 
   */
  sourceTypes?: BalanceAmountBySourceType;
}

export const BalanceAmountNetSchema: TypedSchema<BalanceAmountNet> = typed<BalanceAmountNet>(object({
  amount: number(),
  currency: string(),
  get netAvailable() { return optional(array(BalanceNetAvailableSchema)) },
  get sourceTypes() { return optional(BalanceAmountBySourceTypeSchema) },
}));