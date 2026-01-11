import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * SourceTransactionPaperCheckData
 *
 * 
 */
export interface SourceTransactionPaperCheckData {
  /**
   * Time at which the deposited funds will be available for use. Measured in seconds since the Unix epoch.
   */
  availableAt?: string;
  /**
   * Comma-separated list of invoice IDs associated with the paper check.
   */
  invoices?: string;
}

export const SourceTransactionPaperCheckDataSchema: TypedSchema<SourceTransactionPaperCheckData> = typed<SourceTransactionPaperCheckData>(object({
  availableAt: optional(string()),
  invoices: optional(string()),
}));