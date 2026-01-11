import { TypedSchema, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { BalanceAmountBySourceType } from './BalanceAmountBySourceType';
import { BalanceAmountBySourceTypeSchema } from './BalanceAmountBySourceType';
/**
 * BalanceNetAvailable
 *
 * 
 */
export interface BalanceNetAvailable {
  /**
   * Net balance amount, subtracting fees from platform-set pricing.
   */
  amount: number;
  /**
   * ID of the external account for this net balance (not expandable).
   */
  destination: string;
  /**
   * BalanceAmountBySourceType
   *
   * 
   */
  sourceTypes?: BalanceAmountBySourceType;
}

export const BalanceNetAvailableSchema: TypedSchema<BalanceNetAvailable> = typed<BalanceNetAvailable>(object({
  amount: number(),
  destination: string(),
  get sourceTypes() { return optional(BalanceAmountBySourceTypeSchema) },
}));