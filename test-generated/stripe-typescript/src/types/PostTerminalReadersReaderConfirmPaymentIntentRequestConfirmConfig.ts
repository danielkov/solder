import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * confirm_config
 *
 * Configuration overrides for this confirmation, such as surcharge settings and return URL.
 */
export interface PostTerminalReadersReaderConfirmPaymentIntentRequestConfirmConfig {
  returnUrl?: string;
}

export const PostTerminalReadersReaderConfirmPaymentIntentRequestConfirmConfigSchema: TypedSchema<PostTerminalReadersReaderConfirmPaymentIntentRequestConfirmConfig> = typed<PostTerminalReadersReaderConfirmPaymentIntentRequestConfirmConfig>(object({
  returnUrl: optional(string()),
}));