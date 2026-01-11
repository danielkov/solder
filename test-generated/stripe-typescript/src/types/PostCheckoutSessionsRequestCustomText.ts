import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { PostCheckoutSessionsRequestAfterSubmit } from './PostCheckoutSessionsRequestAfterSubmit';
import { PostCheckoutSessionsRequestAfterSubmitSchema } from './PostCheckoutSessionsRequestAfterSubmit';
/**
 * custom_text_param
 *
 * Display additional text for your customers using custom text.
 */
export interface PostCheckoutSessionsRequestCustomText {
  afterSubmit?: PostCheckoutSessionsRequestAfterSubmit;
  shippingAddress?: PostCheckoutSessionsRequestAfterSubmit;
  submit?: PostCheckoutSessionsRequestAfterSubmit;
  termsOfServiceAcceptance?: PostCheckoutSessionsRequestAfterSubmit;
}

export const PostCheckoutSessionsRequestCustomTextSchema: TypedSchema<PostCheckoutSessionsRequestCustomText> = typed<PostCheckoutSessionsRequestCustomText>(object({
  get afterSubmit() { return optional(PostCheckoutSessionsRequestAfterSubmitSchema) },
  get shippingAddress() { return optional(PostCheckoutSessionsRequestAfterSubmitSchema) },
  get submit() { return optional(PostCheckoutSessionsRequestAfterSubmitSchema) },
  get termsOfServiceAcceptance() { return optional(PostCheckoutSessionsRequestAfterSubmitSchema) },
}));