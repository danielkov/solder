// Generated types from OpenAPI specification

/**
 * Data to purchase a ticket.
 */
export interface BuyMuseumTickets {
  /**
   * Email address for ticket purchaser.
   */
  email?: Email;
  /**
   * Identifier for a special event.
   */
  eventId?: EventId;
  ticketDate: Date;
  /**
   * Unique identifier for museum ticket. Generated when purchased.
   */
  ticketId?: TicketId;
  /**
   * Type of ticket being purchased. Use `general` for regular museum entry and `event` for tickets to special events.
   */
  ticketType: TicketType;
}

export type Date = Date;

export type Email = string;

export interface Error {
  title?: string;
  type?: string;
}

export type EventDates = Array<Date>;

export type EventDescription = string;

export type EventId = string;

export type EventLocation = string;

export type EventName = string;

export type EventPrice = number;

/**
 * Daily operating hours for the museum.
 */
export interface MuseumDailyHours {
  date: Date;
  /**
   * Time the museum closes on a specific date. Uses 24 hour time format (`HH:mm`).
   */
  timeClose: string;
  /**
   * Time the museum opens on a specific date. Uses 24 hour time format (`HH:mm`).
   */
  timeOpen: string;
}

export type MuseumHours = Array<MuseumDailyHours>;

/**
 * Details for a museum ticket after a successful purchase.
 */
export interface MuseumTicketsConfirmation {
  /**
   * Unique confirmation code used to verify ticket purchase.
   */
  confirmationCode: TicketConfirmation;
  /**
   * Identifier for a special event.
   */
  eventId?: EventId;
  /**
   * Confirmation message after a ticket purchase.
   */
  message: TicketMessage;
  ticketDate: Date;
  /**
   * Unique identifier for museum ticket. Generated when purchased.
   */
  ticketId?: TicketId;
  /**
   * Type of ticket being purchased. Use `general` for regular museum entry and `event` for tickets to special events.
   */
  ticketType: TicketType;
}

export interface SpecialEvent {
  /**
   * List of planned dates for the special event.
   */
  dates: EventDates;
  /**
   * Description of the special event.
   */
  eventDescription: EventDescription;
  /**
   * Identifier for a special event.
   */
  eventId?: EventId;
  /**
   * Location where the special event is held.
   */
  location: EventLocation;
  /**
   * Name of the special event.
   */
  name: EventName;
  /**
   * Price of a ticket for the special event.
   */
  price: EventPrice;
}

export type SpecialEventCollection = Array<SpecialEvent>;

export interface SpecialEventFields {
  /**
   * List of planned dates for the special event.
   */
  dates?: EventDates;
  /**
   * Description of the special event.
   */
  eventDescription?: EventDescription;
  /**
   * Location where the special event is held.
   */
  location?: EventLocation;
  /**
   * Name of the special event.
   */
  name?: EventName;
  /**
   * Price of a ticket for the special event.
   */
  price?: EventPrice;
}

/**
 * Ticket for museum entry, can be general admission or special event.
 */
export interface Ticket {
  /**
   * Identifier for a special event.
   */
  eventId?: EventId;
  ticketDate: Date;
  /**
   * Unique identifier for museum ticket. Generated when purchased.
   */
  ticketId?: TicketId;
  /**
   * Type of ticket being purchased. Use `general` for regular museum entry and `event` for tickets to special events.
   */
  ticketType: TicketType;
}

export type TicketCodeImage = Uint8Array;

export type TicketConfirmation = string;

export type TicketId = string;

export type TicketMessage = string;

export enum TicketType {
  EVENT = "event",
  GENERAL = "general",
}