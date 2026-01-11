import { TypedSchema, number, object, string, typed } from '@speakeasy-api/tonic';
/**
 * PaymentsPrimitivesPaymentRecordsResourceAmount
 *
 * A representation of an amount of money, consisting of an amount and a currency.
 */
export interface PaymentsPrimitivesPaymentRecordsResourceAmount {
  /**
   * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
   */
  currency: string;
  /**
   * A positive integer representing the amount in the currency's [minor unit](https://stripe.com/docs/currencies#zero-decimal). For example, `100` can represent 1 USD or 100 JPY.
   */
  value: number;
}

export const PaymentsPrimitivesPaymentRecordsResourceAmountSchema: TypedSchema<PaymentsPrimitivesPaymentRecordsResourceAmount> = typed<PaymentsPrimitivesPaymentRecordsResourceAmount>(object({
  currency: string(),
  value: number(),
}));