import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { PostIssuingPersonalizationDesignsRequestFooterBody } from './PostIssuingPersonalizationDesignsRequestFooterBody';
import { PostIssuingPersonalizationDesignsRequestFooterBodySchema } from './PostIssuingPersonalizationDesignsRequestFooterBody';
import type { PostIssuingPersonalizationDesignsRequestFooterTitle } from './PostIssuingPersonalizationDesignsRequestFooterTitle';
import { PostIssuingPersonalizationDesignsRequestFooterTitleSchema } from './PostIssuingPersonalizationDesignsRequestFooterTitle';
/**
 * carrier_text_param
 */
export interface PostIssuingPersonalizationDesignsPersonalizationDesignRequestCarrierTextObject {
  footerBody?: PostIssuingPersonalizationDesignsRequestFooterBody;
  footerTitle?: PostIssuingPersonalizationDesignsRequestFooterTitle;
  headerBody?: PostIssuingPersonalizationDesignsRequestFooterBody;
  headerTitle?: PostIssuingPersonalizationDesignsRequestFooterTitle;
}

export const PostIssuingPersonalizationDesignsPersonalizationDesignRequestCarrierTextObjectSchema: TypedSchema<PostIssuingPersonalizationDesignsPersonalizationDesignRequestCarrierTextObject> = typed<PostIssuingPersonalizationDesignsPersonalizationDesignRequestCarrierTextObject>(object({
  get footerBody() { return optional(PostIssuingPersonalizationDesignsRequestFooterBodySchema) },
  get footerTitle() { return optional(PostIssuingPersonalizationDesignsRequestFooterTitleSchema) },
  get headerBody() { return optional(PostIssuingPersonalizationDesignsRequestFooterBodySchema) },
  get headerTitle() { return optional(PostIssuingPersonalizationDesignsRequestFooterTitleSchema) },
}));