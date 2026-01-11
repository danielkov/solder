import { TypedSchema, boolean, object, optional, typed } from '@speakeasy-api/tonic';
/**
 * TerminalConfigurationConfigurationResourceOfflineConfig
 *
 * 
 */
export interface TerminalConfigurationConfigurationResourceOfflineConfig {
  /**
   * Determines whether to allow transactions to be collected while reader is offline. Defaults to false.
   */
  enabled?: boolean;
}

export const TerminalConfigurationConfigurationResourceOfflineConfigSchema: TypedSchema<TerminalConfigurationConfigurationResourceOfflineConfig> = typed<TerminalConfigurationConfigurationResourceOfflineConfig>(object({
  enabled: optional(boolean()),
}));