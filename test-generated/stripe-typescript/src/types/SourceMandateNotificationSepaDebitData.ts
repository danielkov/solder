import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * SourceMandateNotificationSepaDebitData
 *
 * 
 */
export interface SourceMandateNotificationSepaDebitData {
  /**
   * SEPA creditor ID.
   */
  creditorIdentifier?: string;
  /**
   * Last 4 digits of the account number associated with the debit.
   */
  last4?: string;
  /**
   * Mandate reference associated with the debit.
   */
  mandateReference?: string;
}

export const SourceMandateNotificationSepaDebitDataSchema: TypedSchema<SourceMandateNotificationSepaDebitData> = typed<SourceMandateNotificationSepaDebitData>(object({
  creditorIdentifier: optional(string()),
  last4: optional(string()),
  mandateReference: optional(string()),
}));