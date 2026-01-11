import { TypedSchema, number, object, string, typed } from '@speakeasy-api/tonic';
/**
 * PaymentPagesCheckoutSessionCurrencyConversion
 *
 * 
 */
export interface PaymentPagesCheckoutSessionCurrencyConversion {
  /**
   * Total of all items in source currency before discounts or taxes are applied.
   */
  amountSubtotal: number;
  /**
   * Total of all items in source currency after discounts and taxes are applied.
   */
  amountTotal: number;
  /**
   * Exchange rate used to convert source currency amounts to customer currency amounts
   */
  fxRate: string;
  /**
   * Creation currency of the CheckoutSession before localization
   */
  sourceCurrency: string;
}

export const PaymentPagesCheckoutSessionCurrencyConversionSchema: TypedSchema<PaymentPagesCheckoutSessionCurrencyConversion> = typed<PaymentPagesCheckoutSessionCurrencyConversion>(object({
  amountSubtotal: number(),
  amountTotal: number(),
  fxRate: string(),
  sourceCurrency: string(),
}));