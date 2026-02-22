import { string, typed } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';
/**
 * Unique identifier for museum ticket. Generated when purchased.
 */
export type TicketId = string;

export const TicketIdSchema: TypedSchema<TicketId> = typed<TicketId>(string());
