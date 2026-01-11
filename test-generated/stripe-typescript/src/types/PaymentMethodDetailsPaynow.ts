import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * payment_method_details_paynow
 *
 * 
 */
export interface PaymentMethodDetailsPaynow {
  /**
   * ID of the [location](https://stripe.com/docs/api/terminal/locations) that this transaction's reader is assigned to.
   */
  location?: string;
  /**
   * ID of the [reader](https://stripe.com/docs/api/terminal/readers) this transaction was made on.
   */
  reader?: string;
  /**
   * Reference number associated with this PayNow payment
   */
  reference?: string;
}

export const PaymentMethodDetailsPaynowSchema: TypedSchema<PaymentMethodDetailsPaynow> = typed<PaymentMethodDetailsPaynow>(object({
  location: optional(string()),
  reader: optional(string()),
  reference: optional(string()),
}));