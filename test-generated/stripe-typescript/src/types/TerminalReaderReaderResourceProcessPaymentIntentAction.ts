import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { PaymentIntentOrRef } from './PaymentIntentOrRef';
import { PaymentIntentOrRefSchema } from './PaymentIntentOrRef';
import type { TerminalReaderReaderResourceProcessConfig } from './TerminalReaderReaderResourceProcessConfig';
import { TerminalReaderReaderResourceProcessConfigSchema } from './TerminalReaderReaderResourceProcessConfig';
/**
 * TerminalReaderReaderResourceProcessPaymentIntentAction
 *
 * Represents a reader action to process a payment intent
 */
export interface TerminalReaderReaderResourceProcessPaymentIntentAction {
  /**
   * Most recent PaymentIntent processed by the reader.
   */
  paymentIntent: PaymentIntentOrRef;
  /**
   * TerminalReaderReaderResourceProcessConfig
   *
   * Represents a per-transaction override of a reader configuration
   */
  processConfig?: TerminalReaderReaderResourceProcessConfig;
}

export const TerminalReaderReaderResourceProcessPaymentIntentActionSchema: TypedSchema<TerminalReaderReaderResourceProcessPaymentIntentAction> = typed<TerminalReaderReaderResourceProcessPaymentIntentAction>(object({
  paymentIntent: PaymentIntentOrRefSchema,
  get processConfig() { return optional(TerminalReaderReaderResourceProcessConfigSchema) },
}));