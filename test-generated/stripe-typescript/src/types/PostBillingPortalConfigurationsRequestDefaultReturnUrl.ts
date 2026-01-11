import { TypedSchema, string, typed, union } from '@speakeasy-api/tonic';
export type PostBillingPortalConfigurationsRequestDefaultReturnUrl = string | string;

export const PostBillingPortalConfigurationsRequestDefaultReturnUrlSchema: TypedSchema<PostBillingPortalConfigurationsRequestDefaultReturnUrl> = typed<PostBillingPortalConfigurationsRequestDefaultReturnUrl>(union(string(), string()));