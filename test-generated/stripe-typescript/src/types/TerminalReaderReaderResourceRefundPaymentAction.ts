import { TypedSchema, boolean, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { ChargeOrRef } from './ChargeOrRef';
import { ChargeOrRefSchema } from './ChargeOrRef';
import type { MetadataProperty } from './MetadataProperty';
import { MetadataPropertySchema } from './MetadataProperty';
import type { PaymentIntentOrRef } from './PaymentIntentOrRef';
import { PaymentIntentOrRefSchema } from './PaymentIntentOrRef';
import type { RefundOrRef } from './RefundOrRef';
import { RefundOrRefSchema } from './RefundOrRef';
import type { TerminalReaderReaderResourceRefundPaymentConfig } from './TerminalReaderReaderResourceRefundPaymentConfig';
import { TerminalReaderReaderResourceRefundPaymentConfigSchema } from './TerminalReaderReaderResourceRefundPaymentConfig';
/**
 * TerminalReaderReaderResourceRefundPaymentAction
 *
 * Represents a reader action to refund a payment
 */
export interface TerminalReaderReaderResourceRefundPaymentAction {
  /**
   * The amount being refunded.
   */
  amount?: number;
  /**
   * Charge that is being refunded.
   */
  charge?: ChargeOrRef;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
   */
  metadata?: MetadataProperty;
  /**
   * Payment intent that is being refunded.
   */
  paymentIntent?: PaymentIntentOrRef;
  /**
   * The reason for the refund.
   */
  reason?: string;
  /**
   * Unique identifier for the refund object.
   */
  refund?: RefundOrRef;
  /**
   * Boolean indicating whether the application fee should be refunded when refunding this charge. If a full charge refund is given, the full application fee will be refunded. Otherwise, the application fee will be refunded in an amount proportional to the amount of the charge refunded. An application fee can be refunded only by the application that created the charge.
   */
  refundApplicationFee?: boolean;
  /**
   * TerminalReaderReaderResourceRefundPaymentConfig
   *
   * Represents a per-transaction override of a reader configuration
   */
  refundPaymentConfig?: TerminalReaderReaderResourceRefundPaymentConfig;
  /**
   * Boolean indicating whether the transfer should be reversed when refunding this charge. The transfer will be reversed proportionally to the amount being refunded (either the entire or partial amount). A transfer can be reversed only by the application that created the charge.
   */
  reverseTransfer?: boolean;
}

export const TerminalReaderReaderResourceRefundPaymentActionSchema: TypedSchema<TerminalReaderReaderResourceRefundPaymentAction> = typed<TerminalReaderReaderResourceRefundPaymentAction>(object({
  amount: optional(number()),
  get charge() { return optional(ChargeOrRefSchema) },
  get metadata() { return optional(MetadataPropertySchema) },
  get paymentIntent() { return optional(PaymentIntentOrRefSchema) },
  reason: optional(string()),
  get refund() { return optional(RefundOrRefSchema) },
  refundApplicationFee: optional(boolean()),
  get refundPaymentConfig() { return optional(TerminalReaderReaderResourceRefundPaymentConfigSchema) },
  reverseTransfer: optional(boolean()),
}));