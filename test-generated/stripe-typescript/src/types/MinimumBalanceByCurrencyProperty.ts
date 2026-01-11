import { TypedSchema, object, typed } from '@speakeasy-api/tonic';
/**
 * The minimum balance amount to retain per currency after automatic payouts. Only funds that exceed these amounts are paid out. Learn more about the [minimum balances for automatic payouts](/payouts/minimum-balances-for-automatic-payouts).
 */
export interface MinimumBalanceByCurrencyProperty {
}

export const MinimumBalanceByCurrencyPropertySchema: TypedSchema<MinimumBalanceByCurrencyProperty> = typed<MinimumBalanceByCurrencyProperty>(object({
}));