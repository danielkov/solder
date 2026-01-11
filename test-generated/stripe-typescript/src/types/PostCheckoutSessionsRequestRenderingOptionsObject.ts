import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * checkout_rendering_options_param
 */
export interface PostCheckoutSessionsRequestRenderingOptionsObject {
  amountTaxDisplay?: string;
  template?: string;
}

export const PostCheckoutSessionsRequestRenderingOptionsObjectSchema: TypedSchema<PostCheckoutSessionsRequestRenderingOptionsObject> = typed<PostCheckoutSessionsRequestRenderingOptionsObject>(object({
  amountTaxDisplay: optional(string()),
  template: optional(string()),
}));