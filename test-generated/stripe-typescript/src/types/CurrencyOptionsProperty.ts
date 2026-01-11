import { TypedSchema, object, typed } from '@speakeasy-api/tonic';
/**
 * Coupons defined in each available currency option. Each key must be a three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html) and a [supported currency](https://stripe.com/docs/currencies).
 */
export interface CurrencyOptionsProperty {
}

export const CurrencyOptionsPropertySchema: TypedSchema<CurrencyOptionsProperty> = typed<CurrencyOptionsProperty>(object({
}));