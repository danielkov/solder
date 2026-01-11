import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';

import type { BillingPortalConfiguration } from './BillingPortalConfiguration';
import { BillingPortalConfigurationSchema } from './BillingPortalConfiguration';
export type ConfigurationOrRef = string | BillingPortalConfiguration;

export const ConfigurationOrRefSchema: TypedSchema<ConfigurationOrRef> = typed<ConfigurationOrRef>(union(string(), BillingPortalConfigurationSchema));