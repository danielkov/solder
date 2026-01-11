import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { PostAccountsRequestPaymentsPricing } from './PostAccountsRequestPaymentsPricing';
import { PostAccountsRequestPaymentsPricingSchema } from './PostAccountsRequestPaymentsPricing';
import type { PostCustomersCustomerSubscriptionsRequestPaymentMethodTypes } from './PostCustomersCustomerSubscriptionsRequestPaymentMethodTypes';
import { PostCustomersCustomerSubscriptionsRequestPaymentMethodTypesSchema } from './PostCustomersCustomerSubscriptionsRequestPaymentMethodTypes';
import type { PostInvoicesRequestPaymentMethodOptions } from './PostInvoicesRequestPaymentMethodOptions';
import { PostInvoicesRequestPaymentMethodOptionsSchema } from './PostInvoicesRequestPaymentMethodOptions';
/**
 * payment_settings
 *
 * Configuration settings for the PaymentIntent that is generated when the invoice is finalized.
 */
export interface PostInvoicesRequestPaymentSettings {
  defaultMandate?: PostAccountsRequestPaymentsPricing;
  /**
   * payment_method_options
   */
  paymentMethodOptions?: PostInvoicesRequestPaymentMethodOptions;
  paymentMethodTypes?: PostCustomersCustomerSubscriptionsRequestPaymentMethodTypes;
}

export const PostInvoicesRequestPaymentSettingsSchema: TypedSchema<PostInvoicesRequestPaymentSettings> = typed<PostInvoicesRequestPaymentSettings>(object({
  get defaultMandate() { return optional(PostAccountsRequestPaymentsPricingSchema) },
  get paymentMethodOptions() { return optional(PostInvoicesRequestPaymentMethodOptionsSchema) },
  get paymentMethodTypes() { return optional(PostCustomersCustomerSubscriptionsRequestPaymentMethodTypesSchema) },
}));