import { TypedSchema, number, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * Fee
 *
 * 
 */
export interface Fee {
  /**
   * Amount of the fee, in cents.
   */
  amount: number;
  /**
   * ID of the Connect application that earned the fee.
   */
  application?: string;
  /**
   * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
   */
  currency: string;
  /**
   * An arbitrary string attached to the object. Often useful for displaying to users.
   */
  description?: string;
  /**
   * Type of the fee, one of: `application_fee`, `payment_method_passthrough_fee`, `stripe_fee` or `tax`.
   */
  type: string;
}

export const FeeSchema: TypedSchema<Fee> = typed<Fee>(object({
  amount: number(),
  application: optional(string()),
  currency: string(),
  description: optional(string()),
  type: string(),
}));