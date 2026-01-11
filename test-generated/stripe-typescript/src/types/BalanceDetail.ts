import { TypedSchema, array, object, typed } from '@speakeasy-api/tonic';

import type { BalanceAmount } from './BalanceAmount';
import { BalanceAmountSchema } from './BalanceAmount';
/**
 * BalanceDetail
 *
 * 
 */
export interface BalanceDetail {
  /**
   * Funds that are available for use.
   */
  available: Array<BalanceAmount>;
}

export const BalanceDetailSchema: TypedSchema<BalanceDetail> = typed<BalanceDetail>(object({
  available: array(BalanceAmountSchema),
}));