import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * payment_method_options_card_present_routing
 *
 * 
 */
export interface PaymentMethodOptionsCardPresentRouting {
  /**
   * Requested routing priority
   */
  requestedPriority?: string;
}

export const PaymentMethodOptionsCardPresentRoutingSchema: TypedSchema<PaymentMethodOptionsCardPresentRouting> = typed<PaymentMethodOptionsCardPresentRouting>(object({
  requestedPriority: optional(string()),
}));