import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { Date } from './Date';
import { DateSchema } from './Date';
import type { EventId } from './EventId';
import { EventIdSchema } from './EventId';
import type { TicketConfirmation } from './TicketConfirmation';
import { TicketConfirmationSchema } from './TicketConfirmation';
import type { TicketId } from './TicketId';
import { TicketIdSchema } from './TicketId';
import type { TicketMessage } from './TicketMessage';
import { TicketMessageSchema } from './TicketMessage';
import type { TicketType } from './TicketType';
import { TicketTypeSchema } from './TicketType';
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

export const MuseumTicketsConfirmationSchema: TypedSchema<MuseumTicketsConfirmation> = typed<MuseumTicketsConfirmation>(object({
  confirmationCode: TicketConfirmationSchema,
  get eventId() { return optional(EventIdSchema) },
  message: TicketMessageSchema,
  ticketDate: DateSchema,
  get ticketId() { return optional(TicketIdSchema) },
  ticketType: TicketTypeSchema,
}));