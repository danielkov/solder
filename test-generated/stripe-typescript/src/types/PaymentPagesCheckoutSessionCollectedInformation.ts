import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PaymentPagesCheckoutSessionCheckoutAddressDetails } from './PaymentPagesCheckoutSessionCheckoutAddressDetails';
import { PaymentPagesCheckoutSessionCheckoutAddressDetailsSchema } from './PaymentPagesCheckoutSessionCheckoutAddressDetails';
/**
 * PaymentPagesCheckoutSessionCollectedInformation
 *
 * 
 */
export interface PaymentPagesCheckoutSessionCollectedInformation {
  /**
   * Customer’s business name for this Checkout Session
   */
  businessName?: string;
  /**
   * Customer’s individual name for this Checkout Session
   */
  individualName?: string;
  /**
   * Shipping information for this Checkout Session.
   */
  shippingDetails?: PaymentPagesCheckoutSessionCheckoutAddressDetails;
}

export const PaymentPagesCheckoutSessionCollectedInformationSchema: TypedSchema<PaymentPagesCheckoutSessionCollectedInformation> = typed<PaymentPagesCheckoutSessionCollectedInformation>(object({
  businessName: optional(string()),
  individualName: optional(string()),
  get shippingDetails() { return optional(PaymentPagesCheckoutSessionCheckoutAddressDetailsSchema) },
}));