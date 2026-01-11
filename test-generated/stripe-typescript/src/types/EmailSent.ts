import { TypedSchema, number, object, string, typed } from '@speakeasy-api/tonic';
/**
 * EmailSent
 *
 * 
 */
export interface EmailSent {
  /**
   * The timestamp when the email was sent.
   */
  emailSentAt: number;
  /**
   * The recipient's email address.
   */
  emailSentTo: string;
}

export const EmailSentSchema: TypedSchema<EmailSent> = typed<EmailSent>(object({
  emailSentAt: number(),
  emailSentTo: string(),
}));