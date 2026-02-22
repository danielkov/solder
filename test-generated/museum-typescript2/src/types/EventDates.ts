import { array, typed } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';

import type { Date } from './Date';
import { DateSchema } from './Date';
/**
 * List of planned dates for the special event.
 */
export type EventDates = Array<Date>;

export const EventDatesSchema: TypedSchema<EventDates> = typed<EventDates>(array(DateSchema));
