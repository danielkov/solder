import { TypedSchema, number, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostPaymentIntentsRequestLineItemsObjectPaymentMethodOptions } from './PostPaymentIntentsRequestLineItemsObjectPaymentMethodOptions';
import { PostPaymentIntentsRequestLineItemsObjectPaymentMethodOptionsSchema } from './PostPaymentIntentsRequestLineItemsObjectPaymentMethodOptions';
import type { PostPaymentIntentsRequestLineItemsObjectTax } from './PostPaymentIntentsRequestLineItemsObjectTax';
import { PostPaymentIntentsRequestLineItemsObjectTaxSchema } from './PostPaymentIntentsRequestLineItemsObjectTax';
/**
 * amount_details_line_item_param
 */
export interface PostPaymentIntentsRequestLineItemsObject {
  discountAmount?: number;
  /**
   * amount_details_line_item_payment_method_options_param
   */
  paymentMethodOptions?: PostPaymentIntentsRequestLineItemsObjectPaymentMethodOptions;
  productCode?: string;
  productName: string;
  quantity: number;
  /**
   * amount_details_line_item_tax_param
   */
  tax?: PostPaymentIntentsRequestLineItemsObjectTax;
  unitCost: number;
  unitOfMeasure?: string;
}

export const PostPaymentIntentsRequestLineItemsObjectSchema: TypedSchema<PostPaymentIntentsRequestLineItemsObject> = typed<PostPaymentIntentsRequestLineItemsObject>(object({
  discountAmount: optional(number()),
  get paymentMethodOptions() { return optional(PostPaymentIntentsRequestLineItemsObjectPaymentMethodOptionsSchema) },
  productCode: optional(string()),
  productName: string(),
  quantity: number(),
  get tax() { return optional(PostPaymentIntentsRequestLineItemsObjectTaxSchema) },
  unitCost: number(),
  unitOfMeasure: optional(string()),
}));