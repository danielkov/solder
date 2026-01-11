import { TypedSchema, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { BalanceAmountBySourceType } from './BalanceAmountBySourceType';
import { BalanceAmountBySourceTypeSchema } from './BalanceAmountBySourceType';
/**
 * BalanceAmount
 *
 * 
 */
export interface BalanceAmount {
  /**
   * Balance amount.
   */
  amount: number;
  /**
   * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
   */
  currency: string;
  /**
   * BalanceAmountBySourceType
   *
   * 
   */
  sourceTypes?: BalanceAmountBySourceType;
}

export const BalanceAmountSchema: TypedSchema<BalanceAmount> = typed<BalanceAmount>(object({
  amount: number(),
  currency: string(),
  get sourceTypes() { return optional(BalanceAmountBySourceTypeSchema) },
}));