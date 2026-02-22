import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';

import type { BillingPortalConfiguration } from './BillingPortalConfiguration';
import { BillingPortalConfigurationSchema } from './BillingPortalConfiguration';
/**
 * The configuration used by this session, describing the features available.
 */
export type ConfigurationOrRef = string | BillingPortalConfiguration;

export const ConfigurationOrRefSchema: TypedSchema<ConfigurationOrRef> = typed<ConfigurationOrRef>(union(string(), BillingPortalConfigurationSchema));
