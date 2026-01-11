import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { EventDates } from './EventDates';
import { EventDatesSchema } from './EventDates';
import type { EventDescription } from './EventDescription';
import { EventDescriptionSchema } from './EventDescription';
import type { EventId } from './EventId';
import { EventIdSchema } from './EventId';
import type { EventLocation } from './EventLocation';
import { EventLocationSchema } from './EventLocation';
import type { EventName } from './EventName';
import { EventNameSchema } from './EventName';
import type { EventPrice } from './EventPrice';
import { EventPriceSchema } from './EventPrice';
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

export const SpecialEventSchema: TypedSchema<SpecialEvent> = typed<SpecialEvent>(object({
  dates: EventDatesSchema,
  eventDescription: EventDescriptionSchema,
  get eventId() { return optional(EventIdSchema) },
  location: EventLocationSchema,
  name: EventNameSchema,
  price: EventPriceSchema,
}));