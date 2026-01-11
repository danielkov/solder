import { TypedSchema, array, typed } from '@speakeasy-api/tonic';

import type { MuseumDailyHours } from './MuseumDailyHours';
import { MuseumDailyHoursSchema } from './MuseumDailyHours';
export type MuseumHours = Array<MuseumDailyHours>;

export const MuseumHoursSchema: TypedSchema<MuseumHours> = typed<MuseumHours>(array(MuseumDailyHoursSchema));