import { TypedSchema, array, boolean, object, optional, string, typed } from '@speakeasy-api/tonic';
export interface PostPaymentMethodDomainsPaymentMethodDomainRequest {
  /**
   * Whether this payment method domain is enabled. If the domain is not enabled, payment methods that require a payment method domain will not appear in Elements or Embedded Checkout.
   */
  enabled?: boolean;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
}

export const PostPaymentMethodDomainsPaymentMethodDomainRequestSchema: TypedSchema<PostPaymentMethodDomainsPaymentMethodDomainRequest> = typed<PostPaymentMethodDomainsPaymentMethodDomainRequest>(object({
  enabled: optional(boolean()),
  expand: optional(array(string())),
}));