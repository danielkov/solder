import { TypedSchema, array, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostTerminalConfigurationsRequestBbposWisepad3 } from './PostTerminalConfigurationsRequestBbposWisepad3';
import { PostTerminalConfigurationsRequestBbposWisepad3Schema } from './PostTerminalConfigurationsRequestBbposWisepad3';
import type { PostTerminalConfigurationsRequestBbposWiseposE } from './PostTerminalConfigurationsRequestBbposWiseposE';
import { PostTerminalConfigurationsRequestBbposWiseposESchema } from './PostTerminalConfigurationsRequestBbposWiseposE';
import type { PostTerminalConfigurationsRequestOffline } from './PostTerminalConfigurationsRequestOffline';
import { PostTerminalConfigurationsRequestOfflineSchema } from './PostTerminalConfigurationsRequestOffline';
import type { PostTerminalConfigurationsRequestRebootWindow } from './PostTerminalConfigurationsRequestRebootWindow';
import { PostTerminalConfigurationsRequestRebootWindowSchema } from './PostTerminalConfigurationsRequestRebootWindow';
import type { PostTerminalConfigurationsRequestStripeS700 } from './PostTerminalConfigurationsRequestStripeS700';
import { PostTerminalConfigurationsRequestStripeS700Schema } from './PostTerminalConfigurationsRequestStripeS700';
import type { PostTerminalConfigurationsRequestTipping } from './PostTerminalConfigurationsRequestTipping';
import { PostTerminalConfigurationsRequestTippingSchema } from './PostTerminalConfigurationsRequestTipping';
import type { PostTerminalConfigurationsRequestVerifoneP400 } from './PostTerminalConfigurationsRequestVerifoneP400';
import { PostTerminalConfigurationsRequestVerifoneP400Schema } from './PostTerminalConfigurationsRequestVerifoneP400';
import type { PostTerminalConfigurationsRequestWifi } from './PostTerminalConfigurationsRequestWifi';
import { PostTerminalConfigurationsRequestWifiSchema } from './PostTerminalConfigurationsRequestWifi';
export interface PostTerminalConfigurationsRequest {
  /**
   * bbpos_wise_pad3
   *
   * An object containing device type specific settings for BBPOS WisePad 3 readers.
   */
  bbposWisepad3?: PostTerminalConfigurationsRequestBbposWisepad3;
  /**
   * bbpos_wise_pose
   *
   * An object containing device type specific settings for BBPOS WisePOS E readers.
   */
  bbposWiseposE?: PostTerminalConfigurationsRequestBbposWiseposE;
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
   * reboot_window
   *
   * Reboot time settings for readers. that support customized reboot time configuration.
   */
  rebootWindow?: PostTerminalConfigurationsRequestRebootWindow;
  /**
   * stripe_s700
   *
   * An object containing device type specific settings for Stripe S700 readers.
   */
  stripeS700?: PostTerminalConfigurationsRequestStripeS700;
  /**
   * Tipping configurations for readers. supporting on-reader tips
   */
  tipping?: PostTerminalConfigurationsRequestTipping;
  /**
   * verifone_p400
   *
   * An object containing device type specific settings for Verifone P400 readers.
   */
  verifoneP400?: PostTerminalConfigurationsRequestVerifoneP400;
  /**
   * Configurations for connecting to a WiFi network.
   */
  wifi?: PostTerminalConfigurationsRequestWifi;
}

export const PostTerminalConfigurationsRequestSchema: TypedSchema<PostTerminalConfigurationsRequest> = typed<PostTerminalConfigurationsRequest>(object({
  get bbposWisepad3() { return optional(PostTerminalConfigurationsRequestBbposWisepad3Schema) },
  get bbposWiseposE() { return optional(PostTerminalConfigurationsRequestBbposWiseposESchema) },
  expand: optional(array(string())),
  name: optional(string()),
  get offline() { return optional(PostTerminalConfigurationsRequestOfflineSchema) },
  get rebootWindow() { return optional(PostTerminalConfigurationsRequestRebootWindowSchema) },
  get stripeS700() { return optional(PostTerminalConfigurationsRequestStripeS700Schema) },
  get tipping() { return optional(PostTerminalConfigurationsRequestTippingSchema) },
  get verifoneP400() { return optional(PostTerminalConfigurationsRequestVerifoneP400Schema) },
  get wifi() { return optional(PostTerminalConfigurationsRequestWifiSchema) },
}));