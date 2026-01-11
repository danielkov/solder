import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { PostPaymentIntentsRequestLineItemsObjectCard } from './PostPaymentIntentsRequestLineItemsObjectCard';
import { PostPaymentIntentsRequestLineItemsObjectCardSchema } from './PostPaymentIntentsRequestLineItemsObjectCard';
import type { PostPaymentIntentsRequestLineItemsObjectCardPresent } from './PostPaymentIntentsRequestLineItemsObjectCardPresent';
import { PostPaymentIntentsRequestLineItemsObjectCardPresentSchema } from './PostPaymentIntentsRequestLineItemsObjectCardPresent';
import type { PostPaymentIntentsRequestLineItemsObjectKlarna } from './PostPaymentIntentsRequestLineItemsObjectKlarna';
import { PostPaymentIntentsRequestLineItemsObjectKlarnaSchema } from './PostPaymentIntentsRequestLineItemsObjectKlarna';
import type { PostPaymentIntentsRequestLineItemsObjectPaypal } from './PostPaymentIntentsRequestLineItemsObjectPaypal';
import { PostPaymentIntentsRequestLineItemsObjectPaypalSchema } from './PostPaymentIntentsRequestLineItemsObjectPaypal';
/**
 * amount_details_line_item_payment_method_options_param
 */
export interface PostPaymentIntentsRequestLineItemsObjectPaymentMethodOptions {
  /**
   * payment_intent_amount_details_line_item_payment_method_options_param
   */
  card?: PostPaymentIntentsRequestLineItemsObjectCard;
  /**
   * amount_details_line_item_payment_method_options_param
   */
  cardPresent?: PostPaymentIntentsRequestLineItemsObjectCardPresent;
  /**
   * payment_intent_amount_details_line_item_payment_method_options_param
   */
  klarna?: PostPaymentIntentsRequestLineItemsObjectKlarna;
  /**
   * amount_details_line_item_payment_method_options_param
   */
  paypal?: PostPaymentIntentsRequestLineItemsObjectPaypal;
}

export const PostPaymentIntentsRequestLineItemsObjectPaymentMethodOptionsSchema: TypedSchema<PostPaymentIntentsRequestLineItemsObjectPaymentMethodOptions> = typed<PostPaymentIntentsRequestLineItemsObjectPaymentMethodOptions>(object({
  get card() { return optional(PostPaymentIntentsRequestLineItemsObjectCardSchema) },
  get cardPresent() { return optional(PostPaymentIntentsRequestLineItemsObjectCardPresentSchema) },
  get klarna() { return optional(PostPaymentIntentsRequestLineItemsObjectKlarnaSchema) },
  get paypal() { return optional(PostPaymentIntentsRequestLineItemsObjectPaypalSchema) },
}));