import { TypedSchema, object, optional, string, typed } from '@speakeasy-api/tonic';

import type { PostCustomersCustomerSubscriptionsRequestPaymentMethodOptions } from './PostCustomersCustomerSubscriptionsRequestPaymentMethodOptions';
import { PostCustomersCustomerSubscriptionsRequestPaymentMethodOptionsSchema } from './PostCustomersCustomerSubscriptionsRequestPaymentMethodOptions';
import type { PostCustomersCustomerSubscriptionsRequestPaymentMethodTypes } from './PostCustomersCustomerSubscriptionsRequestPaymentMethodTypes';
import { PostCustomersCustomerSubscriptionsRequestPaymentMethodTypesSchema } from './PostCustomersCustomerSubscriptionsRequestPaymentMethodTypes';
/**
 * payment_settings
 *
 * Payment settings to pass to invoices created by the subscription.
 */
export interface PostCustomersCustomerSubscriptionsRequestPaymentSettings {
  /**
   * payment_method_options
   */
  paymentMethodOptions?: PostCustomersCustomerSubscriptionsRequestPaymentMethodOptions;
  paymentMethodTypes?: PostCustomersCustomerSubscriptionsRequestPaymentMethodTypes;
  saveDefaultPaymentMethod?: string;
}

export const PostCustomersCustomerSubscriptionsRequestPaymentSettingsSchema: TypedSchema<PostCustomersCustomerSubscriptionsRequestPaymentSettings> = typed<PostCustomersCustomerSubscriptionsRequestPaymentSettings>(object({
  get paymentMethodOptions() { return optional(PostCustomersCustomerSubscriptionsRequestPaymentMethodOptionsSchema) },
  get paymentMethodTypes() { return optional(PostCustomersCustomerSubscriptionsRequestPaymentMethodTypesSchema) },
  saveDefaultPaymentMethod: optional(string()),
}));