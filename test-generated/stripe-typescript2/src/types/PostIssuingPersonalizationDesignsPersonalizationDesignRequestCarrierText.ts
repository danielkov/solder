import { string, typed, union } from '@speakeasy-api/tonic';
import type { TypedSchema } from '@speakeasy-api/tonic';

import type { PostIssuingPersonalizationDesignsPersonalizationDesignRequestCarrierTextObject } from './PostIssuingPersonalizationDesignsPersonalizationDesignRequestCarrierTextObject';
import { PostIssuingPersonalizationDesignsPersonalizationDesignRequestCarrierTextObjectSchema } from './PostIssuingPersonalizationDesignsPersonalizationDesignRequestCarrierTextObject';
/**
 * Hash containing carrier text, for use with physical bundles that support carrier text.
 */
export type PostIssuingPersonalizationDesignsPersonalizationDesignRequestCarrierText = PostIssuingPersonalizationDesignsPersonalizationDesignRequestCarrierTextObject | string;

export const PostIssuingPersonalizationDesignsPersonalizationDesignRequestCarrierTextSchema: TypedSchema<PostIssuingPersonalizationDesignsPersonalizationDesignRequestCarrierText> = typed<PostIssuingPersonalizationDesignsPersonalizationDesignRequestCarrierText>(union(PostIssuingPersonalizationDesignsPersonalizationDesignRequestCarrierTextObjectSchema, string()));
