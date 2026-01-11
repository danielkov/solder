import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * payment_intent_amount_details_line_item_payment_method_options_param
 */
export interface PostPaymentIntentsRequestLineItemsObjectCard {
  commodityCode?: string;
}

export const PostPaymentIntentsRequestLineItemsObjectCardSchema: TypedSchema<PostPaymentIntentsRequestLineItemsObjectCard> = typed<PostPaymentIntentsRequestLineItemsObjectCard>(object({
  commodityCode: optional(string()),
}));