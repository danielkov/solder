import { TypedSchema, number, object, optional, typed } from '@speakeasy-api/tonic';
/**
 * TerminalReaderReaderResourceTippingConfig
 *
 * Represents a per-transaction tipping configuration
 */
export interface TerminalReaderReaderResourceTippingConfig {
  /**
   * Amount used to calculate tip suggestions on tipping selection screen for this transaction. Must be a positive integer in the smallest currency unit (e.g., 100 cents to represent $1.00 or 100 to represent ¥100, a zero-decimal currency).
   */
  amountEligible?: number;
}

export const TerminalReaderReaderResourceTippingConfigSchema: TypedSchema<TerminalReaderReaderResourceTippingConfig> = typed<TerminalReaderReaderResourceTippingConfig>(object({
  amountEligible: optional(number()),
}));