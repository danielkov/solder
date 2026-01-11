import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * SourceMandateNotificationAcssDebitData
 *
 * 
 */
export interface SourceMandateNotificationAcssDebitData {
  /**
   * The statement descriptor associate with the debit.
   */
  statementDescriptor?: string;
}

export const SourceMandateNotificationAcssDebitDataSchema: TypedSchema<SourceMandateNotificationAcssDebitData> = typed<SourceMandateNotificationAcssDebitData>(object({
  statementDescriptor: optional(string()),
}));