import { TypedSchema, boolean, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { TerminalReaderReaderResourceTippingConfig } from './TerminalReaderReaderResourceTippingConfig';
import { TerminalReaderReaderResourceTippingConfigSchema } from './TerminalReaderReaderResourceTippingConfig';
/**
 * TerminalReaderReaderResourceProcessConfig
 *
 * Represents a per-transaction override of a reader configuration
 */
export interface TerminalReaderReaderResourceProcessConfig {
  /**
   * Enable customer-initiated cancellation when processing this payment.
   */
  enableCustomerCancellation?: boolean;
  /**
   * If the customer doesn't abandon authenticating the payment, they're redirected to this URL after completion.
   */
  returnUrl?: string;
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

export const TerminalReaderReaderResourceProcessConfigSchema: TypedSchema<TerminalReaderReaderResourceProcessConfig> = typed<TerminalReaderReaderResourceProcessConfig>(object({
  enableCustomerCancellation: optional(boolean()),
  returnUrl: optional(string()),
  skipTipping: optional(boolean()),
  get tipping() { return optional(TerminalReaderReaderResourceTippingConfigSchema) },
}));