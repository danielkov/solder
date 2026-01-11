import { TypedSchema, object, string, typed } from '@speakeasy-api/tonic';
/**
 * features
 */
export interface PostProductsRequestMarketingFeaturesItem {
  name: string;
}

export const PostProductsRequestMarketingFeaturesItemSchema: TypedSchema<PostProductsRequestMarketingFeaturesItem> = typed<PostProductsRequestMarketingFeaturesItem>(object({
  name: string(),
}));