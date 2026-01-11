import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { SetupIntentOrRef } from './SetupIntentOrRef';
import { SetupIntentOrRefSchema } from './SetupIntentOrRef';
import type { TerminalReaderReaderResourceProcessSetupConfig } from './TerminalReaderReaderResourceProcessSetupConfig';
import { TerminalReaderReaderResourceProcessSetupConfigSchema } from './TerminalReaderReaderResourceProcessSetupConfig';
/**
 * TerminalReaderReaderResourceProcessSetupIntentAction
 *
 * Represents a reader action to process a setup intent
 */
export interface TerminalReaderReaderResourceProcessSetupIntentAction {
  /**
   * ID of a card PaymentMethod generated from the card_present PaymentMethod that may be attached to a Customer for future transactions. Only present if it was possible to generate a card PaymentMethod.
   */
  generatedCard?: string;
  /**
   * TerminalReaderReaderResourceProcessSetupConfig
   *
   * Represents a per-setup override of a reader configuration
   */
  processConfig?: TerminalReaderReaderResourceProcessSetupConfig;
  /**
   * Most recent SetupIntent processed by the reader.
   */
  setupIntent: SetupIntentOrRef;
}

export const TerminalReaderReaderResourceProcessSetupIntentActionSchema: TypedSchema<TerminalReaderReaderResourceProcessSetupIntentAction> = typed<TerminalReaderReaderResourceProcessSetupIntentAction>(object({
  generatedCard: optional(string()),
  get processConfig() { return optional(TerminalReaderReaderResourceProcessSetupConfigSchema) },
  setupIntent: SetupIntentOrRefSchema,
}));