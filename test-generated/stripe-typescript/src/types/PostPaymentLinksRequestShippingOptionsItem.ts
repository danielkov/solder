import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * shipping_option_params
 */
export interface PostPaymentLinksRequestShippingOptionsItem {
  shippingRate?: string;
}

export const PostPaymentLinksRequestShippingOptionsItemSchema: TypedSchema<PostPaymentLinksRequestShippingOptionsItem> = typed<PostPaymentLinksRequestShippingOptionsItem>(object({
  shippingRate: optional(string()),
}));