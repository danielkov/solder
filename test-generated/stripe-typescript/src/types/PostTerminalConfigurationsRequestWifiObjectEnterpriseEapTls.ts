import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * enterprise_tls_config
 */
export interface PostTerminalConfigurationsRequestWifiObjectEnterpriseEapTls {
  caCertificateFile?: string;
  clientCertificateFile: string;
  privateKeyFile: string;
  privateKeyFilePassword?: string;
  ssid: string;
}

export const PostTerminalConfigurationsRequestWifiObjectEnterpriseEapTlsSchema: TypedSchema<PostTerminalConfigurationsRequestWifiObjectEnterpriseEapTls> = typed<PostTerminalConfigurationsRequestWifiObjectEnterpriseEapTls>(object({
  caCertificateFile: optional(string()),
  clientCertificateFile: string(),
  privateKeyFile: string(),
  privateKeyFilePassword: optional(string()),
  ssid: string(),
}));