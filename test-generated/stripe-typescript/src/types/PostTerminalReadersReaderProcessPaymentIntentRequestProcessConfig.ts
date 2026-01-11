import { TypedSchema, boolean, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostTerminalReadersReaderCollectPaymentMethodRequestTipping } from './PostTerminalReadersReaderCollectPaymentMethodRequestTipping';
import { PostTerminalReadersReaderCollectPaymentMethodRequestTippingSchema } from './PostTerminalReadersReaderCollectPaymentMethodRequestTipping';
/**
 * process_config
 *
 * Configuration overrides for this transaction, such as tipping and customer cancellation settings.
 */
export interface PostTerminalReadersReaderProcessPaymentIntentRequestProcessConfig {
  allowRedisplay?: string;
  enableCustomerCancellation?: boolean;
  returnUrl?: string;
  skipTipping?: boolean;
  /**
   * tipping_config
   */
  tipping?: PostTerminalReadersReaderCollectPaymentMethodRequestTipping;
}

export const PostTerminalReadersReaderProcessPaymentIntentRequestProcessConfigSchema: TypedSchema<PostTerminalReadersReaderProcessPaymentIntentRequestProcessConfig> = typed<PostTerminalReadersReaderProcessPaymentIntentRequestProcessConfig>(object({
  allowRedisplay: optional(string()),
  enableCustomerCancellation: optional(boolean()),
  returnUrl: optional(string()),
  skipTipping: optional(boolean()),
  get tipping() { return optional(PostTerminalReadersReaderCollectPaymentMethodRequestTippingSchema) },
}));