import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * DisputePaymentMethodDetailsKlarna
 *
 * 
 */
export interface DisputePaymentMethodDetailsKlarna {
  /**
   * Chargeback loss reason mapped by Stripe from Klarna's chargeback loss reason
   */
  chargebackLossReasonCode?: string;
  /**
   * The reason for the dispute as defined by Klarna
   */
  reasonCode?: string;
}

export const DisputePaymentMethodDetailsKlarnaSchema: TypedSchema<DisputePaymentMethodDetailsKlarna> = typed<DisputePaymentMethodDetailsKlarna>(object({
  chargebackLossReasonCode: optional(string()),
  reasonCode: optional(string()),
}));