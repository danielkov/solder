import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';
/**
 * The name of the configuration.
 */
export type PostBillingPortalConfigurationsRequestName = string | string;

export const PostBillingPortalConfigurationsRequestNameSchema: TypedSchema<PostBillingPortalConfigurationsRequestName> = typed<PostBillingPortalConfigurationsRequestName>(union(string(), string()));
