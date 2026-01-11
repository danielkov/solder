import { TypedSchema, array, object, typed } from '@speakeasy-api/tonic';

import type { BalanceAmount } from './BalanceAmount';
import { BalanceAmountSchema } from './BalanceAmount';
/**
 * BalanceDetailUngated
 *
 * 
 */
export interface BalanceDetailUngated {
  /**
   * Funds that are available for use.
   */
  available: Array<BalanceAmount>;
  /**
   * Funds that are pending
   */
  pending: Array<BalanceAmount>;
}

export const BalanceDetailUngatedSchema: TypedSchema<BalanceDetailUngated> = typed<BalanceDetailUngated>(object({
  available: array(BalanceAmountSchema),
  pending: array(BalanceAmountSchema),
}));