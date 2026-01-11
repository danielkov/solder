import { TypedSchema, number, object, optional, typed } from '@speakeasy-api/tonic';
/**
 * BalanceAmountBySourceType
 *
 * 
 */
export interface BalanceAmountBySourceType {
  /**
   * Amount coming from [legacy US ACH payments](https://docs.stripe.com/ach-deprecated).
   */
  bankAccount?: number;
  /**
   * Amount coming from most payment methods, including cards as well as [non-legacy bank debits](https://docs.stripe.com/payments/bank-debits).
   */
  card?: number;
  /**
   * Amount coming from [FPX](https://docs.stripe.com/payments/fpx), a Malaysian payment method.
   */
  fpx?: number;
}

export const BalanceAmountBySourceTypeSchema: TypedSchema<BalanceAmountBySourceType> = typed<BalanceAmountBySourceType>(object({
  bankAccount: optional(number()),
  card: optional(number()),
  fpx: optional(number()),
}));