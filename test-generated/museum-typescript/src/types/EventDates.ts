import { TypedSchema, array, typed } from '@speakeasy-api/tonic';

import type { Date } from './Date';
import { DateSchema } from './Date';
export type EventDates = Array<Date>;

export const EventDatesSchema: TypedSchema<EventDates> = typed<EventDates>(array(DateSchema));