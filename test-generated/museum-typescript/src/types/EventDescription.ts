import { TypedSchema, string, typed } from '@speakeasy-api/tonic';
export type EventDescription = string;

export const EventDescriptionSchema: TypedSchema<EventDescription> = typed<EventDescription>(string());