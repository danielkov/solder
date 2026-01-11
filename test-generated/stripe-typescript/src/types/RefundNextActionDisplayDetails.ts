import { TypedSchema, number, object, typed } from '@speakeasy-api/tonic';

import type { EmailSent } from './EmailSent';
import { EmailSentSchema } from './EmailSent';
/**
 * RefundNextActionDisplayDetails
 *
 * 
 */
export interface RefundNextActionDisplayDetails {
  /**
   * EmailSent
   *
   * 
   */
  emailSent: EmailSent;
  /**
   * The expiry timestamp.
   */
  expiresAt: number;
}

export const RefundNextActionDisplayDetailsSchema: TypedSchema<RefundNextActionDisplayDetails> = typed<RefundNextActionDisplayDetails>(object({
  emailSent: EmailSentSchema,
  expiresAt: number(),
}));