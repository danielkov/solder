import { TypedSchema, boolean, object, optional, typed } from '@speakeasy-api/tonic';

import type { TerminalReaderReaderResourceTippingConfig } from './TerminalReaderReaderResourceTippingConfig';
import { TerminalReaderReaderResourceTippingConfigSchema } from './TerminalReaderReaderResourceTippingConfig';
/**
 * TerminalReaderReaderResourceCollectConfig
 *
 * Represents a per-transaction override of a reader configuration
 */
export interface TerminalReaderReaderResourceCollectConfig {
  /**
   * Enable customer-initiated cancellation when processing this payment.
   */
  enableCustomerCancellation?: boolean;
  /**
   * Override showing a tipping selection screen on this transaction.
   */
  skipTipping?: boolean;
  /**
   * TerminalReaderReaderResourceTippingConfig
   *
   * Represents a per-transaction tipping configuration
   */
  tipping?: TerminalReaderReaderResourceTippingConfig;
}

export const TerminalReaderReaderResourceCollectConfigSchema: TypedSchema<TerminalReaderReaderResourceCollectConfig> = typed<TerminalReaderReaderResourceCollectConfig>(object({
  enableCustomerCancellation: optional(boolean()),
  skipTipping: optional(boolean()),
  get tipping() { return optional(TerminalReaderReaderResourceTippingConfigSchema) },
}));