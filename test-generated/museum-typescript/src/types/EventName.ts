import { TypedSchema, string, typed } from '@speakeasy-api/tonic';
export type EventName = string;

export const EventNameSchema: TypedSchema<EventName> = typed<EventName>(string());