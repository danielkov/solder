import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { InvoiceInstallmentsCard } from './InvoiceInstallmentsCard';
import { InvoiceInstallmentsCardSchema } from './InvoiceInstallmentsCard';
/**
 * invoice_payment_method_options_card
 *
 * 
 */
export interface InvoicePaymentMethodOptionsCard {
  /**
   * invoice_installments_card
   *
   * 
   */
  installments?: InvoiceInstallmentsCard;
  /**
   * We strongly recommend that you rely on our SCA Engine to automatically prompt your customers for authentication based on risk level and [other requirements](https://stripe.com/docs/strong-customer-authentication). However, if you wish to request 3D Secure based on logic from your own fraud engine, provide this option. Read our guide on [manually requesting 3D Secure](https://stripe.com/docs/payments/3d-secure/authentication-flow#manual-three-ds) for more information on how this configuration interacts with Radar and our SCA Engine.
   */
  requestThreeDSecure?: string;
}

export const InvoicePaymentMethodOptionsCardSchema: TypedSchema<InvoicePaymentMethodOptionsCard> = typed<InvoicePaymentMethodOptionsCard>(object({
  get installments() { return optional(InvoiceInstallmentsCardSchema) },
  requestThreeDSecure: optional(string()),
}));