import { string, typed } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';
/**
 * Image of a ticket with a QR code used for museum or event entry.
 */
export type TicketCodeImage = Uint8Array;

export const TicketCodeImageSchema: TypedSchema<TicketCodeImage> = typed<TicketCodeImage>(string());
