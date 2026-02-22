import { array, typed } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';

import type { SpecialEvent } from './SpecialEvent';
import { SpecialEventSchema } from './SpecialEvent';
/**
 * List of upcoming special events.
 */
export type SpecialEventCollection = Array<SpecialEvent>;

export const SpecialEventCollectionSchema: TypedSchema<SpecialEventCollection> = typed<SpecialEventCollection>(array(SpecialEventSchema));
