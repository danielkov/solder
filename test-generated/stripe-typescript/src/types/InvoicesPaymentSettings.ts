import { TypedSchema, array, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { InvoicesPaymentMethodOptions } from './InvoicesPaymentMethodOptions';
import { InvoicesPaymentMethodOptionsSchema } from './InvoicesPaymentMethodOptions';
/**
 * InvoicesPaymentSettings
 *
 * 
 */
export interface InvoicesPaymentSettings {
  /**
   * ID of the mandate to be used for this invoice. It must correspond to the payment method used to pay the invoice, including the invoice's default_payment_method or default_source, if set.
   */
  defaultMandate?: string;
  /**
   * Payment-method-specific configuration to provide to the invoice’s PaymentIntent.
   */
  paymentMethodOptions?: InvoicesPaymentMethodOptions;
  /**
   * The list of payment method types (e.g. card) to provide to the invoice’s PaymentIntent. If not set, Stripe attempts to automatically determine the types to use by looking at the invoice’s default payment method, the subscription’s default payment method, the customer’s default payment method, and your [invoice template settings](https://dashboard.stripe.com/settings/billing/invoice).
   */
  paymentMethodTypes?: Array<string>;
}

export const InvoicesPaymentSettingsSchema: TypedSchema<InvoicesPaymentSettings> = typed<InvoicesPaymentSettings>(object({
  defaultMandate: optional(string()),
  get paymentMethodOptions() { return optional(InvoicesPaymentMethodOptionsSchema) },
  paymentMethodTypes: optional(array(string())),
}));