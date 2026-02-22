import { string, typed } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';
/**
 * Name of the special event.
 */
export type EventName = string;

export const EventNameSchema: TypedSchema<EventName> = typed<EventName>(string());
