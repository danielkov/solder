import { TypedSchema, string, typed } from '@speakeasy-api/tonic';
export type TicketId = string;

export const TicketIdSchema: TypedSchema<TicketId> = typed<TicketId>(string());