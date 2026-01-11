import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * TerminalConfigurationConfigurationResourceEnterprisePEAPWifi
 *
 * 
 */
export interface TerminalConfigurationConfigurationResourceEnterprisePeapWifi {
  /**
   * A File ID representing a PEM file containing the server certificate
   */
  caCertificateFile?: string;
  /**
   * Password for connecting to the WiFi network
   */
  password: string;
  /**
   * Name of the WiFi network
   */
  ssid: string;
  /**
   * Username for connecting to the WiFi network
   */
  username: string;
}

export const TerminalConfigurationConfigurationResourceEnterprisePeapWifiSchema: TypedSchema<TerminalConfigurationConfigurationResourceEnterprisePeapWifi> = typed<TerminalConfigurationConfigurationResourceEnterprisePeapWifi>(object({
  caCertificateFile: optional(string()),
  password: string(),
  ssid: string(),
  username: string(),
}));