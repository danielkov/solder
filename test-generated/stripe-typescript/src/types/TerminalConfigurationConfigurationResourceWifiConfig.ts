import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { TerminalConfigurationConfigurationResourceEnterprisePeapWifi } from './TerminalConfigurationConfigurationResourceEnterprisePeapWifi';
import { TerminalConfigurationConfigurationResourceEnterprisePeapWifiSchema } from './TerminalConfigurationConfigurationResourceEnterprisePeapWifi';
import type { TerminalConfigurationConfigurationResourceEnterpriseTlsWifi } from './TerminalConfigurationConfigurationResourceEnterpriseTlsWifi';
import { TerminalConfigurationConfigurationResourceEnterpriseTlsWifiSchema } from './TerminalConfigurationConfigurationResourceEnterpriseTlsWifi';
import type { TerminalConfigurationConfigurationResourcePersonalPskWifi } from './TerminalConfigurationConfigurationResourcePersonalPskWifi';
import { TerminalConfigurationConfigurationResourcePersonalPskWifiSchema } from './TerminalConfigurationConfigurationResourcePersonalPskWifi';
/**
 * TerminalConfigurationConfigurationResourceWifiConfig
 *
 * 
 */
export interface TerminalConfigurationConfigurationResourceWifiConfig {
  /**
   * TerminalConfigurationConfigurationResourceEnterprisePEAPWifi
   *
   * 
   */
  enterpriseEapPeap?: TerminalConfigurationConfigurationResourceEnterprisePeapWifi;
  /**
   * TerminalConfigurationConfigurationResourceEnterpriseTLSWifi
   *
   * 
   */
  enterpriseEapTls?: TerminalConfigurationConfigurationResourceEnterpriseTlsWifi;
  /**
   * TerminalConfigurationConfigurationResourcePersonalPSKWifi
   *
   * 
   */
  personalPsk?: TerminalConfigurationConfigurationResourcePersonalPskWifi;
  /**
   * Security type of the WiFi network. The hash with the corresponding name contains the credentials for this security type.
   */
  type: string;
}

export const TerminalConfigurationConfigurationResourceWifiConfigSchema: TypedSchema<TerminalConfigurationConfigurationResourceWifiConfig> = typed<TerminalConfigurationConfigurationResourceWifiConfig>(object({
  get enterpriseEapPeap() { return optional(TerminalConfigurationConfigurationResourceEnterprisePeapWifiSchema) },
  get enterpriseEapTls() { return optional(TerminalConfigurationConfigurationResourceEnterpriseTlsWifiSchema) },
  get personalPsk() { return optional(TerminalConfigurationConfigurationResourcePersonalPskWifiSchema) },
  type: string(),
}));