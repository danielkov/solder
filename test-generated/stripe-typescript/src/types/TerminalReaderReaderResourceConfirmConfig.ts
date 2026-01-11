import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * TerminalReaderReaderResourceConfirmConfig
 *
 * Represents a per-transaction override of a reader configuration
 */
export interface TerminalReaderReaderResourceConfirmConfig {
  /**
   * If the customer doesn't abandon authenticating the payment, they're redirected to this URL after completion.
   */
  returnUrl?: string;
}

export const TerminalReaderReaderResourceConfirmConfigSchema: TypedSchema<TerminalReaderReaderResourceConfirmConfig> = typed<TerminalReaderReaderResourceConfirmConfig>(object({
  returnUrl: optional(string()),
}));