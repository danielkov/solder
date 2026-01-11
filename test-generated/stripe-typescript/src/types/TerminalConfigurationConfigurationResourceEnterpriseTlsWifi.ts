import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * TerminalConfigurationConfigurationResourceEnterpriseTLSWifi
 *
 * 
 */
export interface TerminalConfigurationConfigurationResourceEnterpriseTlsWifi {
  /**
   * A File ID representing a PEM file containing the server certificate
   */
  caCertificateFile?: string;
  /**
   * A File ID representing a PEM file containing the client certificate
   */
  clientCertificateFile: string;
  /**
   * A File ID representing a PEM file containing the client RSA private key
   */
  privateKeyFile: string;
  /**
   * Password for the private key file
   */
  privateKeyFilePassword?: string;
  /**
   * Name of the WiFi network
   */
  ssid: string;
}

export const TerminalConfigurationConfigurationResourceEnterpriseTlsWifiSchema: TypedSchema<TerminalConfigurationConfigurationResourceEnterpriseTlsWifi> = typed<TerminalConfigurationConfigurationResourceEnterpriseTlsWifi>(object({
  caCertificateFile: optional(string()),
  clientCertificateFile: string(),
  privateKeyFile: string(),
  privateKeyFilePassword: optional(string()),
  ssid: string(),
}));