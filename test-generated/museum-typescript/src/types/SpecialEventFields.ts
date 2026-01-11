import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { EventDates } from './EventDates';
import { EventDatesSchema } from './EventDates';
import type { EventDescription } from './EventDescription';
import { EventDescriptionSchema } from './EventDescription';
import type { EventLocation } from './EventLocation';
import { EventLocationSchema } from './EventLocation';
import type { EventName } from './EventName';
import { EventNameSchema } from './EventName';
import type { EventPrice } from './EventPrice';
import { EventPriceSchema } from './EventPrice';
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

export const SpecialEventFieldsSchema: TypedSchema<SpecialEventFields> = typed<SpecialEventFields>(object({
  get dates() { return optional(EventDatesSchema) },
  get eventDescription() { return optional(EventDescriptionSchema) },
  get location() { return optional(EventLocationSchema) },
  get name() { return optional(EventNameSchema) },
  get price() { return optional(EventPriceSchema) },
}));