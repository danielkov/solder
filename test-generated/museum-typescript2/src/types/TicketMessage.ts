import { string, typed } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';
/**
 * Confirmation message after a ticket purchase.
 */
export type TicketMessage = string;

export const TicketMessageSchema: TypedSchema<TicketMessage> = typed<TicketMessage>(string());
