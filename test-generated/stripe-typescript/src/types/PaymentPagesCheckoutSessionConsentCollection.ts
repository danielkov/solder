import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PaymentPagesCheckoutSessionPaymentMethodReuseAgreement } from './PaymentPagesCheckoutSessionPaymentMethodReuseAgreement';
import { PaymentPagesCheckoutSessionPaymentMethodReuseAgreementSchema } from './PaymentPagesCheckoutSessionPaymentMethodReuseAgreement';
/**
 * PaymentPagesCheckoutSessionConsentCollection
 *
 * 
 */
export interface PaymentPagesCheckoutSessionConsentCollection {
  /**
   * If set to `hidden`, it will hide legal text related to the reuse of a payment method.
   */
  paymentMethodReuseAgreement?: PaymentPagesCheckoutSessionPaymentMethodReuseAgreement;
  /**
   * If set to `auto`, enables the collection of customer consent for promotional communications. The Checkout
Session will determine whether to display an option to opt into promotional communication
from the merchant depending on the customer's locale. Only available to US merchants.
   */
  promotions?: string;
  /**
   * If set to `required`, it requires customers to accept the terms of service before being able to pay.
   */
  termsOfService?: string;
}

export const PaymentPagesCheckoutSessionConsentCollectionSchema: TypedSchema<PaymentPagesCheckoutSessionConsentCollection> = typed<PaymentPagesCheckoutSessionConsentCollection>(object({
  get paymentMethodReuseAgreement() { return optional(PaymentPagesCheckoutSessionPaymentMethodReuseAgreementSchema) },
  promotions: optional(string()),
  termsOfService: optional(string()),
}));