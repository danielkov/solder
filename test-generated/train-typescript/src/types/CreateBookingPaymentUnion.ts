import { TypedSchema, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { LinksBooking } from './LinksBooking';
import { LinksBookingSchema } from './LinksBooking';
import type { SourceUnion } from './SourceUnion';
import { SourceUnionSchema } from './SourceUnion';
export interface CreateBookingPaymentUnion {
  /**
   * Amount intended to be collected by this payment. A positive decimal figure describing the amount to be collected.
   */
  amount?: number;
  /**
   * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase.
   */
  currency?: string;
  /**
   * Unique identifier for the payment. This will be a unique identifier for the payment, and is used to reference the payment in other objects.
   */
  id?: string;
  /**
   * The link to the booking resource.
   */
  links?: LinksBooking;
  /**
   * The payment source to take the payment from. This can be a card or a bank account. Some of these properties will be hidden on read to protect PII leaking.
   */
  source?: SourceUnion;
  /**
   * The status of the payment, one of `pending`, `succeeded`, or `failed`.
   */
  status?: string;
}

export const CreateBookingPaymentUnionSchema: TypedSchema<CreateBookingPaymentUnion> = typed<CreateBookingPaymentUnion>(object({
  amount: optional(number()),
  currency: optional(string()),
  id: optional(string()),
  get links() { return optional(LinksBookingSchema) },
  get source() { return optional(SourceUnionSchema) },
  status: optional(string()),
}));