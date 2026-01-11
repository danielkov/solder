import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * amount_details_line_item_payment_method_options_param
 */
export interface PostPaymentIntentsRequestLineItemsObjectCardPresent {
  commodityCode?: string;
}

export const PostPaymentIntentsRequestLineItemsObjectCardPresentSchema: TypedSchema<PostPaymentIntentsRequestLineItemsObjectCardPresent> = typed<PostPaymentIntentsRequestLineItemsObjectCardPresent>(object({
  commodityCode: optional(string()),
}));