import { TypedSchema, array, string, typed, union } from '@speakeasy-api/tonic';
export type PostBillingPortalConfigurationsRequestAllowedUpdates = Array<string> | string;

export const PostBillingPortalConfigurationsRequestAllowedUpdatesSchema: TypedSchema<PostBillingPortalConfigurationsRequestAllowedUpdates> = typed<PostBillingPortalConfigurationsRequestAllowedUpdates>(union(array(string()), string()));