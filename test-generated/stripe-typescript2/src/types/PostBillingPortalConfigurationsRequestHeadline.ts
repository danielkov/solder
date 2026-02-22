import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';
export type PostBillingPortalConfigurationsRequestHeadline = string | string;

export const PostBillingPortalConfigurationsRequestHeadlineSchema: TypedSchema<PostBillingPortalConfigurationsRequestHeadline> = typed<PostBillingPortalConfigurationsRequestHeadline>(union(string(), string()));
