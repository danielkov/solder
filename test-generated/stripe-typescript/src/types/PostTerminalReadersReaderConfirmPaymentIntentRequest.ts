import { TypedSchema, array, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostTerminalReadersReaderConfirmPaymentIntentRequestConfirmConfig } from './PostTerminalReadersReaderConfirmPaymentIntentRequestConfirmConfig';
import { PostTerminalReadersReaderConfirmPaymentIntentRequestConfirmConfigSchema } from './PostTerminalReadersReaderConfirmPaymentIntentRequestConfirmConfig';
export interface PostTerminalReadersReaderConfirmPaymentIntentRequest {
  /**
   * confirm_config
   *
   * Configuration overrides for this confirmation, such as surcharge settings and return URL.
   */
  confirmConfig?: PostTerminalReadersReaderConfirmPaymentIntentRequestConfirmConfig;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
  /**
   * The ID of the PaymentIntent to confirm.
   */
  paymentIntent: string;
}

export const PostTerminalReadersReaderConfirmPaymentIntentRequestSchema: TypedSchema<PostTerminalReadersReaderConfirmPaymentIntentRequest> = typed<PostTerminalReadersReaderConfirmPaymentIntentRequest>(object({
  get confirmConfig() { return optional(PostTerminalReadersReaderConfirmPaymentIntentRequestConfirmConfigSchema) },
  expand: optional(array(string())),
  paymentIntent: string(),
}));