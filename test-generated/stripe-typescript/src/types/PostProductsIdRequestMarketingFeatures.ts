import { TypedSchema, array, string, typed, union } from '@speakeasy-api/tonic';

import type { PostProductsRequestMarketingFeaturesItem } from './PostProductsRequestMarketingFeaturesItem';
import { PostProductsRequestMarketingFeaturesItemSchema } from './PostProductsRequestMarketingFeaturesItem';
export type PostProductsIdRequestMarketingFeatures = Array<PostProductsRequestMarketingFeaturesItem> | string;

export const PostProductsIdRequestMarketingFeaturesSchema: TypedSchema<PostProductsIdRequestMarketingFeatures> = typed<PostProductsIdRequestMarketingFeatures>(union(array(PostProductsRequestMarketingFeaturesItemSchema), string()));