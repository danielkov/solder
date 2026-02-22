import { array, string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';

import type { PostBillingPortalConfigurationsRequestProductsObject } from './PostBillingPortalConfigurationsRequestProductsObject';
import { PostBillingPortalConfigurationsRequestProductsObjectSchema } from './PostBillingPortalConfigurationsRequestProductsObject';
export type PostBillingPortalConfigurationsRequestProducts = Array<PostBillingPortalConfigurationsRequestProductsObject> | string;

export const PostBillingPortalConfigurationsRequestProductsSchema: TypedSchema<PostBillingPortalConfigurationsRequestProducts> = typed<PostBillingPortalConfigurationsRequestProducts>(union(array(PostBillingPortalConfigurationsRequestProductsObjectSchema), string()));
