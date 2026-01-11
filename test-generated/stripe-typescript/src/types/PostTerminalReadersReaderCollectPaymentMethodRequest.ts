import { TypedSchema, array, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostTerminalReadersReaderCollectPaymentMethodRequestCollectConfig } from './PostTerminalReadersReaderCollectPaymentMethodRequestCollectConfig';
import { PostTerminalReadersReaderCollectPaymentMethodRequestCollectConfigSchema } from './PostTerminalReadersReaderCollectPaymentMethodRequestCollectConfig';
export interface PostTerminalReadersReaderCollectPaymentMethodRequest {
  /**
   * collect_config
   *
   * Configuration overrides for this collection, such as tipping, surcharging, and customer cancellation settings.
   */
  collectConfig?: PostTerminalReadersReaderCollectPaymentMethodRequestCollectConfig;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
  /**
   * The ID of the PaymentIntent to collect a payment method for.
   */
  paymentIntent: string;
}

export const PostTerminalReadersReaderCollectPaymentMethodRequestSchema: TypedSchema<PostTerminalReadersReaderCollectPaymentMethodRequest> = typed<PostTerminalReadersReaderCollectPaymentMethodRequest>(object({
  get collectConfig() { return optional(PostTerminalReadersReaderCollectPaymentMethodRequestCollectConfigSchema) },
  expand: optional(array(string())),
  paymentIntent: string(),
}));