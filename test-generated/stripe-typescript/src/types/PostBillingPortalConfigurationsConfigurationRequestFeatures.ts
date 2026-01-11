import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { PostBillingPortalConfigurationsConfigurationRequestCustomerUpdate } from './PostBillingPortalConfigurationsConfigurationRequestCustomerUpdate';
import { PostBillingPortalConfigurationsConfigurationRequestCustomerUpdateSchema } from './PostBillingPortalConfigurationsConfigurationRequestCustomerUpdate';
import type { PostBillingPortalConfigurationsConfigurationRequestSubscriptionCancel } from './PostBillingPortalConfigurationsConfigurationRequestSubscriptionCancel';
import { PostBillingPortalConfigurationsConfigurationRequestSubscriptionCancelSchema } from './PostBillingPortalConfigurationsConfigurationRequestSubscriptionCancel';
import type { PostBillingPortalConfigurationsConfigurationRequestSubscriptionUpdate } from './PostBillingPortalConfigurationsConfigurationRequestSubscriptionUpdate';
import { PostBillingPortalConfigurationsConfigurationRequestSubscriptionUpdateSchema } from './PostBillingPortalConfigurationsConfigurationRequestSubscriptionUpdate';
import type { PostBillingPortalConfigurationsRequestInvoiceHistory } from './PostBillingPortalConfigurationsRequestInvoiceHistory';
import { PostBillingPortalConfigurationsRequestInvoiceHistorySchema } from './PostBillingPortalConfigurationsRequestInvoiceHistory';
import type { PostBillingPortalConfigurationsRequestPaymentMethodUpdate } from './PostBillingPortalConfigurationsRequestPaymentMethodUpdate';
import { PostBillingPortalConfigurationsRequestPaymentMethodUpdateSchema } from './PostBillingPortalConfigurationsRequestPaymentMethodUpdate';
/**
 * features_updating_param
 *
 * Information about the features available in the portal.
 */
export interface PostBillingPortalConfigurationsConfigurationRequestFeatures {
  /**
   * customer_update_updating_param
   */
  customerUpdate?: PostBillingPortalConfigurationsConfigurationRequestCustomerUpdate;
  /**
   * invoice_list_param
   */
  invoiceHistory?: PostBillingPortalConfigurationsRequestInvoiceHistory;
  /**
   * payment_method_update_param
   */
  paymentMethodUpdate?: PostBillingPortalConfigurationsRequestPaymentMethodUpdate;
  /**
   * subscription_cancel_updating_param
   */
  subscriptionCancel?: PostBillingPortalConfigurationsConfigurationRequestSubscriptionCancel;
  /**
   * subscription_update_updating_param
   */
  subscriptionUpdate?: PostBillingPortalConfigurationsConfigurationRequestSubscriptionUpdate;
}

export const PostBillingPortalConfigurationsConfigurationRequestFeaturesSchema: TypedSchema<PostBillingPortalConfigurationsConfigurationRequestFeatures> = typed<PostBillingPortalConfigurationsConfigurationRequestFeatures>(object({
  get customerUpdate() { return optional(PostBillingPortalConfigurationsConfigurationRequestCustomerUpdateSchema) },
  get invoiceHistory() { return optional(PostBillingPortalConfigurationsRequestInvoiceHistorySchema) },
  get paymentMethodUpdate() { return optional(PostBillingPortalConfigurationsRequestPaymentMethodUpdateSchema) },
  get subscriptionCancel() { return optional(PostBillingPortalConfigurationsConfigurationRequestSubscriptionCancelSchema) },
  get subscriptionUpdate() { return optional(PostBillingPortalConfigurationsConfigurationRequestSubscriptionUpdateSchema) },
}));