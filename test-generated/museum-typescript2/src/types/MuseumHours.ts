import { array, typed } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';

import type { MuseumDailyHours } from './MuseumDailyHours';
import { MuseumDailyHoursSchema } from './MuseumDailyHours';
/**
 * List of museum operating hours for a date range.
 */
export type MuseumHours = Array<MuseumDailyHours>;

export const MuseumHoursSchema: TypedSchema<MuseumHours> = typed<MuseumHours>(array(MuseumDailyHoursSchema));
