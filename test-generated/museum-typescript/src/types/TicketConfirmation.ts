import { TypedSchema, string, typed } from '@speakeasy-api/tonic';
export type TicketConfirmation = string;

export const TicketConfirmationSchema: TypedSchema<TicketConfirmation> = typed<TicketConfirmation>(string());