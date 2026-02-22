import { number, typed } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';
/**
 * Price of a ticket for the special event.
 */
export type EventPrice = number;

export const EventPriceSchema: TypedSchema<EventPrice> = typed<EventPrice>(number());
