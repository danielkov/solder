import { TypedSchema, object, string, typed } from '@speakeasy-api/tonic';
/**
 * TerminalConfigurationConfigurationResourcePersonalPSKWifi
 *
 * 
 */
export interface TerminalConfigurationConfigurationResourcePersonalPskWifi {
  /**
   * Password for connecting to the WiFi network
   */
  password: string;
  /**
   * Name of the WiFi network
   */
  ssid: string;
}

export const TerminalConfigurationConfigurationResourcePersonalPskWifiSchema: TypedSchema<TerminalConfigurationConfigurationResourcePersonalPskWifi> = typed<TerminalConfigurationConfigurationResourcePersonalPskWifi>(object({
  password: string(),
  ssid: string(),
}));