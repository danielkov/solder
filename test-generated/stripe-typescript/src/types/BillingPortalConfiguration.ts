import { TypedSchema, boolean, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { ApplicationUnion } from './ApplicationUnion';
import { ApplicationUnionSchema } from './ApplicationUnion';
import type { MetadataProperty } from './MetadataProperty';
import { MetadataPropertySchema } from './MetadataProperty';
import type { PortalBusinessProfile } from './PortalBusinessProfile';
import { PortalBusinessProfileSchema } from './PortalBusinessProfile';
import type { PortalFeatures } from './PortalFeatures';
import { PortalFeaturesSchema } from './PortalFeatures';
import type { PortalLoginPage } from './PortalLoginPage';
import { PortalLoginPageSchema } from './PortalLoginPage';
/**
 * PortalConfiguration
 *
 * A portal configuration describes the functionality and behavior you embed in a portal session. Related guide: [Configure the customer portal](/customer-management/configure-portal).
 */
export interface BillingPortalConfiguration {
  /**
   * Whether the configuration is active and can be used to create portal sessions.
   */
  active: boolean;
  /**
   * ID of the Connect Application that created the configuration.
   */
  application?: ApplicationUnion;
  /**
   * PortalBusinessProfile
   *
   * 
   */
  businessProfile: PortalBusinessProfile;
  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;
  /**
   * The default URL to redirect customers to when they click on the portal's link to return to your website. This can be [overriden](https://stripe.com/docs/api/customer_portal/sessions/create#create_portal_session-return_url) when creating the session.
   */
  defaultReturnUrl?: string;
  /**
   * PortalFeatures
   *
   * 
   */
  features: PortalFeatures;
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * Whether the configuration is the default. If `true`, this configuration can be managed in the Dashboard and portal sessions will use this configuration unless it is overriden when creating the session.
   */
  isDefault: boolean;
  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
  /**
   * PortalLoginPage
   *
   * 
   */
  loginPage: PortalLoginPage;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
   */
  metadata?: MetadataProperty;
  /**
   * The name of the configuration.
   */
  name?: string;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: string;
  /**
   * Time at which the object was last updated. Measured in seconds since the Unix epoch.
   */
  updated: number;
}

export const BillingPortalConfigurationSchema: TypedSchema<BillingPortalConfiguration> = typed<BillingPortalConfiguration>(object({
  active: boolean(),
  get application() { return optional(ApplicationUnionSchema) },
  businessProfile: PortalBusinessProfileSchema,
  created: number(),
  defaultReturnUrl: optional(string()),
  features: PortalFeaturesSchema,
  id: string(),
  isDefault: boolean(),
  livemode: boolean(),
  loginPage: PortalLoginPageSchema,
  get metadata() { return optional(MetadataPropertySchema) },
  name: optional(string()),
  object: string(),
  updated: number(),
}));