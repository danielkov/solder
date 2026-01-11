import { TypedSchema, boolean, object, optional, typed } from '@speakeasy-api/tonic';
/**
 * TerminalReaderReaderResourceRefundPaymentConfig
 *
 * Represents a per-transaction override of a reader configuration
 */
export interface TerminalReaderReaderResourceRefundPaymentConfig {
  /**
   * Enable customer-initiated cancellation when refunding this payment.
   */
  enableCustomerCancellation?: boolean;
}

export const TerminalReaderReaderResourceRefundPaymentConfigSchema: TypedSchema<TerminalReaderReaderResourceRefundPaymentConfig> = typed<TerminalReaderReaderResourceRefundPaymentConfig>(object({
  enableCustomerCancellation: optional(boolean()),
}));