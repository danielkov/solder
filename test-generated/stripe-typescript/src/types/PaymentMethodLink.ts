import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * payment_method_link
 *
 * 
 */
export interface PaymentMethodLink {
  /**
   * Account owner's email address.
   */
  email?: string;
}

export const PaymentMethodLinkSchema: TypedSchema<PaymentMethodLink> = typed<PaymentMethodLink>(object({
  email: optional(string()),
}));