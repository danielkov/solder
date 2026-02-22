import { string, typed } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';
/**
 * Identifier for a special event.
 */
export type EventId = string;

export const EventIdSchema: TypedSchema<EventId> = typed<EventId>(string());
