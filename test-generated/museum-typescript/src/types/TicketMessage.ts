import { TypedSchema, string, typed } from '@speakeasy-api/tonic';
export type TicketMessage = string;

export const TicketMessageSchema: TypedSchema<TicketMessage> = typed<TicketMessage>(string());