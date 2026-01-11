import { TypedSchema, number, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * payment_method_details_card_present_offline
 *
 * 
 */
export interface PaymentMethodDetailsCardPresentOffline {
  /**
   * Time at which the payment was collected while offline
   */
  storedAt?: number;
  /**
   * The method used to process this payment method offline. Only deferred is allowed.
   */
  type?: string;
}

export const PaymentMethodDetailsCardPresentOfflineSchema: TypedSchema<PaymentMethodDetailsCardPresentOffline> = typed<PaymentMethodDetailsCardPresentOffline>(object({
  storedAt: optional(number()),
  type: optional(string()),
}));