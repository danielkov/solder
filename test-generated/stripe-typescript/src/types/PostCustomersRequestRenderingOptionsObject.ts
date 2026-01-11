import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * customer_rendering_options_param
 */
export interface PostCustomersRequestRenderingOptionsObject {
  amountTaxDisplay?: string;
  template?: string;
}

export const PostCustomersRequestRenderingOptionsObjectSchema: TypedSchema<PostCustomersRequestRenderingOptionsObject> = typed<PostCustomersRequestRenderingOptionsObject>(object({
  amountTaxDisplay: optional(string()),
  template: optional(string()),
}));