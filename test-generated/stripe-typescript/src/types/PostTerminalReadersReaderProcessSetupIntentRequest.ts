import { TypedSchema, array, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostTerminalReadersReaderProcessSetupIntentRequestProcessConfig } from './PostTerminalReadersReaderProcessSetupIntentRequestProcessConfig';
import { PostTerminalReadersReaderProcessSetupIntentRequestProcessConfigSchema } from './PostTerminalReadersReaderProcessSetupIntentRequestProcessConfig';
export interface PostTerminalReadersReaderProcessSetupIntentRequest {
  /**
   * This field indicates whether this payment method can be shown again to its customer in a checkout flow. Stripe products such as Checkout and Elements use this field to determine whether a payment method can be shown as a saved payment method in a checkout flow.
   */
  allowRedisplay: string;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
  /**
   * process_setup_config
   *
   * Configuration overrides for this setup, such as MOTO and customer cancellation settings.
   */
  processConfig?: PostTerminalReadersReaderProcessSetupIntentRequestProcessConfig;
  /**
   * The ID of the SetupIntent to process on the reader.
   */
  setupIntent: string;
}

export const PostTerminalReadersReaderProcessSetupIntentRequestSchema: TypedSchema<PostTerminalReadersReaderProcessSetupIntentRequest> = typed<PostTerminalReadersReaderProcessSetupIntentRequest>(object({
  allowRedisplay: string(),
  expand: optional(array(string())),
  get processConfig() { return optional(PostTerminalReadersReaderProcessSetupIntentRequestProcessConfigSchema) },
  setupIntent: string(),
}));