import { TypedSchema, boolean, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { TerminalConfigurationConfigurationResourceDeviceTypeSpecificConfig } from './TerminalConfigurationConfigurationResourceDeviceTypeSpecificConfig';
import { TerminalConfigurationConfigurationResourceDeviceTypeSpecificConfigSchema } from './TerminalConfigurationConfigurationResourceDeviceTypeSpecificConfig';
import type { TerminalConfigurationConfigurationResourceOfflineConfig } from './TerminalConfigurationConfigurationResourceOfflineConfig';
import { TerminalConfigurationConfigurationResourceOfflineConfigSchema } from './TerminalConfigurationConfigurationResourceOfflineConfig';
import type { TerminalConfigurationConfigurationResourceRebootWindow } from './TerminalConfigurationConfigurationResourceRebootWindow';
import { TerminalConfigurationConfigurationResourceRebootWindowSchema } from './TerminalConfigurationConfigurationResourceRebootWindow';
import type { TerminalConfigurationConfigurationResourceTipping } from './TerminalConfigurationConfigurationResourceTipping';
import { TerminalConfigurationConfigurationResourceTippingSchema } from './TerminalConfigurationConfigurationResourceTipping';
import type { TerminalConfigurationConfigurationResourceWifiConfig } from './TerminalConfigurationConfigurationResourceWifiConfig';
import { TerminalConfigurationConfigurationResourceWifiConfigSchema } from './TerminalConfigurationConfigurationResourceWifiConfig';
/**
 * TerminalConfigurationConfiguration
 *
 * A Configurations object represents how features should be configured for terminal readers.
For information about how to use it, see the [Terminal configurations documentation](https://docs.stripe.com/terminal/fleet/configurations-overview).
 */
export interface TerminalConfiguration {
  /**
   * TerminalConfigurationConfigurationResourceDeviceTypeSpecificConfig
   *
   * 
   */
  bbposWisepad3?: TerminalConfigurationConfigurationResourceDeviceTypeSpecificConfig;
  /**
   * TerminalConfigurationConfigurationResourceDeviceTypeSpecificConfig
   *
   * 
   */
  bbposWiseposE?: TerminalConfigurationConfigurationResourceDeviceTypeSpecificConfig;
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * Whether this Configuration is the default for your account
   */
  isAccountDefault?: boolean;
  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
  /**
   * String indicating the name of the Configuration object, set by the user
   */
  name?: string;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: string;
  /**
   * TerminalConfigurationConfigurationResourceOfflineConfig
   *
   * 
   */
  offline?: TerminalConfigurationConfigurationResourceOfflineConfig;
  /**
   * TerminalConfigurationConfigurationResourceRebootWindow
   *
   * 
   */
  rebootWindow?: TerminalConfigurationConfigurationResourceRebootWindow;
  /**
   * TerminalConfigurationConfigurationResourceDeviceTypeSpecificConfig
   *
   * 
   */
  stripeS700?: TerminalConfigurationConfigurationResourceDeviceTypeSpecificConfig;
  /**
   * TerminalConfigurationConfigurationResourceTipping
   *
   * 
   */
  tipping?: TerminalConfigurationConfigurationResourceTipping;
  /**
   * TerminalConfigurationConfigurationResourceDeviceTypeSpecificConfig
   *
   * 
   */
  verifoneP400?: TerminalConfigurationConfigurationResourceDeviceTypeSpecificConfig;
  /**
   * TerminalConfigurationConfigurationResourceWifiConfig
   *
   * 
   */
  wifi?: TerminalConfigurationConfigurationResourceWifiConfig;
}

export const TerminalConfigurationSchema: TypedSchema<TerminalConfiguration> = typed<TerminalConfiguration>(object({
  get bbposWisepad3() { return optional(TerminalConfigurationConfigurationResourceDeviceTypeSpecificConfigSchema) },
  get bbposWiseposE() { return optional(TerminalConfigurationConfigurationResourceDeviceTypeSpecificConfigSchema) },
  id: string(),
  isAccountDefault: optional(boolean()),
  livemode: boolean(),
  name: optional(string()),
  object: string(),
  get offline() { return optional(TerminalConfigurationConfigurationResourceOfflineConfigSchema) },
  get rebootWindow() { return optional(TerminalConfigurationConfigurationResourceRebootWindowSchema) },
  get stripeS700() { return optional(TerminalConfigurationConfigurationResourceDeviceTypeSpecificConfigSchema) },
  get tipping() { return optional(TerminalConfigurationConfigurationResourceTippingSchema) },
  get verifoneP400() { return optional(TerminalConfigurationConfigurationResourceDeviceTypeSpecificConfigSchema) },
  get wifi() { return optional(TerminalConfigurationConfigurationResourceWifiConfigSchema) },
}));