import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PaymentLinksResourcePaymentMethodReuseAgreement } from './PaymentLinksResourcePaymentMethodReuseAgreement';
import { PaymentLinksResourcePaymentMethodReuseAgreementSchema } from './PaymentLinksResourcePaymentMethodReuseAgreement';
/**
 * PaymentLinksResourceConsentCollection
 *
 * 
 */
export interface PaymentLinksResourceConsentCollection {
  /**
   * Settings related to the payment method reuse text shown in the Checkout UI.
   */
  paymentMethodReuseAgreement?: PaymentLinksResourcePaymentMethodReuseAgreement;
  /**
   * If set to `auto`, enables the collection of customer consent for promotional communications.
   */
  promotions?: string;
  /**
   * If set to `required`, it requires cutomers to accept the terms of service before being able to pay. If set to `none`, customers won't be shown a checkbox to accept the terms of service.
   */
  termsOfService?: string;
}

export const PaymentLinksResourceConsentCollectionSchema: TypedSchema<PaymentLinksResourceConsentCollection> = typed<PaymentLinksResourceConsentCollection>(object({
  get paymentMethodReuseAgreement() { return optional(PaymentLinksResourcePaymentMethodReuseAgreementSchema) },
  promotions: optional(string()),
  termsOfService: optional(string()),
}));