import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { PostIssuingPersonalizationDesignsRequestFooterBody } from './PostIssuingPersonalizationDesignsRequestFooterBody';
import { PostIssuingPersonalizationDesignsRequestFooterBodySchema } from './PostIssuingPersonalizationDesignsRequestFooterBody';
import type { PostIssuingPersonalizationDesignsRequestFooterTitle } from './PostIssuingPersonalizationDesignsRequestFooterTitle';
import { PostIssuingPersonalizationDesignsRequestFooterTitleSchema } from './PostIssuingPersonalizationDesignsRequestFooterTitle';
/**
 * carrier_text_param
 *
 * Hash containing carrier text, for use with physical bundles that support carrier text.
 */
export interface PostIssuingPersonalizationDesignsRequestCarrierText {
  footerBody?: PostIssuingPersonalizationDesignsRequestFooterBody;
  footerTitle?: PostIssuingPersonalizationDesignsRequestFooterTitle;
  headerBody?: PostIssuingPersonalizationDesignsRequestFooterBody;
  headerTitle?: PostIssuingPersonalizationDesignsRequestFooterTitle;
}

export const PostIssuingPersonalizationDesignsRequestCarrierTextSchema: TypedSchema<PostIssuingPersonalizationDesignsRequestCarrierText> = typed<PostIssuingPersonalizationDesignsRequestCarrierText>(object({
  get footerBody() { return optional(PostIssuingPersonalizationDesignsRequestFooterBodySchema) },
  get footerTitle() { return optional(PostIssuingPersonalizationDesignsRequestFooterTitleSchema) },
  get headerBody() { return optional(PostIssuingPersonalizationDesignsRequestFooterBodySchema) },
  get headerTitle() { return optional(PostIssuingPersonalizationDesignsRequestFooterTitleSchema) },
}));