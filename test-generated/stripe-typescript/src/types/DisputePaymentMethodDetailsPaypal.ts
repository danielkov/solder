import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';
/**
 * DisputePaymentMethodDetailsPaypal
 *
 * 
 */
export interface DisputePaymentMethodDetailsPaypal {
  /**
   * The ID of the dispute in PayPal.
   */
  caseId?: string;
  /**
   * The reason for the dispute as defined by PayPal
   */
  reasonCode?: string;
}

export const DisputePaymentMethodDetailsPaypalSchema: TypedSchema<DisputePaymentMethodDetailsPaypal> = typed<DisputePaymentMethodDetailsPaypal>(object({
  caseId: optional(string()),
  reasonCode: optional(string()),
}));