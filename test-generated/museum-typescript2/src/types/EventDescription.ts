import { string, typed } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';
/**
 * Description of the special event.
 */
export type EventDescription = string;

export const EventDescriptionSchema: TypedSchema<EventDescription> = typed<EventDescription>(string());
