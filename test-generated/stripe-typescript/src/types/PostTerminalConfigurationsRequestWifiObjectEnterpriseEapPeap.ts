import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * enterprise_peap_config
 */
export interface PostTerminalConfigurationsRequestWifiObjectEnterpriseEapPeap {
  caCertificateFile?: string;
  password: string;
  ssid: string;
  username: string;
}

export const PostTerminalConfigurationsRequestWifiObjectEnterpriseEapPeapSchema: TypedSchema<PostTerminalConfigurationsRequestWifiObjectEnterpriseEapPeap> = typed<PostTerminalConfigurationsRequestWifiObjectEnterpriseEapPeap>(object({
  caCertificateFile: optional(string()),
  password: string(),
  ssid: string(),
  username: string(),
}));