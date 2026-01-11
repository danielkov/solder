import { TypedSchema, array, boolean, object, string, typed } from '@speakeasy-api/tonic';

import type { PaymentIntent } from './PaymentIntent';
import { PaymentIntentSchema } from './PaymentIntent';
/**
 * PaymentFlowsPaymentIntentList
 *
 * 
 */
export interface GetPaymentIntentsResponse {
  data: Array<PaymentIntent>;
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

export const GetPaymentIntentsResponseSchema: TypedSchema<GetPaymentIntentsResponse> = typed<GetPaymentIntentsResponse>(object({
  data: array(PaymentIntentSchema),
  hasMore: boolean(),
  object: string(),
  url: string(),
}));