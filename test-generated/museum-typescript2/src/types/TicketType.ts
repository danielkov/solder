import { literal, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';
/**
 * Type of ticket being purchased. Use `general` for regular museum entry and `event` for tickets to special events.
 */
export type TicketType = "event" | "general";

export const TicketTypeSchema: TypedSchema<TicketType> = typed<TicketType>(union(literal('event'), literal('general')));

/**
 * Enum values for TicketType.
 * Use these constants for type-safe comparisons.
 */
export const TicketType = { EVENT: 'event' as const, GENERAL: 'general' as const } as const;
