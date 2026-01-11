import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { SplashscreenOrRef } from './SplashscreenOrRef';
import { SplashscreenOrRefSchema } from './SplashscreenOrRef';
/**
 * TerminalConfigurationConfigurationResourceDeviceTypeSpecificConfig
 *
 * 
 */
export interface TerminalConfigurationConfigurationResourceDeviceTypeSpecificConfig {
  /**
   * A File ID representing an image to display on the reader
   */
  splashscreen?: SplashscreenOrRef;
}

export const TerminalConfigurationConfigurationResourceDeviceTypeSpecificConfigSchema: TypedSchema<TerminalConfigurationConfigurationResourceDeviceTypeSpecificConfig> = typed<TerminalConfigurationConfigurationResourceDeviceTypeSpecificConfig>(object({
  get splashscreen() { return optional(SplashscreenOrRefSchema) },
}));