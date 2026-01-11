import { TypedSchema, object, string, typed } from '@speakeasy-api/tonic';

import type { Date } from './Date';
import { DateSchema } from './Date';
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

export const MuseumDailyHoursSchema: TypedSchema<MuseumDailyHours> = typed<MuseumDailyHours>(object({
  date: DateSchema,
  timeClose: string(),
  timeOpen: string(),
}));