import { TypedSchema, array, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostTerminalReadersReaderProcessPaymentIntentRequestProcessConfig } from './PostTerminalReadersReaderProcessPaymentIntentRequestProcessConfig';
import { PostTerminalReadersReaderProcessPaymentIntentRequestProcessConfigSchema } from './PostTerminalReadersReaderProcessPaymentIntentRequestProcessConfig';
export interface PostTerminalReadersReaderProcessPaymentIntentRequest {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
  /**
   * The ID of the PaymentIntent to process on the reader.
   */
  paymentIntent: string;
  /**
   * process_config
   *
   * Configuration overrides for this transaction, such as tipping and customer cancellation settings.
   */
  processConfig?: PostTerminalReadersReaderProcessPaymentIntentRequestProcessConfig;
}

export const PostTerminalReadersReaderProcessPaymentIntentRequestSchema: TypedSchema<PostTerminalReadersReaderProcessPaymentIntentRequest> = typed<PostTerminalReadersReaderProcessPaymentIntentRequest>(object({
  expand: optional(array(string())),
  paymentIntent: string(),
  get processConfig() { return optional(PostTerminalReadersReaderProcessPaymentIntentRequestProcessConfigSchema) },
}));