import { TypedSchema, boolean, object, optional, typed } from '@speakeasy-api/tonic';
/**
 * process_setup_config
 *
 * Configuration overrides for this setup, such as MOTO and customer cancellation settings.
 */
export interface PostTerminalReadersReaderProcessSetupIntentRequestProcessConfig {
  enableCustomerCancellation?: boolean;
}

export const PostTerminalReadersReaderProcessSetupIntentRequestProcessConfigSchema: TypedSchema<PostTerminalReadersReaderProcessSetupIntentRequestProcessConfig> = typed<PostTerminalReadersReaderProcessSetupIntentRequestProcessConfig>(object({
  enableCustomerCancellation: optional(boolean()),
}));