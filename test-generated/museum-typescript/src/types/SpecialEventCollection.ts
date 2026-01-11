import { TypedSchema, array, typed } from '@speakeasy-api/tonic';

import type { SpecialEvent } from './SpecialEvent';
import { SpecialEventSchema } from './SpecialEvent';
export type SpecialEventCollection = Array<SpecialEvent>;

export const SpecialEventCollectionSchema: TypedSchema<SpecialEventCollection> = typed<SpecialEventCollection>(array(SpecialEventSchema));