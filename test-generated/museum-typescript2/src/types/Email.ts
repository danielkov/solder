import { string, typed } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';
/**
 * Email address for ticket purchaser.
 */
export type Email = string;

export const EmailSchema: TypedSchema<Email> = typed<Email>(string());
