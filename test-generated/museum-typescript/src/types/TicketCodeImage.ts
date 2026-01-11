import { TypedSchema, string, typed } from '@speakeasy-api/tonic';
export type TicketCodeImage = Uint8Array;

export const TicketCodeImageSchema: TypedSchema<TicketCodeImage> = typed<TicketCodeImage>(string());