import { TypedSchema, object, optional, typed } from '@speakeasy-api/tonic';

import type { PostBillingPortalConfigurationsRequestCustomerUpdate } from './PostBillingPortalConfigurationsRequestCustomerUpdate';
import { PostBillingPortalConfigurationsRequestCustomerUpdateSchema } from './PostBillingPortalConfigurationsRequestCustomerUpdate';
import type { PostBillingPortalConfigurationsRequestInvoiceHistory } from './PostBillingPortalConfigurationsRequestInvoiceHistory';
import { PostBillingPortalConfigurationsRequestInvoiceHistorySchema } from './PostBillingPortalConfigurationsRequestInvoiceHistory';
import type { PostBillingPortalConfigurationsRequestPaymentMethodUpdate } from './PostBillingPortalConfigurationsRequestPaymentMethodUpdate';
import { PostBillingPortalConfigurationsRequestPaymentMethodUpdateSchema } from './PostBillingPortalConfigurationsRequestPaymentMethodUpdate';
import type { PostBillingPortalConfigurationsRequestSubscriptionCancel } from './PostBillingPortalConfigurationsRequestSubscriptionCancel';
import { PostBillingPortalConfigurationsRequestSubscriptionCancelSchema } from './PostBillingPortalConfigurationsRequestSubscriptionCancel';
import type { PostBillingPortalConfigurationsRequestSubscriptionUpdate } from './PostBillingPortalConfigurationsRequestSubscriptionUpdate';
import { PostBillingPortalConfigurationsRequestSubscriptionUpdateSchema } from './PostBillingPortalConfigurationsRequestSubscriptionUpdate';
/**
 * features_creation_param
 *
 * Information about the features available in the portal.
 */
export interface PostBillingPortalConfigurationsRequestFeatures {
  /**
   * customer_update_creation_param
   */
  customerUpdate?: PostBillingPortalConfigurationsRequestCustomerUpdate;
  /**
   * invoice_list_param
   */
  invoiceHistory?: PostBillingPortalConfigurationsRequestInvoiceHistory;
  /**
   * payment_method_update_param
   */
  paymentMethodUpdate?: PostBillingPortalConfigurationsRequestPaymentMethodUpdate;
  /**
   * subscription_cancel_creation_param
   */
  subscriptionCancel?: PostBillingPortalConfigurationsRequestSubscriptionCancel;
  /**
   * subscription_update_creation_param
   */
  subscriptionUpdate?: PostBillingPortalConfigurationsRequestSubscriptionUpdate;
}

export const PostBillingPortalConfigurationsRequestFeaturesSchema: TypedSchema<PostBillingPortalConfigurationsRequestFeatures> = typed<PostBillingPortalConfigurationsRequestFeatures>(object({
  get customerUpdate() { return optional(PostBillingPortalConfigurationsRequestCustomerUpdateSchema) },
  get invoiceHistory() { return optional(PostBillingPortalConfigurationsRequestInvoiceHistorySchema) },
  get paymentMethodUpdate() { return optional(PostBillingPortalConfigurationsRequestPaymentMethodUpdateSchema) },
  get subscriptionCancel() { return optional(PostBillingPortalConfigurationsRequestSubscriptionCancelSchema) },
  get subscriptionUpdate() { return optional(PostBillingPortalConfigurationsRequestSubscriptionUpdateSchema) },
}));