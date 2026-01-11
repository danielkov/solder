import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * payment_intent_amount_details_line_item_payment_method_options_param
 */
export interface PostPaymentIntentsRequestLineItemsObjectKlarna {
  imageUrl?: string;
  productUrl?: string;
  reference?: string;
  subscriptionReference?: string;
}

export const PostPaymentIntentsRequestLineItemsObjectKlarnaSchema: TypedSchema<PostPaymentIntentsRequestLineItemsObjectKlarna> = typed<PostPaymentIntentsRequestLineItemsObjectKlarna>(object({
  imageUrl: optional(string()),
  productUrl: optional(string()),
  reference: optional(string()),
  subscriptionReference: optional(string()),
}));