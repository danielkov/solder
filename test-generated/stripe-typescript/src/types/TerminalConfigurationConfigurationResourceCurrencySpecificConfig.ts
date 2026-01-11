import { TypedSchema, array, number, object, optional, typed } from '@speakeasy-api/tonic';
/**
 * TerminalConfigurationConfigurationResourceCurrencySpecificConfig
 *
 * 
 */
export interface TerminalConfigurationConfigurationResourceCurrencySpecificConfig {
  /**
   * Fixed amounts displayed when collecting a tip
   */
  fixedAmounts?: Array<number>;
  /**
   * Percentages displayed when collecting a tip
   */
  percentages?: Array<number>;
  /**
   * Below this amount, fixed amounts will be displayed; above it, percentages will be displayed
   */
  smartTipThreshold?: number;
}

export const TerminalConfigurationConfigurationResourceCurrencySpecificConfigSchema: TypedSchema<TerminalConfigurationConfigurationResourceCurrencySpecificConfig> = typed<TerminalConfigurationConfigurationResourceCurrencySpecificConfig>(object({
  fixedAmounts: optional(array(number())),
  percentages: optional(array(number())),
  smartTipThreshold: optional(number()),
}));