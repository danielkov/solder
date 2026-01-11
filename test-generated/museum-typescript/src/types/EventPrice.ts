import { TypedSchema, number, typed } from '@speakeasy-api/tonic';
export type EventPrice = number;

export const EventPriceSchema: TypedSchema<EventPrice> = typed<EventPrice>(number());