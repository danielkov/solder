import { TypedSchema, array, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { SubscriptionsResourcePaymentMethodOptions } from './SubscriptionsResourcePaymentMethodOptions';
import { SubscriptionsResourcePaymentMethodOptionsSchema } from './SubscriptionsResourcePaymentMethodOptions';
/**
 * SubscriptionsResourcePaymentSettings
 *
 * 
 */
export interface SubscriptionsResourcePaymentSettings {
  /**
   * Payment-method-specific configuration to provide to invoices created by the subscription.
   */
  paymentMethodOptions?: SubscriptionsResourcePaymentMethodOptions;
  /**
   * The list of payment method types to provide to every invoice created by the subscription. If not set, Stripe attempts to automatically determine the types to use by looking at the invoice’s default payment method, the subscription’s default payment method, the customer’s default payment method, and your [invoice template settings](https://dashboard.stripe.com/settings/billing/invoice).
   */
  paymentMethodTypes?: Array<string>;
  /**
   * Configure whether Stripe updates `subscription.default_payment_method` when payment succeeds. Defaults to `off`.
   */
  saveDefaultPaymentMethod?: string;
}

export const SubscriptionsResourcePaymentSettingsSchema: TypedSchema<SubscriptionsResourcePaymentSettings> = typed<SubscriptionsResourcePaymentSettings>(object({
  get paymentMethodOptions() { return optional(SubscriptionsResourcePaymentMethodOptionsSchema) },
  paymentMethodTypes: optional(array(string())),
  saveDefaultPaymentMethod: optional(string()),
}));