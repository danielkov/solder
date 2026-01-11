import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { Date } from './Date';
import { DateSchema } from './Date';
import type { EventId } from './EventId';
import { EventIdSchema } from './EventId';
import type { TicketId } from './TicketId';
import { TicketIdSchema } from './TicketId';
import type { TicketType } from './TicketType';
import { TicketTypeSchema } from './TicketType';
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

export const TicketSchema: TypedSchema<Ticket> = typed<Ticket>(object({
  get eventId() { return optional(EventIdSchema) },
  ticketDate: DateSchema,
  get ticketId() { return optional(TicketIdSchema) },
  ticketType: TicketTypeSchema,
}));