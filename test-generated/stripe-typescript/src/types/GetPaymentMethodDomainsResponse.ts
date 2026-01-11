import { TypedSchema, array, boolean, object, string, typed } from '@speakeasy-api/tonic';

import type { PaymentMethodDomain } from './PaymentMethodDomain';
import { PaymentMethodDomainSchema } from './PaymentMethodDomain';
/**
 * PaymentMethodDomainResourcePaymentMethodDomainList
 *
 * 
 */
export interface GetPaymentMethodDomainsResponse {
  data: Array<PaymentMethodDomain>;
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

export const GetPaymentMethodDomainsResponseSchema: TypedSchema<GetPaymentMethodDomainsResponse> = typed<GetPaymentMethodDomainsResponse>(object({
  data: array(PaymentMethodDomainSchema),
  hasMore: boolean(),
  object: string(),
  url: string(),
}));