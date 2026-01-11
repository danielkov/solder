import { TypedSchema, string, typed } from '@speakeasy-api/tonic';
export type EventId = string;

export const EventIdSchema: TypedSchema<EventId> = typed<EventId>(string());