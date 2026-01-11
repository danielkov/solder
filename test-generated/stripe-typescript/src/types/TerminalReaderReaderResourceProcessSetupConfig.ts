import { TypedSchema, boolean, object, optional, typed } from '@speakeasy-api/tonic';
/**
 * TerminalReaderReaderResourceProcessSetupConfig
 *
 * Represents a per-setup override of a reader configuration
 */
export interface TerminalReaderReaderResourceProcessSetupConfig {
  /**
   * Enable customer-initiated cancellation when processing this SetupIntent.
   */
  enableCustomerCancellation?: boolean;
}

export const TerminalReaderReaderResourceProcessSetupConfigSchema: TypedSchema<TerminalReaderReaderResourceProcessSetupConfig> = typed<TerminalReaderReaderResourceProcessSetupConfig>(object({
  enableCustomerCancellation: optional(boolean()),
}));