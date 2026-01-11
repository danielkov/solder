import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * amount_details_line_item_payment_method_options_param
 */
export interface PostPaymentIntentsRequestLineItemsObjectPaypal {
  category?: string;
  description?: string;
  soldBy?: string;
}

export const PostPaymentIntentsRequestLineItemsObjectPaypalSchema: TypedSchema<PostPaymentIntentsRequestLineItemsObjectPaypal> = typed<PostPaymentIntentsRequestLineItemsObjectPaypal>(object({
  category: optional(string()),
  description: optional(string()),
  soldBy: optional(string()),
}));