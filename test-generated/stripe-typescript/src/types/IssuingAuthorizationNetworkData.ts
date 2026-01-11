import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * IssuingAuthorizationNetworkData
 *
 * 
 */
export interface IssuingAuthorizationNetworkData {
  /**
   * Identifier assigned to the acquirer by the card network. Sometimes this value is not provided by the network; in this case, the value will be `null`.
   */
  acquiringInstitutionId?: string;
  /**
   * The System Trace Audit Number (STAN) is a 6-digit identifier assigned by the acquirer. Prefer `network_data.transaction_id` if present, unless you have special requirements.
   */
  systemTraceAuditNumber?: string;
  /**
   * Unique identifier for the authorization assigned by the card network used to match subsequent messages, disputes, and transactions.
   */
  transactionId?: string;
}

export const IssuingAuthorizationNetworkDataSchema: TypedSchema<IssuingAuthorizationNetworkData> = typed<IssuingAuthorizationNetworkData>(object({
  acquiringInstitutionId: optional(string()),
  systemTraceAuditNumber: optional(string()),
  transactionId: optional(string()),
}));