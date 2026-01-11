import { TypedSchema, array, boolean, object, optional, string, typed } from '@speakeasy-api/tonic';
export interface PostPaymentMethodDomainsRequest {
  /**
   * The domain name that this payment method domain object represents.
   */
  domainName: string;
  /**
   * Whether this payment method domain is enabled. If the domain is not enabled, payment methods that require a payment method domain will not appear in Elements or Embedded Checkout.
   */
  enabled?: boolean;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
}

export const PostPaymentMethodDomainsRequestSchema: TypedSchema<PostPaymentMethodDomainsRequest> = typed<PostPaymentMethodDomainsRequest>(object({
  domainName: string(),
  enabled: optional(boolean()),
  expand: optional(array(string())),
}));