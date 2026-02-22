import { string, typed } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';
/**
 * Unique confirmation code used to verify ticket purchase.
 */
export type TicketConfirmation = string;

export const TicketConfirmationSchema: TypedSchema<TicketConfirmation> = typed<TicketConfirmation>(string());
