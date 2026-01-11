import { TypedSchema, array, boolean, object, string, typed } from '@speakeasy-api/tonic';

import type { PaymentMethod } from './PaymentMethod';
import { PaymentMethodSchema } from './PaymentMethod';
/**
 * PaymentFlowsPaymentMethodList
 *
 * 
 */
export interface GetPaymentMethodsResponse {
  data: Array<PaymentMethod>;
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

export const GetPaymentMethodsResponseSchema: TypedSchema<GetPaymentMethodsResponse> = typed<GetPaymentMethodsResponse>(object({
  data: array(PaymentMethodSchema),
  hasMore: boolean(),
  object: string(),
  url: string(),
}));