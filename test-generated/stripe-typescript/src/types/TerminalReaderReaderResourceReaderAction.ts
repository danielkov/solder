import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { TerminalReaderReaderResourceCollectInputsAction } from './TerminalReaderReaderResourceCollectInputsAction';
import { TerminalReaderReaderResourceCollectInputsActionSchema } from './TerminalReaderReaderResourceCollectInputsAction';
import type { TerminalReaderReaderResourceCollectPaymentMethodAction } from './TerminalReaderReaderResourceCollectPaymentMethodAction';
import { TerminalReaderReaderResourceCollectPaymentMethodActionSchema } from './TerminalReaderReaderResourceCollectPaymentMethodAction';
import type { TerminalReaderReaderResourceConfirmPaymentIntentAction } from './TerminalReaderReaderResourceConfirmPaymentIntentAction';
import { TerminalReaderReaderResourceConfirmPaymentIntentActionSchema } from './TerminalReaderReaderResourceConfirmPaymentIntentAction';
import type { TerminalReaderReaderResourceProcessPaymentIntentAction } from './TerminalReaderReaderResourceProcessPaymentIntentAction';
import { TerminalReaderReaderResourceProcessPaymentIntentActionSchema } from './TerminalReaderReaderResourceProcessPaymentIntentAction';
import type { TerminalReaderReaderResourceProcessSetupIntentAction } from './TerminalReaderReaderResourceProcessSetupIntentAction';
import { TerminalReaderReaderResourceProcessSetupIntentActionSchema } from './TerminalReaderReaderResourceProcessSetupIntentAction';
import type { TerminalReaderReaderResourceRefundPaymentAction } from './TerminalReaderReaderResourceRefundPaymentAction';
import { TerminalReaderReaderResourceRefundPaymentActionSchema } from './TerminalReaderReaderResourceRefundPaymentAction';
import type { TerminalReaderReaderResourceSetReaderDisplayAction } from './TerminalReaderReaderResourceSetReaderDisplayAction';
import { TerminalReaderReaderResourceSetReaderDisplayActionSchema } from './TerminalReaderReaderResourceSetReaderDisplayAction';
/**
 * TerminalReaderReaderResourceReaderAction
 *
 * Represents an action performed by the reader
 */
export interface TerminalReaderReaderResourceReaderAction {
  /**
   * TerminalReaderReaderResourceCollectInputsAction
   *
   * Represents a reader action to collect customer inputs
   */
  collectInputs?: TerminalReaderReaderResourceCollectInputsAction;
  /**
   * TerminalReaderReaderResourceCollectPaymentMethodAction
   *
   * Represents a reader action to collect a payment method
   */
  collectPaymentMethod?: TerminalReaderReaderResourceCollectPaymentMethodAction;
  /**
   * TerminalReaderReaderResourceConfirmPaymentIntentAction
   *
   * Represents a reader action to confirm a payment
   */
  confirmPaymentIntent?: TerminalReaderReaderResourceConfirmPaymentIntentAction;
  /**
   * Failure code, only set if status is `failed`.
   */
  failureCode?: string;
  /**
   * Detailed failure message, only set if status is `failed`.
   */
  failureMessage?: string;
  /**
   * TerminalReaderReaderResourceProcessPaymentIntentAction
   *
   * Represents a reader action to process a payment intent
   */
  processPaymentIntent?: TerminalReaderReaderResourceProcessPaymentIntentAction;
  /**
   * TerminalReaderReaderResourceProcessSetupIntentAction
   *
   * Represents a reader action to process a setup intent
   */
  processSetupIntent?: TerminalReaderReaderResourceProcessSetupIntentAction;
  /**
   * TerminalReaderReaderResourceRefundPaymentAction
   *
   * Represents a reader action to refund a payment
   */
  refundPayment?: TerminalReaderReaderResourceRefundPaymentAction;
  /**
   * TerminalReaderReaderResourceSetReaderDisplayAction
   *
   * Represents a reader action to set the reader display
   */
  setReaderDisplay?: TerminalReaderReaderResourceSetReaderDisplayAction;
  /**
   * Status of the action performed by the reader.
   */
  status: string;
  /**
   * Type of action performed by the reader.
   */
  type: string;
}

export const TerminalReaderReaderResourceReaderActionSchema: TypedSchema<TerminalReaderReaderResourceReaderAction> = typed<TerminalReaderReaderResourceReaderAction>(object({
  get collectInputs() { return optional(TerminalReaderReaderResourceCollectInputsActionSchema) },
  get collectPaymentMethod() { return optional(TerminalReaderReaderResourceCollectPaymentMethodActionSchema) },
  get confirmPaymentIntent() { return optional(TerminalReaderReaderResourceConfirmPaymentIntentActionSchema) },
  failureCode: optional(string()),
  failureMessage: optional(string()),
  get processPaymentIntent() { return optional(TerminalReaderReaderResourceProcessPaymentIntentActionSchema) },
  get processSetupIntent() { return optional(TerminalReaderReaderResourceProcessSetupIntentActionSchema) },
  get refundPayment() { return optional(TerminalReaderReaderResourceRefundPaymentActionSchema) },
  get setReaderDisplay() { return optional(TerminalReaderReaderResourceSetReaderDisplayActionSchema) },
  status: string(),
  type: string(),
}));