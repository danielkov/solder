import { TypedSchema, boolean, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostTerminalReadersReaderCollectPaymentMethodRequestTipping } from './PostTerminalReadersReaderCollectPaymentMethodRequestTipping';
import { PostTerminalReadersReaderCollectPaymentMethodRequestTippingSchema } from './PostTerminalReadersReaderCollectPaymentMethodRequestTipping';
/**
 * collect_config
 *
 * Configuration overrides for this collection, such as tipping, surcharging, and customer cancellation settings.
 */
export interface PostTerminalReadersReaderCollectPaymentMethodRequestCollectConfig {
  allowRedisplay?: string;
  enableCustomerCancellation?: boolean;
  skipTipping?: boolean;
  /**
   * tipping_config
   */
  tipping?: PostTerminalReadersReaderCollectPaymentMethodRequestTipping;
}

export const PostTerminalReadersReaderCollectPaymentMethodRequestCollectConfigSchema: TypedSchema<PostTerminalReadersReaderCollectPaymentMethodRequestCollectConfig> = typed<PostTerminalReadersReaderCollectPaymentMethodRequestCollectConfig>(object({
  allowRedisplay: optional(string()),
  enableCustomerCancellation: optional(boolean()),
  skipTipping: optional(boolean()),
  get tipping() { return optional(PostTerminalReadersReaderCollectPaymentMethodRequestTippingSchema) },
}));