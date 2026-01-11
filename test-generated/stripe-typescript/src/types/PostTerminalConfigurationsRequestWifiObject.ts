import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostTerminalConfigurationsRequestWifiObjectEnterpriseEapPeap } from './PostTerminalConfigurationsRequestWifiObjectEnterpriseEapPeap';
import { PostTerminalConfigurationsRequestWifiObjectEnterpriseEapPeapSchema } from './PostTerminalConfigurationsRequestWifiObjectEnterpriseEapPeap';
import type { PostTerminalConfigurationsRequestWifiObjectEnterpriseEapTls } from './PostTerminalConfigurationsRequestWifiObjectEnterpriseEapTls';
import { PostTerminalConfigurationsRequestWifiObjectEnterpriseEapTlsSchema } from './PostTerminalConfigurationsRequestWifiObjectEnterpriseEapTls';
import type { PostTerminalConfigurationsRequestWifiObjectPersonalPsk } from './PostTerminalConfigurationsRequestWifiObjectPersonalPsk';
import { PostTerminalConfigurationsRequestWifiObjectPersonalPskSchema } from './PostTerminalConfigurationsRequestWifiObjectPersonalPsk';
/**
 * wifi
 */
export interface PostTerminalConfigurationsRequestWifiObject {
  /**
   * enterprise_peap_config
   */
  enterpriseEapPeap?: PostTerminalConfigurationsRequestWifiObjectEnterpriseEapPeap;
  /**
   * enterprise_tls_config
   */
  enterpriseEapTls?: PostTerminalConfigurationsRequestWifiObjectEnterpriseEapTls;
  /**
   * personal_psk_config
   */
  personalPsk?: PostTerminalConfigurationsRequestWifiObjectPersonalPsk;
  type: string;
}

export const PostTerminalConfigurationsRequestWifiObjectSchema: TypedSchema<PostTerminalConfigurationsRequestWifiObject> = typed<PostTerminalConfigurationsRequestWifiObject>(object({
  get enterpriseEapPeap() { return optional(PostTerminalConfigurationsRequestWifiObjectEnterpriseEapPeapSchema) },
  get enterpriseEapTls() { return optional(PostTerminalConfigurationsRequestWifiObjectEnterpriseEapTlsSchema) },
  get personalPsk() { return optional(PostTerminalConfigurationsRequestWifiObjectPersonalPskSchema) },
  type: string(),
}));