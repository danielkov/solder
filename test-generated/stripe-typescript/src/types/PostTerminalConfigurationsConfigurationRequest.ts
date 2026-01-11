import { TypedSchema, array, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostTerminalConfigurationsConfigurationRequestBbposWisepad3 } from './PostTerminalConfigurationsConfigurationRequestBbposWisepad3';
import { PostTerminalConfigurationsConfigurationRequestBbposWisepad3Schema } from './PostTerminalConfigurationsConfigurationRequestBbposWisepad3';
import type { PostTerminalConfigurationsConfigurationRequestBbposWiseposE } from './PostTerminalConfigurationsConfigurationRequestBbposWiseposE';
import { PostTerminalConfigurationsConfigurationRequestBbposWiseposESchema } from './PostTerminalConfigurationsConfigurationRequestBbposWiseposE';
import type { PostTerminalConfigurationsConfigurationRequestRebootWindow } from './PostTerminalConfigurationsConfigurationRequestRebootWindow';
import { PostTerminalConfigurationsConfigurationRequestRebootWindowSchema } from './PostTerminalConfigurationsConfigurationRequestRebootWindow';
import type { PostTerminalConfigurationsConfigurationRequestStripeS700 } from './PostTerminalConfigurationsConfigurationRequestStripeS700';
import { PostTerminalConfigurationsConfigurationRequestStripeS700Schema } from './PostTerminalConfigurationsConfigurationRequestStripeS700';
import type { PostTerminalConfigurationsConfigurationRequestVerifoneP400 } from './PostTerminalConfigurationsConfigurationRequestVerifoneP400';
import { PostTerminalConfigurationsConfigurationRequestVerifoneP400Schema } from './PostTerminalConfigurationsConfigurationRequestVerifoneP400';
import type { PostTerminalConfigurationsRequestOffline } from './PostTerminalConfigurationsRequestOffline';
import { PostTerminalConfigurationsRequestOfflineSchema } from './PostTerminalConfigurationsRequestOffline';
import type { PostTerminalConfigurationsRequestTipping } from './PostTerminalConfigurationsRequestTipping';
import { PostTerminalConfigurationsRequestTippingSchema } from './PostTerminalConfigurationsRequestTipping';
import type { PostTerminalConfigurationsRequestWifi } from './PostTerminalConfigurationsRequestWifi';
import { PostTerminalConfigurationsRequestWifiSchema } from './PostTerminalConfigurationsRequestWifi';
export interface PostTerminalConfigurationsConfigurationRequest {
  /**
   * An object containing device type specific settings for BBPOS WisePad 3 readers.
   */
  bbposWisepad3?: PostTerminalConfigurationsConfigurationRequestBbposWisepad3;
  /**
   * An object containing device type specific settings for BBPOS WisePOS E readers.
   */
  bbposWiseposE?: PostTerminalConfigurationsConfigurationRequestBbposWiseposE;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
  /**
   * Name of the configuration
   */
  name?: string;
  /**
   * Configurations for collecting transactions offline.
   */
  offline?: PostTerminalConfigurationsRequestOffline;
  /**
   * Reboot time settings for readers. that support customized reboot time configuration.
   */
  rebootWindow?: PostTerminalConfigurationsConfigurationRequestRebootWindow;
  /**
   * An object containing device type specific settings for Stripe S700 readers.
   */
  stripeS700?: PostTerminalConfigurationsConfigurationRequestStripeS700;
  /**
   * Tipping configurations for readers. supporting on-reader tips
   */
  tipping?: PostTerminalConfigurationsRequestTipping;
  /**
   * An object containing device type specific settings for Verifone P400 readers.
   */
  verifoneP400?: PostTerminalConfigurationsConfigurationRequestVerifoneP400;
  /**
   * Configurations for connecting to a WiFi network.
   */
  wifi?: PostTerminalConfigurationsRequestWifi;
}

export const PostTerminalConfigurationsConfigurationRequestSchema: TypedSchema<PostTerminalConfigurationsConfigurationRequest> = typed<PostTerminalConfigurationsConfigurationRequest>(object({
  get bbposWisepad3() { return optional(PostTerminalConfigurationsConfigurationRequestBbposWisepad3Schema) },
  get bbposWiseposE() { return optional(PostTerminalConfigurationsConfigurationRequestBbposWiseposESchema) },
  expand: optional(array(string())),
  name: optional(string()),
  get offline() { return optional(PostTerminalConfigurationsRequestOfflineSchema) },
  get rebootWindow() { return optional(PostTerminalConfigurationsConfigurationRequestRebootWindowSchema) },
  get stripeS700() { return optional(PostTerminalConfigurationsConfigurationRequestStripeS700Schema) },
  get tipping() { return optional(PostTerminalConfigurationsRequestTippingSchema) },
  get verifoneP400() { return optional(PostTerminalConfigurationsConfigurationRequestVerifoneP400Schema) },
  get wifi() { return optional(PostTerminalConfigurationsRequestWifiSchema) },
}));