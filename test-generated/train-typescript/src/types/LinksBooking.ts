import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * The link to the booking resource.
 */
export interface LinksBooking {
  booking?: string;
}

export const LinksBookingSchema: TypedSchema<LinksBooking> = typed<LinksBooking>(object({
  booking: optional(string()),
}));