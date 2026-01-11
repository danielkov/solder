import { TypedSchema, object, typed } from '@speakeasy-api/tonic';
/**
 * The balances owed to (or by) the account holder, before subtracting any outbound pending transactions or adding any inbound pending transactions.

Each key is a three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase.

Each value is a integer amount. A positive amount indicates money owed to the account holder. A negative amount indicates money owed by the account holder.
 */
export interface CurrentProperty {
}

export const CurrentPropertySchema: TypedSchema<CurrentProperty> = typed<CurrentProperty>(object({
}));