import { array, string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';

import type { PostProductsRequestMarketingFeaturesItem } from './PostProductsRequestMarketingFeaturesItem';
import { PostProductsRequestMarketingFeaturesItemSchema } from './PostProductsRequestMarketingFeaturesItem';
/**
 * A list of up to 15 marketing features for this product. These are displayed in [pricing tables](https://stripe.com/docs/payments/checkout/pricing-table).
 */
export type PostProductsIdRequestMarketingFeatures = Array<PostProductsRequestMarketingFeaturesItem> | string;

export const PostProductsIdRequestMarketingFeaturesSchema: TypedSchema<PostProductsIdRequestMarketingFeatures> = typed<PostProductsIdRequestMarketingFeatures>(union(array(PostProductsRequestMarketingFeaturesItemSchema), string()));
