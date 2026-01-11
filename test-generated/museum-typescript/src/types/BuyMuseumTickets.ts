import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { Date } from './Date';
import { DateSchema } from './Date';
import type { Email } from './Email';
import { EmailSchema } from './Email';
import type { EventId } from './EventId';
import { EventIdSchema } from './EventId';
import type { TicketId } from './TicketId';
import { TicketIdSchema } from './TicketId';
import type { TicketType } from './TicketType';
import { TicketTypeSchema } from './TicketType';
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

export const BuyMuseumTicketsSchema: TypedSchema<BuyMuseumTickets> = typed<BuyMuseumTickets>(object({
  get email() { return optional(EmailSchema) },
  get eventId() { return optional(EventIdSchema) },
  ticketDate: DateSchema,
  get ticketId() { return optional(TicketIdSchema) },
  ticketType: TicketTypeSchema,
}));