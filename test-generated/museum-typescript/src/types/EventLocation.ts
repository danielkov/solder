import { TypedSchema, string, typed } from '@speakeasy-api/tonic';
export type EventLocation = string;

export const EventLocationSchema: TypedSchema<EventLocation> = typed<EventLocation>(string());