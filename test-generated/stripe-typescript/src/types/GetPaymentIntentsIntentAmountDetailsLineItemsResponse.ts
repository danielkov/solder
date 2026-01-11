import { TypedSchema, array, boolean, object, string, typed } from '@speakeasy-api/tonic';

import type { PaymentIntentAmountDetailsLineItem } from './PaymentIntentAmountDetailsLineItem';
import { PaymentIntentAmountDetailsLineItemSchema } from './PaymentIntentAmountDetailsLineItem';
/**
 * PaymentFlowsAmountDetailsResourceLineItemsList
 *
 * 
 */
export interface GetPaymentIntentsIntentAmountDetailsLineItemsResponse {
  /**
   * Details about each object.
   */
  data: Array<PaymentIntentAmountDetailsLineItem>;
  /**
   * True if this list has another page of items after this one that can be fetched.
   */
  hasMore: boolean;
  /**
   * String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
   */
  object: string;
  /**
   * The URL where this list can be accessed.
   */
  url: string;
}

export const GetPaymentIntentsIntentAmountDetailsLineItemsResponseSchema: TypedSchema<GetPaymentIntentsIntentAmountDetailsLineItemsResponse> = typed<GetPaymentIntentsIntentAmountDetailsLineItemsResponse>(object({
  data: array(PaymentIntentAmountDetailsLineItemSchema),
  hasMore: boolean(),
  object: string(),
  url: string(),
}));