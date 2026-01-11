import { TypedSchema, object, string, typed } from '@speakeasy-api/tonic';
/**
 * personal_psk_config
 */
export interface PostTerminalConfigurationsRequestWifiObjectPersonalPsk {
  password: string;
  ssid: string;
}

export const PostTerminalConfigurationsRequestWifiObjectPersonalPskSchema: TypedSchema<PostTerminalConfigurationsRequestWifiObjectPersonalPsk> = typed<PostTerminalConfigurationsRequestWifiObjectPersonalPsk>(object({
  password: string(),
  ssid: string(),
}));