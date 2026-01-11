import { TypedSchema, number, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * ReserveTransaction
 *
 * 
 */
export interface ReserveTransaction {
  amount: number;
  /**
   * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
   */
  currency: string;
  /**
   * An arbitrary string attached to the object. Often useful for displaying to users.
   */
  description?: string;
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: string;
}

export const ReserveTransactionSchema: TypedSchema<ReserveTransaction> = typed<ReserveTransaction>(object({
  amount: number(),
  currency: string(),
  description: optional(string()),
  id: string(),
  object: string(),
}));