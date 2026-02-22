import { string, typed } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';
/**
 * Location where the special event is held.
 */
export type EventLocation = string;

export const EventLocationSchema: TypedSchema<EventLocation> = typed<EventLocation>(string());
