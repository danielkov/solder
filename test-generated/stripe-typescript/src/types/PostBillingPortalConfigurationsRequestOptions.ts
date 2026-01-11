import { TypedSchema, array, string, typed, union } from '@speakeasy-api/tonic';
export type PostBillingPortalConfigurationsRequestOptions = Array<string> | string;

export const PostBillingPortalConfigurationsRequestOptionsSchema: TypedSchema<PostBillingPortalConfigurationsRequestOptions> = typed<PostBillingPortalConfigurationsRequestOptions>(union(array(string()), string()));