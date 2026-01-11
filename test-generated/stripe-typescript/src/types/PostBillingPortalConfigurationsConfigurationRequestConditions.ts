import { TypedSchema, array, string, typed, union } from '@speakeasy-api/tonic';

import type { PostBillingPortalConfigurationsRequestConditionsItem } from './PostBillingPortalConfigurationsRequestConditionsItem';
import { PostBillingPortalConfigurationsRequestConditionsItemSchema } from './PostBillingPortalConfigurationsRequestConditionsItem';
export type PostBillingPortalConfigurationsConfigurationRequestConditions = Array<PostBillingPortalConfigurationsRequestConditionsItem> | string;

export const PostBillingPortalConfigurationsConfigurationRequestConditionsSchema: TypedSchema<PostBillingPortalConfigurationsConfigurationRequestConditions> = typed<PostBillingPortalConfigurationsConfigurationRequestConditions>(union(array(PostBillingPortalConfigurationsRequestConditionsItemSchema), string()));