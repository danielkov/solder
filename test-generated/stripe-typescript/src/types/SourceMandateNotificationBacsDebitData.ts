import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * SourceMandateNotificationBacsDebitData
 *
 * 
 */
export interface SourceMandateNotificationBacsDebitData {
  /**
   * Last 4 digits of the account number associated with the debit.
   */
  last4?: string;
}

export const SourceMandateNotificationBacsDebitDataSchema: TypedSchema<SourceMandateNotificationBacsDebitData> = typed<SourceMandateNotificationBacsDebitData>(object({
  last4: optional(string()),
}));