import { TypedSchema, array, string, typed, union } from '@speakeasy-api/tonic';
export type PostBillingPortalConfigurationsRequestDefaultAllowedUpdates = Array<string> | string;

export const PostBillingPortalConfigurationsRequestDefaultAllowedUpdatesSchema: TypedSchema<PostBillingPortalConfigurationsRequestDefaultAllowedUpdates> = typed<PostBillingPortalConfigurationsRequestDefaultAllowedUpdates>(union(array(string()), string()));