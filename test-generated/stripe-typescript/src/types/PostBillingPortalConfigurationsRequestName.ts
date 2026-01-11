import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';
export type PostBillingPortalConfigurationsRequestName = string | string;

export const PostBillingPortalConfigurationsRequestNameSchema: TypedSchema<PostBillingPortalConfigurationsRequestName> = typed<PostBillingPortalConfigurationsRequestName>(union(string(), string()));