// Generated types from OpenAPI specification

/**
 * A booking for a train trip.
 */
export interface Booking {
  /**
   * Indicates whether the passenger has a bicycle.
   */
  hasBicycle?: boolean;
  /**
   * Indicates whether the passenger has a dog.
   */
  hasDog?: boolean;
  /**
   * Unique identifier for the booking
   */
  id?: string;
  /**
   * Name of the passenger
   */
  passengerName?: string;
  /**
   * Identifier of the booked trip
   */
  tripId?: string;
}

/**
 * A payment for a booking.
 */
export interface BookingPayment {
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
   * The payment source to take the payment from. This can be a card or a bank account. Some of these properties will be hidden on read to protect PII leaking.
   */
  source?: SourceUnion;
  /**
   * The status of the payment, one of `pending`, `succeeded`, or `failed`.
   */
  status?: string;
}

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

export interface CreateBookingUnion {
  /**
   * Indicates whether the passenger has a bicycle.
   */
  hasBicycle?: boolean;
  /**
   * Indicates whether the passenger has a dog.
   */
  hasDog?: boolean;
  /**
   * Unique identifier for the booking
   */
  id?: string;
  /**
   * The link to the current resource.
   */
  links?: LinksSelf;
  /**
   * Name of the passenger
   */
  passengerName?: string;
  /**
   * Identifier of the booked trip
   */
  tripId?: string;
}

export interface GetBookingsUnion {
  /**
   * The wrapper for a collection is an array of objects.
   */
  data?: Array<Booking>;
  /**
   * A set of hypermedia links which serve as controls for the client.
   */
  links?: GetBookingsUnionUnion;
}

export interface GetBookingsUnionUnion {
  next?: string;
  prev?: string;
  self?: string;
}

export interface GetStationsUnion {
  /**
   * The wrapper for a collection is an array of objects.
   */
  data?: Array<Station>;
  /**
   * A set of hypermedia links which serve as controls for the client.
   */
  links?: GetBookingsUnionUnion;
}

export interface GetTripsUnion {
  /**
   * The wrapper for a collection is an array of objects.
   */
  data?: Array<GetTripsUnionUnion>;
  /**
   * A set of hypermedia links which serve as controls for the client.
   */
  links?: GetBookingsUnionUnion;
}

export interface GetTripsUnionUnion {
  /**
   * The date and time when the trip arrives
   */
  arrivalTime?: string;
  /**
   * Indicates whether bicycles are allowed on the trip
   */
  bicyclesAllowed?: boolean;
  /**
   * The date and time when the trip departs
   */
  departureTime?: string;
  /**
   * The destination station of the trip
   */
  destination?: string;
  /**
   * Indicates whether dogs are allowed on the trip
   */
  dogsAllowed?: boolean;
  /**
   * Unique identifier for the trip
   */
  id?: string;
  /**
   * The name of the operator of the trip
   */
  operator?: string;
  /**
   * The starting station of the trip
   */
  origin?: string;
  /**
   * The cost of the trip
   */
  price?: number;
  self?: string;
}

/**
 * The link to the booking resource.
 */
export interface LinksBooking {
  booking?: string;
}

/**
 * The link to the destination station resource.
 */
export interface LinksDestination {
  self?: string;
}

/**
 * The link to the origin station resource.
 */
export interface LinksOrigin {
  self?: string;
}

/**
 * Links to the next and previous pages of a paginated response.
 */
export interface LinksPagination {
  next?: string;
  prev?: string;
}

/**
 * The link to the current resource.
 */
export interface LinksSelf {
  self?: string;
}

/**
 * A problem detail object as defined in RFC 7807.
 */
export interface Problem {
  /**
   * A human-readable explanation specific to this occurrence of the problem
   */
  detail?: string;
  /**
   * A URI reference that identifies the specific occurrence of the problem
   */
  instance?: string;
  /**
   * The HTTP status code
   */
  status?: number;
  /**
   * A short, human-readable summary of the problem type
   */
  title?: string;
  /**
   * A URI reference that identifies the problem type
   */
  type?: string;
}

export type SourceUnion = SourceUnionObject | SourceUnionObject2;

/**
 * Card
 *
 * A card (debit or credit) to take payment from.
 */
export interface SourceUnionObject {
  addressCity?: string;
  addressCountry: string;
  addressLine1?: string;
  addressLine2?: string;
  addressPostCode?: string;
  /**
   * Card security code, 3 or 4 digits usually found on the back of the card.
   */
  cvc: string;
  /**
   * Two-digit number representing the card's expiration month.
   */
  expMonth: number;
  /**
   * Four-digit number representing the card's expiration year.
   */
  expYear: number;
  /**
   * Cardholder's full name as it appears on the card.
   */
  name: string;
  /**
   * The card number, as a string without any separators. On read all but the last four digits will be masked for security.
   */
  number: string;
  object?: "card";
}

/**
 * Bank Account
 *
 * A bank account to take payment from. Must be able to make payments in the currency specified in the payment.
 */
export interface SourceUnionObject2 {
  /**
   * The type of entity that holds the account. This can be either `individual` or `company`.
   */
  accountType: string;
  /**
   * The name of the bank associated with the routing number.
   */
  bankName: string;
  /**
   * Two-letter country code (ISO 3166-1 alpha-2).
   */
  country: string;
  name: string;
  /**
   * The account number for the bank account, in string form. Must be a current account.
   */
  number: string;
  object?: "bank_account";
  /**
   * The sort code for the bank account, in string form. Must be a six-digit number.
   */
  sortCode?: string;
}

/**
 * A train station.
 */
export interface Station {
  /**
   * The address of the station.
   */
  address: string;
  /**
   * The country code of the station.
   */
  countryCode: string;
  /**
   * Unique identifier for the station.
   */
  id: string;
  /**
   * The name of the station
   */
  name: string;
  /**
   * The timezone of the station in the [IANA Time Zone Database format](https://www.iana.org/time-zones).
   */
  timezone?: string;
}

/**
 * A train trip.
 */
export interface Trip {
  /**
   * The date and time when the trip arrives
   */
  arrivalTime?: string;
  /**
   * Indicates whether bicycles are allowed on the trip
   */
  bicyclesAllowed?: boolean;
  /**
   * The date and time when the trip departs
   */
  departureTime?: string;
  /**
   * The destination station of the trip
   */
  destination?: string;
  /**
   * Indicates whether dogs are allowed on the trip
   */
  dogsAllowed?: boolean;
  /**
   * Unique identifier for the trip
   */
  id?: string;
  /**
   * The name of the operator of the trip
   */
  operator?: string;
  /**
   * The starting station of the trip
   */
  origin?: string;
  /**
   * The cost of the trip
   */
  price?: number;
}

/**
 * This is a generic request/response wrapper which contains both data and links which serve as hypermedia controls (HATEOAS).
 */
export interface WrapperCollection {
  /**
   * The wrapper for a collection is an array of objects.
   */
  data?: Array<any>;
  /**
   * A set of hypermedia links which serve as controls for the client.
   */
  links?: any;
}