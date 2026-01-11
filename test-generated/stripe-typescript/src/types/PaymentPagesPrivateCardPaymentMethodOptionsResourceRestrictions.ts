import { TypedSchema, array, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * PaymentPagesPrivateCardPaymentMethodOptionsResourceRestrictions
 *
 * 
 */
export interface PaymentPagesPrivateCardPaymentMethodOptionsResourceRestrictions {
  /**
   * Specify the card brands to block in the Checkout Session. If a customer enters or selects a card belonging to a blocked brand, they can't complete the Session.
   */
  brandsBlocked?: Array<string>;
}

export const PaymentPagesPrivateCardPaymentMethodOptionsResourceRestrictionsSchema: TypedSchema<PaymentPagesPrivateCardPaymentMethodOptionsResourceRestrictions> = typed<PaymentPagesPrivateCardPaymentMethodOptionsResourceRestrictions>(object({
  brandsBlocked: optional(array(string())),
}));