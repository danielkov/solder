import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { PaymentIntentOrRef } from './PaymentIntentOrRef';
import { PaymentIntentOrRefSchema } from './PaymentIntentOrRef';
import type { TerminalReaderReaderResourceConfirmConfig } from './TerminalReaderReaderResourceConfirmConfig';
import { TerminalReaderReaderResourceConfirmConfigSchema } from './TerminalReaderReaderResourceConfirmConfig';
/**
 * TerminalReaderReaderResourceConfirmPaymentIntentAction
 *
 * Represents a reader action to confirm a payment
 */
export interface TerminalReaderReaderResourceConfirmPaymentIntentAction {
  /**
   * TerminalReaderReaderResourceConfirmConfig
   *
   * Represents a per-transaction override of a reader configuration
   */
  confirmConfig?: TerminalReaderReaderResourceConfirmConfig;
  /**
   * Most recent PaymentIntent processed by the reader.
   */
  paymentIntent: PaymentIntentOrRef;
}

export const TerminalReaderReaderResourceConfirmPaymentIntentActionSchema: TypedSchema<TerminalReaderReaderResourceConfirmPaymentIntentAction> = typed<TerminalReaderReaderResourceConfirmPaymentIntentAction>(object({
  get confirmConfig() { return optional(TerminalReaderReaderResourceConfirmConfigSchema) },
  paymentIntent: PaymentIntentOrRefSchema,
}));